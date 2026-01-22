import React from "react";
import Nav from "../components/Nav";
import Head from "../components/Head";
import Footer from "../components/Footer";

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head title={title} description={description} />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
