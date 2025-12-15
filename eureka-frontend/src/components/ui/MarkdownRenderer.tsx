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
            return <div className="mb-3">{children}</div>;
          },

          code({ inline, className, children, ...props }) {
            return inline ? (
              <code
                className="bg-bg-secondary px-1 rounded-md"
                {...props}
              >
                {children}
              </code>
            ) : (
              <CodeBlock className={className}>
                {children}
              </CodeBlock>
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
