'use server';

import { database } from '@/lib/database';
import bcryptjs from 'bcryptjs';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
  .required();

type RegisterState = z.inferFlattenedErrors<typeof schema>;

export async function registerAction(_: RegisterState, formData: FormData) {
  const validationResult = schema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validationResult.success) {
    return validationResult.error.flatten();
  }

  try {
    await database.user.create({
      data: {
        id: `user-${uuidv4()}`,
        email: validationResult.data.email,
        password: await bcryptjs.hash(
          validationResult.data.password,
          +process.env.SALT_ROUND ?? 10
        ),
      },
    });
  } catch (e) {
    return {
      formErrors: ["Sorry, we couldn't create your account. Please try again."],
      fieldErrors: { email: [], password: [] },
    };
  }

  return redirect('/');
}
