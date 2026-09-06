// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { processContactRequest } from "@/services/server/contact";
import { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Basic Validation: Ensure all fields exist
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Call the server service to send the email
    await processContactRequest(body);

    return NextResponse.json(
      { message: "Contact request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route Error (Contact):", error);
    return NextResponse.json(
      { error: "Something went wrong while processing the request." },
      { status: 500 }
    );
  }
}