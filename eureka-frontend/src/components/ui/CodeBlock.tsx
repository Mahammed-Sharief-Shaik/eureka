import { useState } from "react";
import { FiClipboard, FiCheck } from "react-icons/fi";

const CodeBlock = ({ children, className }: any) => {
  const [copied, setCopied] = useState(false);

  const language = className?.replace("language-", "") || "text";
  const codeText = String(children).trim();

  const copyCode = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative ">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 text-gray-300 hover:text-white transition"
      >
        {copied ? <FiCheck /> : <FiClipboard />}
      </button>

      <pre className="bg-bg-secondary p-4 rounded-md overflow-x-auto">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
