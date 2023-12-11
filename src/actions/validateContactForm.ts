"use server";
import { getUrl } from "@/utils/url";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
      required_error: "This field is required",
    })
    .email(),
  subject: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "You must enter a subject" }),
  content: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "You must describe why you are contacting us" }),
});

export default async function validateContactFormFields(
  prevState: any,
  formData: FormData
) {
  console.debug(
    "🚀 ~ file: validateContactForm.ts:15 ~ validateFields ~ formData:",
    formData
  );
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    content: formData.get("content"),
  });
  console.debug(
    "🚀 ~ file: validateContactForm.ts:20 ~ validateFields ~ validatedFields:",
    validatedFields
  );

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.debug(
      "🚀 ~ file: validateContactForm.ts:39 ~ validatedFields:",
      validatedFields.error.flatten().fieldErrors
    );

    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${getUrl()}/api/contact`, {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.debug(
    "🚀 ~ file: validateContactForm.ts:38 ~ validateFields ~ result:",
    result
  );
  return result;
}
