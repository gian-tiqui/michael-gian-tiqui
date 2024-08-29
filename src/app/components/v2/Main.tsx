"use client";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Project";
import SkillsV2 from "./Skills";
import useIdStore from "@/app/store/useIdStore";

export default function Main() {
  const { setId } = useIdStore();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setId]);

  return (
    <main className="flex flex-col gap-32 md:gap-52">
      <Introduction id="introduction" />
      <Experience id="experience" />
      <Education id="education" />
      <SkillsV2 id="skills" />
      <Project id="projects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
