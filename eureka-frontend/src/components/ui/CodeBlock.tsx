import { useState, ReactNode, isValidElement } from "react";
import { FiClipboard, FiCheck } from "react-icons/fi";

// Helper function to extract plain text from React children
const extractText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement(node) && node.props.children) {
    return extractText(node.props.children);
  }
  return "";
};

const CodeBlock = ({ children, className }: { children: ReactNode; className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    // Extract the text instead of casting to String
    const codeText = extractText(children).trim(); 
    
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group my-4">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 p-2 rounded bg-gray-700/50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700 hover:text-white"
        title="Copy code"
      >
        {copied ? <FiCheck size={16} /> : <FiClipboard size={16} />}
      </button>

      <pre className="bg-bg-secondary p-4 rounded-md overflow-x-auto">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;