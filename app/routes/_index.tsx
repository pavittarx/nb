import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "pavix's Notes" }, { name: "description", content: "" }];
};

export default function Index() {

  return (
    <main>
      <h1 className="text-sky-400"> pavix&apos;s notes </h1>
    </main>
  );
}
