'use client';

import {
  Button,
  FormField,
  FormFieldError,
  Input,
  Label,
} from '@/components/atoms';
import { useFormState } from 'react-dom';
import { registerAction } from './actions';

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerAction, {
    formErrors: [],
    fieldErrors: {},
  });

  return (
    <form className="w-1/2 space-y-4" action={formAction}>
      <div className="flex flex-col space-y-1 text-center">
        <h2 className="text-3xl font-bold">
          Keep your mail organized and get things done.
        </h2>
        <p className="text-sm text-gray-400">
          Create your account and get started
        </p>
      </div>

      <FormField>
        {' '}
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
        {state.fieldErrors.email && (
          <FormFieldError>{state.fieldErrors.email}</FormFieldError>
        )}
      </FormField>

      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required />
        {state.fieldErrors.password && (
          <FormFieldError>{state.fieldErrors.password}</FormFieldError>
        )}
      </FormField>

      <Button className="w-full">{"Let's Go!"}</Button>
    </form>
  );
}
