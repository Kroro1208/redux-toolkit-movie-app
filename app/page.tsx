"use client";
import { useAppSelector } from "@/hooks/storeHook";
import Header from "./components/Header";

export default function Home() {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
      </div>
    </div>
  );
}
