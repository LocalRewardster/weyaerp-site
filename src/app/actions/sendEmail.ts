'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData) {
  try {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Please provide a valid email address.',
      };
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        error: 'Email service is not configured. Please contact support.',
      };
    }

    // Send email
    const result = await resend.emails.send({
      from: 'WeyaERP Contact Form <noreply@weyaerp.com>',
      to: ['hello@weyaerp.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4B3426;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${formData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the WeyaERP contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return {
        success: false,
        error: 'Failed to send email. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
    };

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
} 