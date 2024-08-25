import fs from "fs";
import path from "path";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { MarkdownContainer } from "~/setups/markdown";

export const meta: MetaFunction = () => {
  return [{ title: "pavix's Notes" }, { name: "description", content: "" }];
};

export async function loader() {
  // Construct the path to the file
  const filePath = path.join(process.cwd(), "notes", "probability.md");
  console.log("File path:", filePath);

  try {
    // Read the file content
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    return { content: fileContent };
  } catch (error: Any) {
    console.error("Error reading file:", error.message);
    // Handle the error appropriately, e.g., return a 404 or an error message
    throw new Response("File not found", { status: 404 });
  }
}

export default function Index() {
  const text = useLoaderData()?.content || "";

  console.log(text);

  return (
    <main>
      <section className="max-w-[1200px] m-auto">
        <MarkdownContainer text={text} />
      </section>
    </main>
  );
}
