import { Button, Input, Label } from '@/components';

export function EmailPasswordLogin() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Your Email" required autoFocus />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" placeholder="Your Password" required />
      </div>
      <Button>Login</Button>
    </form>
  );
}
