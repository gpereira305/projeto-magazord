import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-[1280px] w-full h-full mx-auto min-[1280px]:px-0 px-6 flex gap-10 pt-10 lg:flex-row flex-col pb-14">
      <h1 className="hidden">Github profile</h1>
      {children}
    </main>
  );
}
