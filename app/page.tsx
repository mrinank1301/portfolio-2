import Link from "next/link";
import MenuButton from "../components/MenuButton";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-white overflow-x-hidden z-40">
      <header className="">
        <nav className="flex justify-evenly items-center p-6 mr-28 ">
          <div className="mr-32 md:mr-72">
            <h1 className="text-2xl md:text-4xl">Mrinank</h1>
            <h2 className="text-xl text-end relative left-10 md:text-3xl">kavuri</h2>
          </div>
          <MenuButton />
          <div className="hidden md:block -mr-56">
            <Link href="/" className="mr-6 hover:text-red-500">
              Home
            </Link>
            <Link href="/" className="mr-6 hover:text-red-500">
              About
            </Link>
            <Link href="/" className="mr-6 hover:text-red-500">
              Blog
            </Link>
            <Link href="/" className="mr-6 hover:text-red-500">
              Contact
            </Link>
            <Link href="/" className="mr-6 hover:text-red-500">
              Services
            </Link>
          </div>
        </nav>
      </header>
      <center>
        <section className="my-16 text-3xl tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] -z-10 ">
          <BlurIn word="I'm Mrinank" className="text-6xl text-gray-800 " />
          <center>
            <BlurIn
              word="  
I build smart, scalable, and user-friendly solutions by blending Machine Learning and Web Development. Turning complex challenges into seamless digital experiences is what I do best 
let’s create something extraordinary!"
              className="text-2xl w-3/4 text-gray-700 md:text-2xl"
            />
          </center>
        </section>
        <center>
          <BlurFade delay={1}>
            <Button variant={"outline"} className="w-36 h-12">
              Resume
            </Button>
          </BlurFade>
        </center>
      </center>
      <center>
        <BlurFade delay={1.5}>
          {" "}
          <ChevronDown className="relative animate-bounce top-14 text-gray-400" />
        </BlurFade>
      </center>
      <section className="w-screen h-screen mt-36">
        <div className="flex justify-evenly items-center flex-col md:flex-row">
          <BlurFade delay={1} inView inViewMargin="-100px">
            <Image
              src="/abt.jpg"
              alt="Picture of the author"
              width={350}
              height={350}
              className="mt-28 rounded-lg shrink-0"
            />
          </BlurFade>
          <div className="w-3/4 text-3xl text-center md:text-left drop-shadow-sm md:text-7xl md:leading-[5rem] md:w-1/2 ">
            <BlurFade delay={1.5} inView inViewMargin="-100px">
              <p className="text-2xl  text-gray-700 md:text-2xl my-7 md:flex-wrap ">
                Hey there! I’m a Machine Learning Engineer and web developer
                with a passion for creating tech magic! From crafting AI-powered
                tools to designing intuitive web experiences, I love bringing
                bold ideas to life. Every project is a chance to innovate,
                simplify, and make the digital world a little more awesome.
                Let’s build something extraordinary together!
              </p>
              <BlurFade delay={2} inView>
                <Button variant={"outline"} className="w-36 h-12">
                  Contact me
                </Button>
              </BlurFade>
            </BlurFade>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen mt-96 md:mt-0">
        <div className="flex justify-evenly items-center flex-col md:flex-row-reverse">
         <div className="md:mr-64"><BlurFade inView inViewMargin="-100px" delay={1}><Skills /></BlurFade></div> 
          <div className="w-3/4 mx-20 md:ml-44">
            <BlurFade delay={1.5} inView inViewMargin="-100px">
              <ul className="list-disc text-xl">
                <li>
                  <p>
                    Proficient in developing scalable web applications using
                    React and Next.js.
                  </p>
                </li>
                <li>
                  <p>
                    Skilled in implementing backend APIs with Node.js and
                    Express, integrated with MongoDB and MySQL databases.
                  </p>
                </li>
                <li>
                  <p>
                    Proficient in machine learning techniques such as
                    regression, classification, clustering, and deep learning
                    frameworks like TensorFlow and PyTorch for image
                    classification and natural language processing tasks.
                  </p>
                </li>
                <li>
                  <p>
                    Skilled in data preprocessing, feature engineering, model
                    evaluation, and deploying AI solutions using Flask, Docker,
                    and cloud platforms like AWS to create scalable and
                    efficient applications.
                  </p>
                </li>
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
      <footer className="w-screen h-auto  mt-80 md:mt-0"> 
        <center>
        <div className="bg-slate-200 w-[25rem] md:w-[50rem] p-3 rounded-xl mb-4">
            <center>
              <h1 className="pt-5 text-2xl">Let&apos;s get in touch!</h1>
              <div className="flex justify-evenly items-center flex-col">
              <input type="text" placeholder="Enter your email" size={40} className="my-10 p-3 rounded-md"/>
              <input type="text" placeholder="phone number" size={40} className="mb-10 p-3 rounded-r-md"/>
              </div>
            </center>
            </div>
            </center>
      </footer>
    </div>
  );
}
