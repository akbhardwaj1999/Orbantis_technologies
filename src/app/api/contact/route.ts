import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const mailUser = process.env.MAIL_USER
    const mailPass = process.env.MAIL_PASS

    if (!mailUser || !mailPass) {
      return NextResponse.json(
        { error: 'Email service not configured. Please set MAIL_USER and MAIL_PASS in .env.local file.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    })

    await transporter.sendMail({
      from: `"Orbantis Technologies Contact Form" <${mailUser}>`,
      to: mailUser, // Use email from .env.local file
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <tr>
                    <td style="background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Orbantis Technologies</h1>
                      <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Contact Form Submission</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <div style="background-color: #f8fafc; border-left: 4px solid #0066cc; padding: 20px; border-radius: 5px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">
                          <strong style="color: #0066cc;">Hello Team,</strong><br><br>
                          You have received a new message through the contact form on your website. Please review the details below and respond to the customer at your earliest convenience.
                        </p>
                      </div>
                      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
                        <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">Customer Information</h2>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                              <strong style="color: #666; font-size: 14px; display: inline-block; width: 100px;">Name:</strong>
                              <span style="color: #333; font-size: 15px; font-weight: 500;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                              <strong style="color: #666; font-size: 14px; display: inline-block; width: 100px;">Email:</strong>
                              <a href="mailto:${email}" style="color: #0066cc; font-size: 15px; text-decoration: none; font-weight: 500;">${email}</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px;">
                        <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">Message</h2>
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 5px; margin-top: 15px;">
                          <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                        </div>
                      </div>
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}?subject=Re: Contact Form Inquiry from ${name}" style="background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%); color: #ffffff; padding: 14px 35px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(0,102,204,0.3);">Reply to ${name}</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; color: #666; font-size: 12px;">This email was sent from the contact form on Orbantis Technologies website.</p>
                      <p style="margin: 5px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} Orbantis Technologies. All rights reserved.</p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
═══════════════════════════════════════════
  ORBANTIS TECHNOLOGIES
  New Contact Form Submission
═══════════════════════════════════════════

Hello Team,

You have received a new message through the contact form on your website. Please review the details below and respond to the customer at your earliest convenience.

───────────────────────────────────────────
CUSTOMER INFORMATION
───────────────────────────────────────────

Name: ${name}
Email: ${email}

───────────────────────────────────────────
MESSAGE
───────────────────────────────────────────

${message}

───────────────────────────────────────────

Reply to: ${email}

This email was sent from the contact form on Orbantis Technologies website.
© ${new Date().getFullYear()} Orbantis Technologies. All rights reserved.
      `.trim(),
    })

    try {
      await transporter.sendMail({
        from: `"Orbantis Technologies" <${mailUser}>`,
        to: email,
        subject: 'Thank you for contacting Orbantis Technologies!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <tr>
                      <td style="background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Orbantis Technologies</h1>
                        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank You for Contacting Us!</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 30px;">
                        <p style="color: #333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                          Hello <strong>${name}</strong>,
                        </p>
                        <p style="color: #333; font-size: 16px; line-height: 1.8; margin: 0 0 30px 0;">
                          Thank you for reaching out to Orbantis Technologies! We have successfully received your message and our team will review it shortly.
                        </p>
                        <p style="color: #333; font-size: 16px; line-height: 1.8; margin: 0 0 30px 0;">
                          We typically respond within <strong style="color: #0066cc;">24 hours</strong> during business days. If your inquiry is urgent, please feel free to call us directly.
                        </p>
                        <div style="background-color: #f8fafc; border-left: 4px solid #0066cc; padding: 20px; border-radius: 5px; margin-bottom: 30px;">
                          <h3 style="color: #0066cc; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Message:</h3>
                          <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                        </div>
                        <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Need Immediate Assistance?</h3>
                          <p style="margin: 5px 0; color: #666; font-size: 14px;">
                            📞 Phone: <a href="tel:+919805871945" style="color: #0066cc; text-decoration: none;">+91 9805871945</a>
                          </p>
                          <p style="margin: 5px 0; color: #666; font-size: 14px;">
                            📧 Email: <a href="mailto:${mailUser}" style="color: #0066cc; text-decoration: none;">${mailUser}</a>
                          </p>
                        </div>
                        <p style="color: #333; font-size: 16px; line-height: 1.8; margin: 30px 0 0 0;">
                          Best regards,<br>
                          <strong style="color: #0066cc;">Orbantis Technologies Team</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0; color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
                        <p style="margin: 5px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} Orbantis Technologies. All rights reserved.</p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
        text: `
═══════════════════════════════════════════
  ORBANTIS TECHNOLOGIES
  Thank You for Contacting Us!
═══════════════════════════════════════════

Hello ${name},

Thank you for reaching out to Orbantis Technologies! We have successfully received your message and our team will review it shortly.

We typically respond within 24 hours during business days. If your inquiry is urgent, please feel free to call us directly.

───────────────────────────────────────────
YOUR MESSAGE
───────────────────────────────────────────

${message}

───────────────────────────────────────────
NEED IMMEDIATE ASSISTANCE?
───────────────────────────────────────────

Phone: +91 9805871945
Email: ${mailUser}

───────────────────────────────────────────

Best regards,
Orbantis Technologies Team

This is an automated confirmation email. Please do not reply to this email.
© ${new Date().getFullYear()} Orbantis Technologies. All rights reserved.
        `.trim(),
      })
    } catch (confirmationError: any) {
      // Continue - main email was sent successfully
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    let errorMessage = 'Failed to send email'
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail App Password in .env.local file.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

