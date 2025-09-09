'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting alt text for images in the image gallery.
 *
 * - suggestAltText - A function that takes an image data URI and returns a suggested alt text string.
 * - SuggestAltTextInput - The input type for the suggestAltText function.
 * - SuggestAltTextOutput - The return type for the suggestAltText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAltTextInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo to generate alt text for, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestAltTextInput = z.infer<typeof SuggestAltTextInputSchema>;

const SuggestAltTextOutputSchema = z.object({
  altText: z.string().describe('The suggested alt text for the image.'),
});
export type SuggestAltTextOutput = z.infer<typeof SuggestAltTextOutputSchema>;

export async function suggestAltText(input: SuggestAltTextInput): Promise<SuggestAltTextOutput> {
  return suggestAltTextFlow(input);
}

const altTextPrompt = ai.definePrompt({
  name: 'altTextPrompt',
  input: {schema: SuggestAltTextInputSchema},
  output: {schema: SuggestAltTextOutputSchema},
  prompt: `You are an SEO expert. Generate concise and descriptive alt text for the following image to improve its visibility in search engine results.

Image: {{media url=imageDataUri}}

Focus on describing the key elements and context of the image in a way that is both informative and relevant to the topic of catering and food services. The alt text should be less than 100 characters.
`,
});

const suggestAltTextFlow = ai.defineFlow(
  {
    name: 'suggestAltTextFlow',
    inputSchema: SuggestAltTextInputSchema,
    outputSchema: SuggestAltTextOutputSchema,
  },
  async input => {
    const {output} = await altTextPrompt(input);
    return output!;
  }
);
