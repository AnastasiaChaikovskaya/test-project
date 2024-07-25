import React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const paragraphVariants = cva('text-app-accent-black font-primary', {
  variants: {
    variant: {
      'size-16': 'text-[16px] leading-[24px]',
      'size-14': 'text-[14px] leading-[20px]',
      'size-12': 'text-[12px] leading-[14px]',
      'size-10': 'text-[10px] leading-[12px]',
    },
    type: {
      'body-700': 'font-bold',
      'body-600': 'font-semibold',
      'body-500': 'font-medium',
      'body-400': 'font-normal',
    },
  },
  defaultVariants: {
    variant: 'size-16',
    type: 'body-400',
  },
});

export interface TextProperties
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  className?: string;
  children: React.ReactNode;
}
export const Text = React.forwardRef<HTMLParagraphElement, TextProperties>(
  ({ transform, variant, className, type, children, ...props }, reference) => {
    return (
      <p
        className={cn(paragraphVariants({ variant, type, className }), {
          [`${transform}`]: transform,
        })}
        ref={reference}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Text.displayName = 'Text';
