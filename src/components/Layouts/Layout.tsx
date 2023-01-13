import { Main } from "next/document";
import React from "react";
import {Footer} from "./Footer/Footer";
import Header from "./Header/Header";
type ChildrenProps = {
  children: JSX.Element;
};
export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
