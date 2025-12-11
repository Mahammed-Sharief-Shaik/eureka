import MarkdownRenderer from "./MarkdownRenderer";
import UserMessage from "./UserMessage";

const Conversation = () => {
  const msg1 = `
# 🧪 Markdown Test Message

This is a **full markdown test** for your Eureka chat UI.  
It checks *every* common Markdown feature.

---

## 🔹 Text Formatting

- **Bold text**
- *Italic text*
- ***Bold + italic***
- ~~Strikethrough~~
- \`Inline code\`
- Small \`var x = 10\` snippet

---

## 🔹 Headings

# H1 Heading
## H2 Subheading
### H3 Small heading
#### H4 (Rarely used)

---

## 🔹 Lists

### Unordered list:
- Item 1
- Item 2
  - Nested item A
  - Nested item B

### Ordered list:
1. First
2. Second
3. Third

---

## 🔹 Blockquote

> This is a blockquote.  
> Perfect for notes and explanations.

---

## 🔹 Code Block (with syntax)

\`\`\`ts
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Sharief"));
\`\`\`

\`\`\`json
{
  "user": "Sharief",
  "score": 100
}
\`\`\`

---

## 🔹 Table

| Feature       | Supported |
|---------------|-----------|
| Bold          | ✅ Yes     |
| Code Blocks   | ✅ Yes     |
| Tables        | ✅ Yes     |
| Headings      | ✅ Yes     |
| Lists         | ✅ Yes     |

---

## 🔹 Link

Click here → [OpenAI](https://openai.com)

---

## 🔹 Emoji

🔥 🚀 🎯 ❤️ ✔️ ❌

---

## 🔹 Horizontal Rule

---

## 🔹 Task List

- [x] Render markdown  
- [x] Render lists  
- [ ] Implement AI streaming  
- [ ] Add syntax highlighting  

---

### 🎉 End of Test Message

This should help you verify **all Markdown features** in your chat UI.

If you want **beautiful code blocks with styling + optional copy-to-clipboard**, then **do NOT use react-syntax-highlighter** or heavy libraries.

The **best and simplest option** for your Eureka chat UI is:

# ⭐ **\`react-markdown\` + \`rehype-prism-plus\` (Prism syntax highlighting)**

*

# ⭐ **A custom \`<CodeBlock />\` component** with a copy button

This gives you:

✔ Pretty highlighted code blocks
✔ Works with TypeScript, JS, Python, C++, etc
✔ Lightweight
✔ Fully compatible with ReactMarkdown
✔ You can customize design to match your UI
✔ A copy icon built into the bubble

And **NO heavy setup**.

---

# ⭐ STEP 1 — Install Prism Highlighter

\`\`\`
npm install prismjs rehype-prism-plus
\`\`\`

Add the Prism CSS theme you like:

Inside \`src/index.css\` or \`globals.css\`:

\`\`\`css
@import "prismjs/themes/prism-tomorrow.css"; /* dark theme */
\`\`\`

This matches your dark UI perfectly.

---

# ⭐ STEP 2 — Create a custom CodeBlock renderer with copy button

**CodeBlock.tsx:**

\`\`\`tsx
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
    <div className="relative my-3">
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
\`\`\`

### ✔ Adds a copy button

### ✔ Handles syntax highlighting

### ✔ Nice dark theme

### ✔ Clean design

---

# ⭐ STEP 3 — Plug it into ReactMarkdown

Update your \`MarkdownRenderer\`:

\`\`\`tsx
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
              <code className="bg-bg-secondary px-1 rounded" {...props}>
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
\`\`\`

---

# ⭐ RESULT — What You Get

Your code blocks will now look like:

\`\`\`
-----------------------------
|  copy   (button)          |
-----------------------------
| const x = 10;             |
| console.log(x);           |
-----------------------------
\`\`\`

With:

* **Prism syntax highlighting**
* **Dark theme**
* **Copy button**
* **Automatic language detection**
* **Works inside chat bubbles**

---

# ⭐ Why NOT React-Nightly or heavy renderers?

❌ heavy
❌ unnecessary
❌ breaks TypeScript types
❌ harder to theme

Your current stack is:

* react-markdown
* remark-gfm

So **rehype-prism-plus + custom renderer** is the cleanest extension.

---

# ⭐ If you want a ChatGPT-style code block EXACTLY

I can create:

* floating copy icon
* language label (“TypeScript”, “JSON”)
* code block shadow
* rounded corners
* smooth fade animation

Just say:

**“Give me ChatGPT-style code blocks”**

`;

  const msg = `The Two Sum problem can be a bit tricky when you're starting out. \n\nSo, you've tried using two loops, and you're getting a Time Limit Exceeded (TLE) error. That's because the two-loop approach has a time complexity of O(n^2), which can be slow for large inputs.\n\nLet's think about it: what if we could find a way to store the numbers we've seen so far and their indices, so we can quickly look up if the complement (the number we need to add to get the target) is already in our \"memory\"? \n\nCan you think of a data structure that would allow us to do this? Something that has a fast lookup time, like... maybe a hash table or a dictionary?\n\nWhat are your thoughts on this? Should we explore how to use a hash table to solve the Two Sum problem?`;

  return (
    <section className=" max-h-150 lg:max-h-120 px-5 pt-2 text-base 
    selection:bg-accent selection:text-bg-primary tracking-wider text-justify overflow-y-scroll flex flex-col  gap-2">
      {/* <UserMessage />
      <div className=" ">
        <MarkdownRenderer content={msg1} />
      </div>
      <UserMessage />
      <div className="font-mono ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ea
        corrupti, cupiditate veniam repellendus modi ipsa fugit perferendis
        velit temporibus non odio? Non minus, obcaecati velit amet dolorem quam
        necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vel in itaque eius doloremque, odio vitae necessitatibus nihil quod,
        officia sequi corrupti odit magni inventore. Blanditiis distinctio eum
        in dolore quibusdam!Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Vitae ea corrupti, cupiditate veniam repellendus modi ipsa fugit
        perferendis velit temporibus non odio? Non minus, obcaecati velit amet
        dolorem quam necessitatibus!
      </div>
      <UserMessage />
      <div className="font-mono ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam
        repudiandae saepe, quo illum dolores. Tenetur nesciunt ullam nihil natus
        voluptate veniam?
      </div>
      <UserMessage /> */}
    </section>
  );
};

export default Conversation;
