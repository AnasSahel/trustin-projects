import { Button } from '@/components/ui/button';
import { auth, signIn, signOut } from '@/lib/auth';

export default async function Home() {
  const session = await auth();

  return (
    <>
      <p>Hello, {session?.user?.name}</p>
      <p>Hello, {session?.user?.email}</p>

      <form>
        <Button
          formAction={async () => {
            'use server';
            await signIn('google');
          }}>
          Sign in with Google
        </Button>
        <Button
          formAction={async () => {
            'use server';
            await signOut();
          }}>
          Sign out
        </Button>
      </form>
    </>
  );
}
