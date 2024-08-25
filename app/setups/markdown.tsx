import Markdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; 

import { FC } from "react";

type MarkdownContainerProps = {
  text: string;
}

export const MarkdownContainer: FC<MarkdownContainerProps> = ({text}) => {
  return <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]} >{text}</Markdown>
}