"use client";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/iconCloud"), { ssr: false });

export default Skills