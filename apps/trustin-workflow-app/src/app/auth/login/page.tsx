import { BackgroundLogin } from './background-login';
import { EmailPasswordLogin } from './email-password-login';
import { LoginTitle } from './login-title';

export default function LoginPage() {
  return (
    <div className="flex h-full flex-row space-x-8 p-4">
      <div className="flex w-1/2 flex-col space-y-8 self-center px-28 py-16">
        <LoginTitle />
        <EmailPasswordLogin />
      </div>
      <BackgroundLogin />
    </div>
  );
}
