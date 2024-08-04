import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props}>{label}</button>
  )
}
