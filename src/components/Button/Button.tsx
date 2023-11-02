import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/utils/cn'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = tv({
  base: 'items-center justify-center rounded-full border font-medium transition-colors duration-300 ease-in-out focus:outline focus:outline-4',
  variants: {
    intent: {
      primary:
        'border-blue-300 bg-blue-300 text-blue-900 hover:bg-blue-400 focus:outline-blue-500 dark:border-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700',
      secondary:
        'border-rose-300 bg-rose-300 text-rose-900 hover:bg-rose-400 focus:outline-rose-500 dark:border-rose-800 dark:bg-rose-800 dark:text-white dark:hover:bg-rose-700',

      outline:
        'border-2 border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-blue-900',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-5 py-2.5 text-lg',
    },
    fullWidth: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1.5',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

const Button: React.FC<Props> = ({
  className,
  children,
  intent,
  size,
  ...props
}: Props) => {
  return (
    <button
      className={cn(buttonVariants({ intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
