import { TerminalSection } from "../islands/TerminalSection.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="px-4 py-8 mx-auto bg-[#b5e5f8]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl">Hello! I'm Yibo</h1>
          <br />
          <p class="my-4">
            Computer Engineer. Programmer. Tech Ethusiast.
          </p>
        </div>
        <TerminalSection />
      </div>
    </div>
  );
}
