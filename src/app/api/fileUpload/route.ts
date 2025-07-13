import { NextRequest, NextResponse } from "next/server";
import cloudinary from '@/lib/cloudinary';
import type { UploadApiResponse } from 'cloudinary';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folderName = formData.get("folderName") as string;

    if (!file) {
      return NextResponse.json({
        msg: "File not found",
      }, { status: 404 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: folderName },
        (error, result) => {
          if (error || !result) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    return NextResponse.json({
      msg: "File uploaded",
      url: result.secure_url,
      public_id: result.public_id,
    }, { status: 200 });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      msg: "Error in fileupload route",
    }, { status: 500 });
  }
}
