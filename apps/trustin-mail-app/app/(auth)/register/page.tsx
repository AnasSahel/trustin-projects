import Link from 'next/link';
import RegisterForm from './register-form';

export default function Page() {
  return (
    <>
      {/* Body */}
      <RegisterForm />

      {/* Footer */}
      <div className="text-sm">
        <p className="text-gray-400">
          {'You already have an account? '}{' '}
          <Link className="font-semibold text-gray-900" href="/auth/login">
            Connect
          </Link>
        </p>
      </div>
    </>
  );
}
