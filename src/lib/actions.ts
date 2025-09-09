'use server';

import { contactFormSchema, type ContactFormState } from './schemas';

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    eventType: formData.get('eventType'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(validatedFields.data || {})) {
      fields[key] = formData.get(key)?.toString() ?? '';
    }
    return {
      message: 'Error: Please check the form fields.',
      fields,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  try {
    // Here you would typically send an email
    // For this example, we'll just log the data to the console
    console.log('New Quote Request:', validatedFields.data);

    return { message: 'Success! Your quote request has been sent.' };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
