import { PropsWithChildren } from 'react';

type Props = PropsWithChildren

export default function AppCardFooter({ children, ...props }: Props) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}