// src/app/api/quote/route.ts
import { NextResponse } from "next/server";
import { processQuoteRequest } from "@/services/server/quote";
import { QuoteFormData } from "@/types/quote";

export async function POST(request: Request) {
  try {
    const body: QuoteFormData = await request.json();

    // Basic Validation: Zaroori fields check kar rahay hain (Step 1 wali)
    if (!body.fullName || !body.email || !body.mobileNumber) {
      return NextResponse.json(
        { error: "Missing required contact details." },
        { status: 400 }
      );
    }

    // Server service call ki jo email send karegi
    await processQuoteRequest(body);

    return NextResponse.json(
      { message: "Quote request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing the request." },
      { status: 500 }
    );
  }
}