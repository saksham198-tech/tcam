'use server';
/**
 * @fileOverview This file defines a Genkit flow that extracts style guidelines, structure, and inspirational details from a given URL
 * and generates the basic structure and content for a website.
 *
 * - generateInitialContent - The function to trigger the content generation flow.
 * - InitialContentInput - The input type for the generateInitialContent function.
 * - InitialContentOutput - The return type for the generateInitialContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialContentInputSchema = z.object({
  inspirationUrl: z
    .string()
    .url()
    .describe('The URL of the website to extract inspiration from.'),
});
export type InitialContentInput = z.infer<typeof InitialContentInputSchema>;

const InitialContentOutputSchema = z.object({
  styleGuidelines: z.string().describe('The extracted style guidelines.'),
  structure: z.string().describe('The extracted website structure.'),
  inspirationalDetails: z.string().describe('The extracted inspirational details.'),
  contentSuggestions: z.string().describe('Suggestions for initial website content.'),
});
export type InitialContentOutput = z.infer<typeof InitialContentOutputSchema>;

export async function generateInitialContent(input: InitialContentInput): Promise<InitialContentOutput> {
  return generateInitialContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialContentPrompt',
  input: {schema: InitialContentInputSchema},
  output: {schema: InitialContentOutputSchema},
  prompt: `You are an AI assistant specialized in website design and content creation. Analyze the provided URL and extract style guidelines, \nstructure, and inspirational details. Based on these, generate suggestions for the basic structure and content for a music institute website (TCAM - The Chromatica Academy of Music).\n\nURL: {{{inspirationUrl}}}\n\nOutput the style guidelines, structure, inspirational details, and content suggestions in a structured format. Focus on extracting relevant information related to the example site's design, layout, color scheme, and overall aesthetic, then suggest how these elements could be adapted for the TCAM website.  Make the guidelines specific.  For example, note the fonts and colors in use.\n\nConsider the primary color should be Deep violet (#483D8B), background color should be Light grey (#E6E6FA), accent color should be Light purple (#B098C4), and the body and headline font should be 'Inter' sans-serif.  Suggest how these could be incorporated.
\nEnsure that the content suggestions include sections and pages such as Home/About Us, Instruments & Courses, Contact, Enroll Now, Book a Free Demo Session, Gallery, Testimonials, and a Registration Form. Include a few brief sentences of suggested copy for each section, but note that this is initial content, not production-ready content.
`,
});

const generateInitialContentFlow = ai.defineFlow(
  {
    name: 'generateInitialContentFlow',
    inputSchema: InitialContentInputSchema,
    outputSchema: InitialContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
