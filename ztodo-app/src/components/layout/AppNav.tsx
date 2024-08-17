import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function AppNav({ children }: Props) {
  return (
    <div>
      {children ? children :
        <a href="">Default AppHeader and AppNav with link</a>
      }
    </div>
  )
}