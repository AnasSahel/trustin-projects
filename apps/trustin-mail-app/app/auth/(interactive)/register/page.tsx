import Link from 'next/link';
import RegisterForm from './register-form';

export default function Page() {
  return (
    <section className="space-y-12 px-24 py-32">
      <div className="space-y-2">
        <h1 className="text-center text-3xl font-bold">Create Account</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          <span>{`Already have an account? `}</span>
          <Link className="underline" href="/auth/login">
            Log in
          </Link>
        </p>
      </div>

      <RegisterForm />
    </section>
  );
}
