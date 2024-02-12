import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <section className="space-y-12 px-24 py-32">
      <div className="space-y-2">
        <h1 className="text-center text-3xl font-bold">Welcome Back</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          <span>{`Don't have an account yet? `}</span>
          <Link className="underline" href="/auth/register">
            Register
          </Link>
        </p>
      </div>

      <form>
        <div className="mb-4">
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input id="email" type="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </Label>
          <Input id="password" type="password" name="password" placeholder="Enter your password" required />
        </div>
        <Button className="w-full" type="submit" size="lg" color="primary">
          Connect to Mail
        </Button>
      </form>
    </section>
  );
}
