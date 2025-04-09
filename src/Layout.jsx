import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="p-7 w-full min-h-screen">
      {children}
    </main>
  )
}

export { Layout };