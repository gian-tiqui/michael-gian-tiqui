import { HtmlAttributes } from "@/app/types/Types";

export default function Project({ id }: HtmlAttributes) {
  return (
    <section className="w-full" id={id ? id : ""}>
      <h1 className="text-2xl md:text-3xl font-bold font-sans">Projects</h1>
    </section>
  );
}
