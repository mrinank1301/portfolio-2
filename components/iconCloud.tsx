"use client"
import React from 'react'
import IconCloud from "@/components/ui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "postman",
  "python",
  "mongodb",
  "mysql",
  "tailwindcss",
  "scikit-learn",
  "numpy",
  "pandas",
  "tensorflow",
  "keras",
  "django",
  "flask",
  "opencv",
];
 

function Skills() {
  return (
    <div>
         <div className="relative flex size-[35rem] md:size-[30rem] max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-transparent px-20 pb-20 pt-8 md:px-0 md:pb-0 md:pt-0 md:ml-[20%]">
      <IconCloud iconSlugs={slugs} />
    </div>
    </div>
  )
}

export default Skills