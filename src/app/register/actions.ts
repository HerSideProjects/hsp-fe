export async function submitRegistration(_: unknown, formData: FormData) {
  const name = formData.get("nama") as string;
  const phone_number = formData.get("phone_number") as string;
  const email = formData.get("email") as string;
  const major = formData.get("major") as string;
  const reasons = formData.get("reason") as string;
  const interests = formData.getAll("interest") as string[];
  const mbti = formData.get("mbti") as string;
  const file = formData.get("file") as File | null;

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
    major,
    mbti,
    reasons,
    interests,
    payment_proof: fileUrl
  };

    console.log("Submitting final payload:", finalPayload);

    await fetch("https://hsp-be.vercel.app/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
    });

  return { success: true, message: "Registration submitted!", fileUrl };
}

