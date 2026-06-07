import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // For now, just log to console and return success
    // In production, you would integrate with EmailJS, SendGrid, or another email service
    console.log("Email received:", { name, email, message, timestamp: new Date().toISOString() })

    // Example integration with EmailJS (uncomment and configure when ready):
    // const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     service_id: process.env.EMAILJS_SERVICE_ID,
    //     template_id: process.env.EMAILJS_TEMPLATE_ID,
    //     user_id: process.env.EMAILJS_USER_ID,
    //     template_params: {
    //       from_name: name,
    //       from_email: email,
    //       message: message,
    //     },
    //   }),
    // })

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
