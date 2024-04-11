import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">

      <form role="search">
        <SearchInput />
      </form>

      <Button>Default</Button>
      <Button size="sm">small</Button>
      <Button size="lg">large</Button>
      <Button size="icon">i</Button>
      <Button variant="destructive">Cancel</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">2nd</Button>
      <Button variant="ghost" size="icon" className="rounded-full">🚀</Button>

    </main>
  );
}
