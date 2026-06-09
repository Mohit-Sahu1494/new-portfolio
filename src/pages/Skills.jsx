import { useState,useEffect,useRef } from "react";
import { Section } from "@/components/Section";
import Card from "@/components/ui/Cards";

export default function Skills({ theme }){
  const isDark = theme === "dark";
  return (
    <Section id="skills" title="Skills & Technologies" subtitle="My Toolkit" theme={theme}>
      <Card theme={theme}/>
    </Section>
  );
};