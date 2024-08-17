import { ReactNode } from "react";

type Props = React.ComponentPropsWithRef<"button"> & {
  children?: ReactNode
}

export default function AppButton({ children, ...props }: Props) {
  return (
    <button {...props}>{children || 'click here'}</button>
  )
}