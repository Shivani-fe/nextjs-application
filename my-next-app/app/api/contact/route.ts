import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Store submissions locally only (no external sending)
export async function POST(request: NextRequest) {
  try {
    const { name, email, whatsapp, additionalContact, message } = await request.json();

    // Validate required fields
    if (!name || !whatsapp || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    console.log("=== Contact Form Submission ===");
    console.log("Name:", name);
    console.log("WhatsApp:", whatsapp);
    console.log("Email:", email || "Not provided");
    console.log("Additional Contact:", additionalContact || "Not provided");
    console.log("Message:", message);
    console.log("================================");

    const submission = {
      id: Date.now(),
      name,
      email: email || null,
      whatsapp,
      additionalContact: additionalContact || null,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "submissions.json");

      // Ensure data directory exists
      await fs.mkdir(dataDir, { recursive: true });

      // Read existing submissions
      let submissions: any[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch {
        submissions = [];
      }

      // Add new submission and write back
      submissions.push(submission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
      console.log("Submission saved locally to data/submissions.json");
    } catch (fileError) {
      console.error("Error saving submission locally:", fileError);
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Submission received and stored locally." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

