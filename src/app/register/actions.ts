export async function submitRegistration(_: unknown, formData: FormData) {
  const name = formData.get("nama") as string;
  const phone_number = formData.get("phone_number") as string;
  const email = formData.get("email") as string;
  const major = formData.get("major") as string;
  const domicile = formData.get("domicile") as string;
  const university = formData.get("university") as string;
  const role = formData.get("role") as string;
  const matt = formData.get("matt") as string;
  const file = formData.get("file") as File | null;
  const selectedActivity = formData.get("activity") as string;

  let fileUrl = "";

  if (file) {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("folderName", "hsp-payment-evidence");

    const uploadRes = await fetch("/api/fileUpload", {
      method: "POST",
      body: uploadData,
    });

    if (uploadRes.ok) {
      const uploadJson = await uploadRes.json();
      fileUrl = uploadJson.url;
    } else {
      console.error("File upload failed");
      return { success: false, message: "Failed to upload file." };
    }
  }

  const finalPayload = {
    name,
    phone_number,
    email,
    domicile,
    university,
    major,
    role,
    matt,
    payment_proof: fileUrl,
    activity: selectedActivity,};
  try {
     const res = await fetch("http://hsp-be.vercel.app/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalPayload),
    });

    if (!res.ok) {
      const errorJson = await res.json().catch(() => ({}));

      if (Array.isArray(errorJson.detail)) {
        const messages = errorJson.detail.map((d: { msg: string }) => d.msg);
        return {
          success: false,
          message: messages,
        };
      }
      const errorMessage = errorJson.message || "Failed to submit registration.";
      return { success: false, message: errorMessage };
    }
    return { success: true, message: "Registration submitted!", fileUrl };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unexpected error occurred.";
    return {
      success: false,
      message: errorMessage,
    };
  }
}

