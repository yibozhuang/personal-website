import { useEffect, useState } from "preact/hooks";
import { Command, Terminal } from "./Terminal.tsx";

export function TerminalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [_, setHasCompleted] = useState(false);

  const commands: Command[] = [
    {
      input: "whoami",
      output: "Yibo Zhuang",
    },
    {
      input: "company",
      output: "Apple",
    },
    {
      input: "education",
      output: "University of Waterloo, Computer Engineering Class of 2015",
    },
    {
      input: "location",
      output: "San Jose, CA, USA",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("terminal-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleTerminalComplete = () => {
    setHasCompleted(true);
  };

  return (
    <section id="terminal-section" className="terminal-section">
      {isVisible && (
        <>
          <Terminal
            commands={commands}
            typingSpeed={50}
            promptSymbol="$ "
            title="About Me"
            onComplete={handleTerminalComplete}
          />
        </>
      )}
    </section>
  );
}
