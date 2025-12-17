import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import CodeBlock from "./CodeBlock";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <section className="text-base leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        components={{
          p({ children }) {
            return <div>{children}</div>;
          },
          code({ className, children, ...props }) {
            // 1. Check if the class name indicates a language (e.g., "language-python")
            const match = /language-(\w+)/.exec(className || "");

            // 2. If it has a language match, render the big CodeBlock.
            //    Otherwise, render the small inline code style.
            return match ? (
              <CodeBlock className={className}>{children}</CodeBlock>
            ) : (
              <code className="bg-bg-secondary px-1 rounded-md" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default MarkdownRenderer;
