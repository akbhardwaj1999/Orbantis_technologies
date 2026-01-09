import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
  },
})

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

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email service not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local file.' },
        { status: 500 }
      )
    }

    // Recipient email - always send to astha@orbantistechnologies.com
    const recipientEmail = 'astha@orbantistechnologies.com'
    
    // Use form email as "from" address
    const fromEmail = email

    // Send email to company
    console.log('Attempting to send email:', {
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      hasGmailConfig: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
    })

    // Send main email to company - THIS IS CRITICAL, MUST SUCCEED
    try {
      console.log('📧 Sending main email to company...', { to: recipientEmail, from: fromEmail })
      
      const mainEmailResult = await transporter.sendMail({
        from: `${name} <${fromEmail}>`, // Form email as from
        to: recipientEmail,
        replyTo: email, // User's email from form - replies will go directly to user
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
      })
      
      console.log('✅ Main email sent successfully!', {
        to: recipientEmail,
        from: fromEmail,
        messageId: mainEmailResult.messageId
      })
    } catch (sendError: any) {
      console.error('❌ CRITICAL: Main email failed to send!', {
        to: recipientEmail,
        error: sendError.message,
        code: sendError.code,
        status: sendError.status,
        response: sendError.response,
        fullError: JSON.stringify(sendError, null, 2)
      })
      // Don't continue if main email fails - this is the important one
      throw new Error(`Failed to send email to ${recipientEmail}: ${sendError.message || 'Unknown error'}`)
    }

    // Send confirmation email to customer
    try {
      await transporter.sendMail({
        from: `Orbantis Technologies <${process.env.GMAIL_USER}>`, // Use Gmail account as from
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
                            📧 Email: <a href="mailto:astha@orbantistechnologies.com" style="color: #0066cc; text-decoration: none;">astha@orbantistechnologies.com</a>
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
      })
    } catch (confirmationError: any) {
      // Continue - main email was sent successfully
      console.error('Confirmation email error:', confirmationError)
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    let errorMessage = 'Failed to send email'
    
    // Log full error for debugging
    console.error('Email sending error:', {
      message: error.message,
      code: error.code,
      status: error.status,
      fullError: error
    })
    
    if (error.message) {
      errorMessage = error.message
    } else if (error.code) {
      errorMessage = `Email error: ${error.code}`
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
