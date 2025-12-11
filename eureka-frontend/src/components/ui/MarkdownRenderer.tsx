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
          code({ node, inline, className, children, ...props }) {
            return inline ? (
              <code className="bg-bg-secondary px-1 rounded-md" {...props}>
                {children}
              </code>
            ) : (
              <CodeBlock className={className}>{children}</CodeBlock>
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


