import { PropsWithChildren, ReactNode } from "react"
import AppNav from "./AppNav";

type Props = {
  children?: ReactNode;
  props?: PropsWithChildren;
}

export default function AppHeader({ children, props}: Props) {

  return (
    <header {...props}>
      {children ? children :
        <AppNav>
          <div>This is default AppHeader AppNav</div>
        </AppNav>
      }
    </header>
  )
}