import Image from "next/image";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"));

export default function Home() {
  return (
    <div className="min-h-full">
      <div className="px-12 py-4 pb-36 bg-slate-800">
        <Navbar />
        <div>
          {/* HeroSection */}
          <div className="mt-32 px-10">
            <h1 style={{ lineHeight: "70px" }} className="text-5xl text-gray-300 font-poppins">
              Hi , I’m Denis - Frontend web <br /> developer, designer & <br /> software tinkerer
            </h1>
            <div className="flex gap-5 mt-10 ">
              <Image src="/twitter.png" height={25} width={25} layout="fixed" alt="logo" />
              <Image src="/in.png" height={25} width={25} layout="fixed" alt="logo" />
              <Image src="/ig.png" height={25} width={25} layout="fixed" alt="logo" />
              <Image src="/github.png" height={25} width={25} layout="fixed" alt="logo" />
            </div>
          </div>
          {/* End of heroSection */}
        </div>
        {/* About Section */}
        <div className="px-10 flex justify-between mt-28">
          {/* About */}
          <div className="mt-10 w-2/4 text-base font-roboto text-gray-400 tracking-normal">
            <p>
              I am currently working at the <span className="text-gray-300">Value 8 Group </span> in{" "}
              <span className="text-gray-300">Nairobi, Kenya.</span>
            </p>
            <p className="mt-6 ">
              I specialize in creating and designing <span className="text-gray-300">beautiful</span> and{" "}
              <span className="text-gray-300">powerful </span> websites for modern businesses. Any business today needs a website that wins customers’{" "}
              <span>trust</span> and helps you do your business well. I make sure your website is up to that standard.
            </p>
            <p className="mt-6">
              I code for the web with a focus on <span className="text-gray-300">React, Css architecture </span> and{" "}
              <span className="text-gray-300">Components system</span>.
            </p>
            <p className="mt-6"></p>I am fuelled by a <span className="text-gray-300">passion</span> for designing and creating{" "}
            <span className="text-gray-300">compelling</span> products, I have a deep desire to excel and{" "}
            <span className="text-gray-300">continuously improve</span> in my work.
          </div>
          {/* Image */}
          <div>
            <Image src="/me.png" height={430} width={350} layout="fixed" alt="logo" />
          </div>
        </div>
        {/* End of About */}
        {/* Work */}
        <div className="px-10 mt-24">
          <p className="uppercase text-xs tracking-wider font-poppins text-gray-300">Work</p>
          <div className="flex justify-between mt-12">
            <div className="relative" style={{ height: "350px", width: "350px" }}>
              <Image src="/delight.png" quality={100} layout="fill" objectFit="contain" alt="logo" />
            </div>
            <div className="w-1/2">
              <p className="font-poppins capitalize text-gray-300 text-2xl">Delight Liquor Store</p>
              <div className="flex gap-3 mt-3 mb-8 text-gray-300 uppercase font-bold text-xs">
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Next js</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Sass</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Firebase</p>
              </div>
              <div className="text-sm font-roboto text-gray-400 tracking-normal">
                <p>
                  This is a <span className="text-gray-300">headless ecommerce store</span> I built for a client. The client needed a store where his
                  customers can view all his products & order online. It utilizes APIs to handle ecommerce operations e.g adding to cart and
                  checkouts.
                </p>
                <p className="mt-5">
                  A customer can also create an account & track orders made in realtime. This site has a{" "}
                  <span className="text-gray-300"> Dark mode </span>
                  too.
                </p>
              </div>

              <button className="px-5 py-2 bg-white text-gray-700 mt-12 text-sm font-poppins rounded-md">Visit</button>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mt-20">
            <div className="relative" style={{ height: "350px", width: "350px" }}>
              <Image src="/payments.png" quality={100} layout="fill" objectFit="contain" alt="logo" />
            </div>
            <div className="w-1/2">
              <p className="font-poppins capitalize text-gray-300 text-2xl">Payments System Landing Page</p>
              <div className="flex gap-3 mt-3 mb-8 text-gray-300 uppercase font-bold text-xs">
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Html</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Sass</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Javascript</p>
              </div>
              <div className="text-sm font-roboto text-gray-400 tracking-normal">
                <p>
                  This is a homepage design and build for a concept project – a payments system application. It was converted from a Figma design to a
                  website using Html, Css and Javascript.
                </p>
              </div>
              <button className="px-5 py-2 bg-white text-gray-700 mt-12 text-sm font-poppins rounded-md">Visit</button>
            </div>
          </div>
          <div className="flex  justify-between mt-20">
            <div className="relative" style={{ height: "350px", width: "350px" }}>
              <Image src="/dash.png" quality={100} layout="fill" objectFit="contain" alt="logo" />
            </div>
            <div className="w-1/2">
              <p className="font-poppins capitalize text-gray-300 text-2xl">Covid Tracker</p>
              <div className="flex gap-3 mt-3 mb-8 text-gray-300 uppercase font-bold text-xs">
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Html</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Sass</p>
                <p className="bg-gray-600 px-2 py-1 rounded-sm">Javascript</p>
              </div>
              <div className="text-sm font-roboto text-gray-400 tracking-normal">
                <p>
                  This is a <span className="text-gray-300">Covid-19 Tracker</span> that displays the number of positive cases, nagative cases and
                  total number of people tested. All data displayed is fetched from an <span className="text-gray-300"> API</span> and are from the
                  latest reports.
                </p>
                <p className="mt-6">Positive cases in a county are displayed as red bubbles on the map of Kenya.</p>
              </div>
              <button className="px-5 py-2 bg-white text-gray-700 mt-12 text-sm font-poppins rounded-md">Visit</button>
            </div>
          </div>
        </div>
        {/* End of Work */}
      </div>
      {/* Footer */}
      <div className="pt-16 bg-gray-900 text-slate-200 text-center flex flex-col items-center">
        <p className="capitalize font-poppins text-2xl ">Get in touch!</p>
        <p className="text-base mt-2 text-gray-400 font-roboto tracking-wide">
          Contact me for a quote, any questions you got <br /> or for a coding challenge ;)
        </p>
        <div className="flex align-middle items-center gap-14 mt-14">
          <div className="flex flex-col items-center gap-4 w-52">
            <Image src="/mail.png" height={30} width={30} layout="fixed" alt="logo" />
            <p className="text-sm font-poppins tracking-wider text-slate-200">denokim55@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-52">
            <Image src="/phone.png" height={30} width={30} layout="fixed" alt="logo" />
            <p className="text-sm font-poppins tracking-wider text-slate-200">Call +254 704 945 784</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-poppins mt-40 mb-10">Copyright @2022. All rights Reserved </p>
      </div>
      {/* End of Footer */}
    </div>
  );
}
