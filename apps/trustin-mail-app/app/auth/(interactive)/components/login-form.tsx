import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  return (
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
  );
}
