import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export interface Command {
  input: string;
  output: string | string[];
}

interface TerminalProps {
  commands: Command[];
  typingSpeed?: number;
  promptSymbol?: string;
  className?: string;
  title?: string;
  autoStart?: boolean;
  onComplete?: () => void;
}

export function Terminal({
  commands,
  typingSpeed = 50,
  promptSymbol = "$ ",
  className = "",
  title = "",
  autoStart = true,
  onComplete,
}: TerminalProps) {
  const [displayedContent, setDisplayedContent] = useState<JSX.Element[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentOutputIndex, setCurrentOutputIndex] = useState(0);
  const [isTypingInput, setIsTypingInput] = useState(autoStart);
  const [currentTypedText, setCurrentTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedContent]);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      if (!isComplete) {
        setIsComplete(true);
      }
      return;
    }

    const currentCommand = commands[currentCommandIndex];

    if (isTypingInput) {
      if (currentTypedText.length < currentCommand.input.length) {
        const timer = setTimeout(() => {
          setCurrentTypedText(
            currentCommand.input.slice(0, currentTypedText.length + 1),
          );
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const updatedContent = [...displayedContent];
        updatedContent.push(
          <div key={`command-${currentCommandIndex}`} className="terminal-line">
            <span className="prompt">{promptSymbol}</span>
            <span className="command">{currentCommand.input}</span>
          </div>,
        );
        setDisplayedContent(updatedContent);
        setCurrentTypedText("");
        setIsTypingInput(false);
        return;
      }
    } else {
      const output = Array.isArray(currentCommand.output)
        ? currentCommand.output
        : [currentCommand.output];

      if (currentOutputIndex < output.length) {
        const timer = setTimeout(() => {
          const updatedContent = [...displayedContent];
          updatedContent.push(
            <div
              key={`output-${currentCommandIndex}-${currentOutputIndex}`}
              className="terminal-line"
            >
              <span className="output">{output[currentOutputIndex]}</span>
            </div>,
          );
          setDisplayedContent(updatedContent);
          setCurrentOutputIndex(currentOutputIndex + 1);
        }, typingSpeed * 5);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTypingInput(true);
          setCurrentOutputIndex(0);
          setCurrentCommandIndex(currentCommandIndex + 1);
        }, typingSpeed * 10);
        return () => clearTimeout(timer);
      }
    }
  }, [
    currentCommandIndex,
    currentOutputIndex,
    currentTypedText,
    isTypingInput,
    commands,
    displayedContent,
    typingSpeed,
    promptSymbol,
    isComplete,
  ]);

  const startAnimation = () => {
    if (!isTypingInput && currentCommandIndex === 0) {
      setIsTypingInput(true);
    }
  };

  return (
    <div className={`terminal-container ${className}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {displayedContent}
        {currentCommandIndex < commands.length && isTypingInput && (
          <div className="terminal-line">
            <span className="prompt">{promptSymbol}</span>
            <span className="command">{currentTypedText}</span>
            <span className="cursor">▋</span>
          </div>
        )}
        {!autoStart && currentCommandIndex === 0 && !isTypingInput && (
          <button
            type="button"
            onClick={startAnimation}
            className="terminal-start-button"
          >
            Click to start
          </button>
        )}
      </div>
    </div>
  );
}
