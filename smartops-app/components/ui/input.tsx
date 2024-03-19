import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva([
  'border-outline-variant flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm transition-colors',
  'placeholder:text-on-surface-variant',
  'focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-1',
  'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  'disabled:cursor-not-allowed disabled:opacity-50',
]);

export type InputProps = React.ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
