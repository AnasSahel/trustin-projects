import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const formFieldErrorVariants = cva(
  'text-[0.8rem] font-medium text-destructive'
);

export type FormFieldErrorProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof formFieldErrorVariants>;

const FormFieldError = React.forwardRef<HTMLInputElement, FormFieldErrorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(formFieldErrorVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FormFieldError.displayName = 'FormFieldError';

export { FormFieldError };
