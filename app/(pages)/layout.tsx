import React from "react";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-screen flex flex-col flexCenter">
      {children}
    </section>
  );
};

export default rootLayout;
