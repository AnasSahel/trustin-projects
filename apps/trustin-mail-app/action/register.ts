'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';
import { redirect } from 'next/navigation';
import { v4 } from 'uuid';
import { z } from 'zod';

const RegisterSchema = z.object({
  email: z.string().email({ message: 'You must provide a valid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

type RegisterState = z.inferFlattenedErrors<typeof RegisterSchema>;
export async function registerAction(_: RegisterState, formData: FormData): Promise<RegisterState> {
  const { email, password } = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const validation = RegisterSchema.safeParse({ email, password });

  if (!validation.success) {
    return validation.error.flatten();
  }
  try {
    await prisma.user.create({
      data: {
        id: `user-${v4()}`,
        email: validation.data.email,
        password: await bcryptjs.hash(validation.data.password, +process.env.SALT_ROUND! ?? 10),
      },
    });
  } catch (error) {
    return { formErrors: ['Sorry, something went wrong'], fieldErrors: {} };
  }

  return redirect('/auth/login');
}
