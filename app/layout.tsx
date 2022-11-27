import "@styles/global.css";

import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import Main from "@components/layout/Main";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="w-screen h-screen space-y-5 flex flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
