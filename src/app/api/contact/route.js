import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Prepare email content (same for both recipients)
    const emailSubject = `Website Inquiry from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2B7FB8; border-bottom: 3px solid #FFD700; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p style="margin: 10px 0;"><strong>Project Type:</strong> ${projectType}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #3F4E5F;">Project Details:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2B7FB8; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This message was sent from the Umana Builders website contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
        </div>
      </div>
    `;
    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}

Project Details:
${message}

---
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
    `.trim();

    // Send separate emails to each recipient (blind - they can't see each other)
    const recipients = ['umanacorp@live.com', 'vairocanaproperties@gmail.com'];
    const emailPromises = recipients.map(recipient =>
      resend.emails.send({
        from: 'Umana Builders Website <onboarding@resend.dev>',
        to: [recipient],
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      })
    );

    // Send all emails in parallel
    const results = await Promise.allSettled(emailPromises);

    // Check if any emails failed
    const failedEmails = results.filter(result => result.status === 'rejected');

    if (failedEmails.length > 0) {
      console.error('Some emails failed to send:', failedEmails);
      // Even if some fail, we still return success if at least one was sent
      if (failedEmails.length === recipients.length) {
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data: results },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
