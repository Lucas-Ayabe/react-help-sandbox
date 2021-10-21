import React from "react";
import { Container } from "../atoms";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="py:5">
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
