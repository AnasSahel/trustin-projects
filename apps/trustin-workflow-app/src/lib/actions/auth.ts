'use server';

import { z } from 'zod';

const authenticateWithEmailAndPassword = async (formData: FormData) => {
  const schema = z.object({ email: z.string().email(), password: z.string() });

  const result = schema.safeParse({ email: formData.get('email'), password: formData.get('password') });

  if (!result.success) {
    return;
  }

  const { email, password } = result.data;
};

export { authenticateWithEmailAndPassword };
