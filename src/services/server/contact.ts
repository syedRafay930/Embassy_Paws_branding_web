import nodemailer from "nodemailer";
import { ContactFormData } from "@/types/contact";

export async function processContactRequest(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Embassy Paws" <${process.env.GMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: data.email, 
    subject: `New Contact Inquiry from ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #112239; padding: 24px; text-align: center;">
          <h2 style="color: #D4AF37; margin: 0; font-size: 24px; font-weight: 600;">New Contact Inquiry</h2>
          <p style="color: #ffffff; margin: 8px 0 0 0; font-size: 14px; opacity: 0.8;">Action required from website contact form</p>
        </div>

        <!-- Content -->
        <div style="padding: 32px 24px;">
          
          <!-- Sender Details -->
          <h3 style="color: #112239; font-size: 16px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">Contact Info</h3>
          <div style="background-color: #F8F3E6; padding: 16px; border-radius: 8px; border-left: 4px solid #D4AF37; margin-bottom: 28px;">
            <p style="margin: 0 0 8px 0; color: #333;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 0 0 8px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #112239;">${data.email}</a></p>
            <p style="margin: 0; color: #333;"><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          </div>

          <!-- Message -->
          <h3 style="color: #112239; font-size: 16px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #4b5563; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">Embassy Paws Automated System</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw new Error("Failed to send email");
  }
}