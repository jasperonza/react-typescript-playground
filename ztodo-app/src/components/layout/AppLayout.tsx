import { PropsWithChildren } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppNav from "./AppNav";
import { Link } from "react-router-dom";

type Props = PropsWithChildren;

export default function AppLayout({ children }: Props) {
  return (
    <>
      <div className="layoutWrapper">

        <AppHeader>
          <AppNav>
            <Link to={'/todo'}>Todo</Link>
          </AppNav>
        </AppHeader>

        <div className="contentWrapper">
          {children}
        </div>

        <AppFooter />
      </div>
    </>
  )
}