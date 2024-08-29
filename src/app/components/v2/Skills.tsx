import Skills from "@/app/projects/components/sections/Skills";
import { HtmlAttributes } from "@/app/types/Types";

export default function SkillsV2({ id }: HtmlAttributes) {
  return (
    <section id={id ? id : ""}>
      <h1 className="text-2xl md:text-3xl font-bold font-sans mb-6">Skills</h1>
      <div>
        <Skills />
      </div>
    </section>
  );
}
