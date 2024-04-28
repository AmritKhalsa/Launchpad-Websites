import Image from "next/image";
import Link from "next/link";
import HeroAlert from "./components/hero-alert";
import HeroForm from "./components/hero-form";

export default function Hero() {
    return (
<section className=" from-third-100 to-fourth-100 dark:from-third-900 dark:to-fourth-900 bg-gradient-radial">
  <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-16">
    <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
      <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
        <HeroAlert page="#pricing">
        <div
            className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
            <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-third-600">
                New
            </span>{" "}
            <span className="text-sm text-secondary-700 dark:text-secondary-200 font-medium">
                New pricing plans! See what's new
            </span>
            
                <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
            
            </div>
        </HeroAlert>
        <h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-fourth-800 md:text-5xl xl:text-6xl dark:text-white">
          Lauching your online <span className="text-primary-700 dark:text-primary-400">profile</span>
        </h1>
        <p className="max-w-xl mx-auto mb-10 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">Reach more customers using professinal design and deployment</p>
        <HeroForm/>
        <p className="pt-2 pl-2 dark:text-gray-300">or reach out to me <Link className="text-secondary-600 dark:text-secondary-300 underline" href="mailto:launchpad.websites.com@gmail.com">here</Link></p>
      </div>
      <div className="col-span-6">
        <Image
            loading="eager"
            className="rounded-xl shadow-full"
            src="/hero.webp"
            width={750}
            height={500}
            alt="Vercel"
        />
      </div>
    </div>
    <div className="grid gap-16 sm:gap-12 md:grid-cols-3">
      <div className="flex boxx justify-center">
        <svg
          className="w-6 h-6 mr-3 text-third-600 dark:text-third-500 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h1 className="mb-1 text-lg font-semibold leading-tight text-fourth-800 dark:text-white">
            Customizable Websites
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Fully customizable website design to fit your brand and identity.
          </p>
        </div>
      </div>
      <div className="flex boxx justify-center">
        <svg
          className="w-6 h-6 mr-3 text-third-600 dark:text-third-500 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h1 className="mb-1 text-lg font-semibold leading-tight text-fourth-800 dark:text-white">
            Deployment options
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Website hosting and deployment as little as $10 per month.
          </p>
        </div>
      </div>
      <div className="flex boxx justify-center">
        <svg
          className="w-6 h-6 mr-3 text-third-600 dark:text-third-500 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h1 className="mb-1 text-lg font-semibold leading-tight text-fourth-800 dark:text-white">
            Analitics and Insights
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            We provide you with the tools to track your website's performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}