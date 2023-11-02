import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large'
}

const Button: React.FC<Props> = ({
  children,
  size = 'default',
  ...props
}: Props) => {
  let className

  switch (size) {
    case 'small':
      className = 'px-2 py-1 text-sm'
      break
    case 'large':
      className = 'px-4 py-2 text-lg'
      break
    default:
      className = 'px-3 py-1.5 text-base'
      break
  }

  return (
    <button
      {...props}
      className={`rounded-lg bg-emerald-300 text-stone-900 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
