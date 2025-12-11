import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import CodeBlock from "./CodeBlock";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <section className="text-base leading-relaxed">
      {/* <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        components={{
          // ⭐ FIX: Avoid invalid <div> inside <p>
          p: ({ node, children }) => {
            // check if paragraph contains block elements
            const containsBlock = node.children.some((child: any) => {
              return (
                child.tagName === "div" ||
                child.tagName === "pre" ||
                child.tagName === "table" ||
                child.tagName === "ul" ||
                child.tagName === "ol" ||
                child.tagName === "h1" ||
                child.tagName === "h2" ||
                child.tagName === "h3" ||
                child.tagName === "h4" ||
                child.tagName === "blockquote"
              );
            });

            return containsBlock ? (
              <div className="mb-3">{children}</div>
            ) : (
              <p className="mb-3">{children}</p>
            );
          },

          // ⭐ Your code block override
          code({ inline, className, children, ...props }) {
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
      </ReactMarkdown> */}
      {content}
    </section>
  );
};

export default MarkdownRenderer;
