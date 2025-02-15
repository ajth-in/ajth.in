"use client";
import MyInfo from "~/modules/home/MyInfo";
import Hero from "~/modules/home/Hero";

export default function Home() {
  return (
    <main className="pt-4">
      <MyInfo />
      <Hero />
    </main>
  );
}
