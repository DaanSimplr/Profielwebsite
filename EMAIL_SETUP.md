# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form actually send emails.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (DaanSimpelaarWM@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code

Replace the placeholders in `main.js`:

```javascript
// Line 25: Replace YOUR_PUBLIC_KEY
emailjs.init("user_def456"); // Your actual public key

// Line 50: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test Your Form

1. Open your website
2. Fill out the contact form
3. Submit and check if you receive the email

## Alternative Options

### Option 2: Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to your form:
```html
<form class="contact-form" netlify>
```

### Option 3: Formspree
Replace form action with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 4: Backend API
Create a simple backend (Node.js, PHP, etc.) to handle form submissions.

## Troubleshooting

- **Emails not sending**: Check your EmailJS service connection
- **Template not working**: Verify template variables match your code
- **CORS errors**: Make sure you're using the correct EmailJS version

## Security Notes

- Never expose your private keys in frontend code
- EmailJS public key is safe to use in frontend
- Consider rate limiting for production use 