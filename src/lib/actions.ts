'use server';

import { suggestAltText } from '@/ai/flows/image-gallery-alt-text-suggestion';
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


export async function generateAltTextAction(imageDataUri: string): Promise<{ altText?: string, error?: string }> {
    if (!imageDataUri) {
        return { error: 'Image data is missing.' };
    }
    try {
        const result = await suggestAltText({ imageDataUri });
        return { altText: result.altText };
    } catch (e) {
        console.error(e);
        const error = e instanceof Error ? e.message : 'An unknown error occurred';
        return { error: `Failed to generate alt text: ${error}` };
    }
}
