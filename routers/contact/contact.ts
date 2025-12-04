import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Name, email, subject, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Create Ethereal Email transporter (just like your working example!)
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "claire.cassin40@ethereal.email",
        pass: "m2JG7h3gKhRcM9yMeG",
      },
    });

    // Email content
    const msg = {
      from: '"TreatU Contact Form" <contact@treatu.com>',
      to: "sevenalmosteleven711@hotmail.com",
      subject: `TreatU Contact: ${subject}`,
      html: `
        <h2>New Contact Message from TreatU</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Reply to: ${email}</em></p>
      `,
      replyTo: email,
    };

    let info = await transporter.sendMail(msg);
    console.log("📧 Contact message sent: %s", info.messageId);
    console.log("🔗 Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
      previewUrl: nodemailer.getTestMessageUrl(info) // For testing - you can view the email!
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to process message. Please try again later.'
    });
  }
});

export default router;