import { ReactNode } from "react";
import NavigationBar from "@/components/NavigationBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main className="">{children}</main> {/* pt-20 so content isn't hidden under Navbar */}
    </>
  );
};

export default Layout;
