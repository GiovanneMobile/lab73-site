# EmailJS Setup Guide for Lab 73 Site

This document explains how to set up EmailJS for the Lab 73 contact form to enable email sending functionality.

## Overview

The contact form has been integrated with EmailJS to send emails directly from the client-side React application. When properly configured, it will send contact form submissions to a specified email address.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_xyz123`)

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with the following variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: Lab 73 Contact Form - {{service}}
   
   Nome: {{from_name}}
   Email: {{from_email}}
   Serviço: {{service}}
   Mensagem: {{message}}
   ```
4. Note down the **Template ID** (e.g., `template_abc456`)

### 4. Get Your Public Key

1. Go to "Account" -> "General"
2. Find your **Public Key** (e.g., `key_def789`)

### 5. Configure GitHub Secrets for Production

For production deployment, configure the EmailJS credentials as GitHub repository secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:
   - `EMAILJS_SERVICE_ID` = your_actual_service_id
   - `EMAILJS_TEMPLATE_ID` = your_actual_template_id
   - `EMAILJS_PUBLIC_KEY` = your_actual_public_key

### 6. Local Development Configuration

For local development and testing, you can either:

**Option A: Use environment variables (recommended)**
```bash
# Set environment variables in your shell
export REACT_APP_EMAILJS_SERVICE_ID=your_service_id
export REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
export REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Then start the development server
npm start
```

**Option B: Use .env file (for development only)**
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace the example values with your actual EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

⚠️ **Important**: The `.env` file is excluded from git and should **never** be committed to the repository.

## Testing

1. Start the development server:
   ```bash
   npm start
   ```

2. Navigate to the contact form
3. Fill out all required fields
4. Submit the form
5. Check your configured email address for the message

## Form Fields Mapping

The contact form sends the following data to EmailJS:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| Name       | `from_name`      | User's name |
| Email      | `from_email`     | User's email |
| Service    | `service`        | Selected service |
| Message    | `message`        | User's message |
| -          | `to_name`        | Always "Lab 73 Studio" |

## Error Handling

The form includes proper error handling:

- **Loading State**: Button shows "Enviando..." / "Sending..." while submitting
- **Success**: Shows success message and clears the form
- **Error**: Shows error message with fallback instructions
- **Configuration Missing**: Falls back to console logging for development

## Production Deployment

For production deployment on GitHub Pages:

1. **Configure GitHub Secrets**: Add your EmailJS credentials as repository secrets (see configuration section above)
2. **Automatic Deployment**: The GitHub Actions workflow will automatically inject the secrets as environment variables during the build process
3. **Security**: EmailJS credentials are securely stored as GitHub secrets and never exposed in the repository
4. **CORS**: Ensure the EmailJS domain is whitelisted if using strict CORS policies
5. **Testing**: Test the contact form thoroughly after deployment to ensure emails are being sent correctly

The deployment workflow automatically handles the environment variable injection from GitHub secrets, so no additional configuration is needed once the secrets are set up.
3. Test the contact form thoroughly before going live

## Security Notes

- **GitHub Secrets**: Production credentials are securely stored as GitHub repository secrets and never exposed in the codebase
- **EmailJS Public Keys**: EmailJS public keys are safe to expose in client-side code by design
- **No Sensitive Data in Repository**: EmailJS credentials are not stored in the repository, reducing security risks
- **Environment Separation**: Development and production use different configuration methods for enhanced security
- **Rate Limiting**: Consider implementing rate limiting on your EmailJS account settings to prevent abuse
- **The `.env` file**: If used for development, it's included in `.gitignore` to prevent accidental commits

## Troubleshooting

### Common Issues

1. **"Failed to fetch" error**: Check your internet connection and EmailJS service status
2. **Template not found**: Verify the template ID is correct
3. **Service not found**: Verify the service ID is correct
4. **Invalid public key**: Verify the public key is correct

### Development vs Production

- In development, if EmailJS is not configured, the form will show a success message but won't send emails
- Check browser console for detailed error messages
- Use browser developer tools to inspect network requests to EmailJS API

## Support

For EmailJS-specific issues, refer to the [EmailJS Documentation](https://www.emailjs.com/docs/).