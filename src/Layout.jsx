import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="p-7 w-full min-h-screen pt-32 overflow-x-hidden">
      {children}
    </main>
  )
}

export { Layout };