import Link from "next/link"
import MenuButton from "@/components/MenuButton"
import BlurIn from "@/components/ui/blur-in"
import { Button } from "@/components/ui/button"
import BlurFade from "@/components/ui/blur-fade"
import { ChevronDown } from 'lucide-react'
import Image from "next/image"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-white overflow-x-hidden">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">Mrinank</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-end relative left-4 sm:left-6 md:left-8">
              kavuri
            </h2>
          </div>
          <MenuButton />
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Blog", "Contact", "Services"].map((item) => (
              <Link
                key={item}
                href="/"
                className="hover:text-red-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="my-16 text-center">
          <BlurIn
            word="I'm Mrinank"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-6"
          />
          <BlurIn
            word="I build smart, scalable, and user-friendly solutions by blending Machine Learning and Web Development. Turning complex challenges into seamless digital experiences is what I do best - let's create something extraordinary!"
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8"
          />
          <BlurFade delay={1}>
            <Button variant="outline" className="w-36 h-12">
              Resume
            </Button>
          </BlurFade>
        </section>

        <BlurFade delay={1.5} className="text-center mb-16">
          <ChevronDown className="animate-bounce text-gray-400 mx-auto" />
        </BlurFade>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <BlurFade delay={1} inView inViewMargin="-100px">
              <Image
                src="/abt.jpg"
                alt="Picture of the author"
                width={350}
                height={350}
                className="rounded-lg"
              />
            </BlurFade>
            <div className="md:w-1/2">
              <BlurFade delay={1.5} inView inViewMargin="-100px">
                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                  Hey there! I&apos;m a Machine Learning Engineer and web developer
                  with a passion for creating tech magic! From crafting AI-powered
                  tools to designing intuitive web experiences, I love bringing
                  bold ideas to life. Every project is a chance to innovate,
                  simplify, and make the digital world a little more awesome.
                  Let&apos;s build something extraordinary together!
                </p>
                <BlurFade delay={2} inView>
                  <Button variant="outline" className="w-36 h-12">
                    Contact me
                  </Button>
                </BlurFade>
              </BlurFade>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <BlurFade inView inViewMargin="-100px" delay={1}>
                <Skills />
              </BlurFade>
            </div>
            <div className="md:w-1/2">
              <BlurFade delay={1.5} inView inViewMargin="-100px">
                <ul className="list-disc text-lg space-y-4 pl-5">
                  <li>
                    Proficient in developing scalable web applications using
                    React and Next.js.
                  </li>
                  <li>
                    Skilled in implementing backend APIs with Node.js and
                    Express, integrated with MongoDB and MySQL databases.
                  </li>
                  <li>
                    Proficient in machine learning techniques such as
                    regression, classification, clustering, and deep learning
                    frameworks like TensorFlow and PyTorch for image
                    classification and natural language processing tasks.
                  </li>
                  <li>
                    Skilled in data preprocessing, feature engineering, model
                    evaluation, and deploying AI solutions using Flask, Docker,
                    and cloud platforms like AWS to create scalable and
                    efficient applications.
                  </li>
                </ul>
              </BlurFade>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-16">
        <div className="bg-slate-200 max-w-2xl mx-auto p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Let&apos;s get in touch!
          </h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </footer>
    </div>
  )
}

