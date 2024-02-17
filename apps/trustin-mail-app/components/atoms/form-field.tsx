import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const formFieldVariants = cva('flex flex-col space-y-1');

export type FormFieldProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof formFieldVariants>;

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(formFieldVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FormField.displayName = 'FormField';

export { FormField };
