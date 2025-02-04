import React from 'react';
import { cn } from '../../lib/utils';

// Mimicking shadcn/ui Input component.
const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
