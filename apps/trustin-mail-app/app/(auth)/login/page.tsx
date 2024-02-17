import { Button, Input, Label } from '@/components/atoms';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      {/* Body */}
      <form className="w-1/2 space-y-4">
        <div className="mb-24 flex flex-col space-y-1 text-center">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="text-sm text-gray-400">
            Enter your email and password to access your account
          </p>
        </div>

        <div className="flex flex-col space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" required />
        </div>
        <Button className="w-full">Connect to Mail</Button>
      </form>

      {/* Footer */}
      <div className="text-sm">
        <p className="text-gray-400">
          {"Don't have an account? "}{' '}
          <Link className="font-semibold text-gray-900" href="/auth/register">
            Register Now
          </Link>
        </p>
      </div>
    </>
  );
}
