import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function AppCard({ children, ...props }: Props) {
  return (

    <div {...props}>
      {children}
    </div>
  )
}