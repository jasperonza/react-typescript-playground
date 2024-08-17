import { PropsWithChildren } from 'react';

type Props = PropsWithChildren

export default function AppCardHeader({ children, ...props }: Props) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}