"use client";
import Link from "next/link";

export default function Home() {
  function onClick() {
    const sidenavElement = document.getElementById("sidenav");
    sidenavElement?.classList.remove("hidden");
  }
  function onClose() {
    const sidenavElement = document.getElementById("sidenav");
    sidenavElement?.classList.add("hidden");
  }

  return (
    <div className="bg-slate-900 text-slate-50">
      <div className="min-h-screen px-4 max-w-2xl mx-auto">
        <nav className="flex justify-between items-center py-2">
          <Link href="/" className="font-bold text-green-400">
            Marcus Tran
          </Link>

          <ul className="hidden md:flex gap-4 text-sm">
            <li>About</li>
            <li>My work</li>
            <li>Projects</li>
            <li>Posts</li>
            <li>Contact</li>
          </ul>

          <button onClick={onClick}>🍔</button>

          <div
            id="sidenav"
            className="fixed top-0 right-0 w-80 bg-black/20 p-4 backdrop-blur-md hidden"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            consequatur fuga dolores rem error ut quasi saepe eaque nulla
            laudantium repellendus facere, porro id quibusdam maxime earum alias
            obcaecati optio!
            <br />
            <br />
            <button onClick={onClose}>Close</button>
          </div>
        </nav>

        <main className="space-y-4">
          <section className="text-slate-400 text-sm">
            <h2 className="text-slate-50 text-lg font-bold mb-2">About me</h2>
            <p>
              I have been engaged in professional Web Development for several
              years. I create Full-Stack websites with a minimalist look and
              speed. I also focus on website accessibility, website optimization
              and SEO.
            </p>

            <p>
              I like <strong>minimalism</strong>. I stand by the fact that the
              website should not be full of ads and trackers and completely
              useless JavaScript. On the other hand, I understand that sometimes
              a complex website hard to do without a lot of JavaScript. I also
              use React sometimes.
            </p>

            <p>
              But I stand by the fact that{" "}
              <strong>
                it is possible to make a good website even without JavaScript
              </strong>
              . For example this one. This site is completely JavaScript-free.
              (except for Cloudflare email protection, so you won&apos;t see my
              email without JS)
            </p>
          </section>

          <section>
            <h2 className="text-slate-50 text-lg font-bold mb-2">Experience</h2>
            <ul className="flex flex-col md:flex-row md:gap-4">
              {[1, 2, 3].map((index) => (
                <li
                  key={index}
                  className="border-l-2 pl-3 relative md:border-l-0"
                >
                  {/* Dot */}
                  <div className="size-3 bg-green-700 rounded-full border-3 absolute top-7 -left-[7px] md:hidden"></div>

                  <Link
                    href={"/"}
                    className="text-green-600 underline underline-offset-3 text-sm"
                  >
                    QPlay.cz
                  </Link>
                  <h3 className="font-semibold text-slate-100">
                    Full-Stack Web Developer
                  </h3>
                  <p className="text-xs text-slate-400">
                    October, 2023 - March, 2024
                  </p>
                  <p className="text-sm text-slate-200 mt-2">
                    Adding features to an already built page. Minor website
                    modifications. The project was ended in March 2024.
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-slate-50 text-lg font-bold mb-2">Story</h2>
            <ul>
              <li className="border-r-2 border-b-2 p-5 relative rounded-br-2xl">
                <div className="bg-gray-200 size-7 rounded-full text-slate-900 flex justify-center items-center text-sm font-bold absolute top-1/2 -right-3.5 -translate-y-1/2">
                  1
                </div>
                <h3 className="mb-2 font-semibold">Beginnings</h3>
                <p className="text-sm text-slate-400 mb-2 text-justify">
                  Already at the age of 6, I was creating ‘programs’ in Excel
                  and PowerPoint with interactive elements such as buttons.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
                <p className="text-sm text-slate-400 text-justify">
                  In 2018, I started programming for the first time. I started
                  going to a C# programming club. I used WinForms to create
                  console and very simple UI applications.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
              </li>
              <li className="border-l-2 border-b-2 p-5 relative rounded-bl-2xl rounded-tl-2xl">
                <div className="bg-gray-200 size-7 rounded-full text-slate-900 flex justify-center items-center text-sm font-bold absolute top-1/2 -left-3.5 -translate-y-1/2">
                  2
                </div>
                <h3 className="mb-2 font-semibold">Web development</h3>
                <p className="text-sm text-slate-400 mb-2 text-justify">
                  Already at the age of 6, I was creating ‘programs’ in Excel
                  and PowerPoint with interactive elements such as buttons.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
              </li>
              <li className="border-r-2 border-b-2 p-5 relative">
                <div className="bg-gray-200 size-7 rounded-full text-slate-900 flex justify-center items-center text-sm font-bold absolute top-1/2 -right-3.5 -translate-y-1/2">
                  3
                </div>
                <h3 className="mb-2 font-semibold">JavaScript</h3>
                <p className="text-sm text-slate-400 mb-2 text-justify">
                  Already at the age of 6, I was creating ‘programs’ in Excel
                  and PowerPoint with interactive elements such as buttons.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
                <p className="text-sm text-slate-400 text-justify">
                  In 2018, I started programming for the first time. I started
                  going to a C# programming club. I used WinForms to create
                  console and very simple UI applications.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
              </li>
              <li className="border-l-2 border-b-2 p-5 relative">
                <div className="bg-gray-200 size-7 rounded-full text-slate-900 flex justify-center items-center text-sm font-bold absolute top-1/2 -left-3.5 -translate-y-1/2">
                  4
                </div>
                <h3 className="mb-2 font-semibold">And more</h3>
                <p className="text-sm text-slate-400 mb-2 text-justify">
                  Already at the age of 6, I was creating ‘programs’ in Excel
                  and PowerPoint with interactive elements such as buttons.{" "}
                  <span className="text-green-300">Download (Czech)</span>
                </p>
              </li>
            </ul>
          </section>
        </main>
        <footer className="text-center text-xs text-slate-200 border-t mt-7 border-t-slate-600 py-5">
          <p>© 2025 Jakub Žitník | Created in the Czech Republic</p>
          <p>
            Built with love using Hugo . Look at some of my projects on GitHub .
          </p>
        </footer>
      </div>
    </div>
  );
}
