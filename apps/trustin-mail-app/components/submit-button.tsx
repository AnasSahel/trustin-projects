import { ReloadIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

type SubmitButtonProps = { default: ReactNode; pending: ReactNode };
export function SubmitButton({ default: defaultNode, pending: pendingNode }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return pending ? (
    <Button className="w-full" type="submit" size="lg" color="primary" aria-disabled={pending} disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {pendingNode}
    </Button>
  ) : (
    <Button className="w-full" type="submit" size="lg" color="primary" aria-disabled={pending}>
      {defaultNode}
    </Button>
  );
}
