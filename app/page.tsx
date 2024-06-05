import Hero from "@/components/hero";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <Hero />
    </main>
  );
}
