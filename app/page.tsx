import LinkList from "@/components/link-list";
import { slugify } from "@/lib/slugify";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-4 w-full max-w-140">
      <h1 className="text-lg">
        f<span className="opacity-0">lo.</span>f
        <span className="opacity-0">yi</span>
      </h1>
      <LinkList
        links={[
          {
            title: "Example Link",
            url: `${slugify("Example Link")}`,
            date: "01.01.2024",
          },
        ]}
      />
    </div>
  );
}
