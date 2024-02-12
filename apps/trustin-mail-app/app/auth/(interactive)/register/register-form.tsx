'use client';

import { registerAction } from '@/action/register';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerAction, { formErrors: [], fieldErrors: {} });

  return (
    <form action={formAction}>
      {state.formErrors.length > 0 && (
        <div className="mb-4">
          <ul className="text-sm text-red-500">
            {state.formErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-4">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input id="email" type="email" name="email" placeholder="Enter your email" required />
        {state.fieldErrors.email && <p className="text-sm text-red-500">{state.fieldErrors.email}</p>}
      </div>
      <div className="mb-6">
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input id="password" type="password" name="password" placeholder="Enter your password" required />
        {state.fieldErrors.password && <p className="text-sm text-red-500">{state.fieldErrors.password}</p>}
      </div>
      <SubmitButton default={'Create Account'} pending={'Creating Account...'} />
    </form>
  );
}
