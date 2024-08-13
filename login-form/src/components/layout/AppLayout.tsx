import { PropsWithChildren } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

type Props = PropsWithChildren;

export default function AppLayout({ children }: Props) {
  return (
    <>
      <div className="layoutWrapper">
        <AppHeader />
        <div className="contentWrapper">
          {children}
        </div>
        <AppFooter />
      </div>
    </>
  )
}