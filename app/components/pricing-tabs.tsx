"use client"
import {AnimatePresence, motion} from "framer-motion";
import { link } from "fs";
import Link from "next/link";
import { it } from "node:test";
import { features, title } from "process";
import { useState } from "react";
export default function PricingTabs() {
    
    const [Tab, setTab] = useState(1)
    
    return (
        <div className="bg-fourth-200/50 rounded-lg divide-y divide-gray-200 shadow dark:divide-gray-700 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-3 dark:bg-fourth-800">
            <div className="col-span-2 p-6 lg:p-8">
                <h1 className="mb-4 underline underline-offset-4 text-lg font-medium text-gray-900 dark:text-white">
                    Choose a pricing plan:
                </h1>
                {/* Tabs */}
                <ul
                className="grid grid-cols-2 text-sm font-medium text-center text-fourth-800 shadow md:rounded-lg md:grid-cols-4 dark:divide-gray-600 dark:text-gray-400"
                role="tablist"
                >
                {/* features */}
                {plans.map((item, index) => (
                    <li key={index} className="w-full relative" role="presentation">
                    {Tab === index && <AnimatePresence>
                        <motion.div layoutId="hoverBackground" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.15}}}
                        exit={{opacity: 0, transition: {duration: 2, delay: 1}}}
                        className="bg-secondary-600 dark:bg-secondary-500 absolute w-full h-full"></motion.div>
                    </AnimatePresence>}
                    <button
                        role="tab"
                        onClick={()=>setTab(index)}
                        type="button"
                        className={"inline-block p-4 w-full border relative dark:border-gray-500 border-gray-200 "+(Tab === index ? "text-fourth-100 dark:text-third-800" : " text-fourth-800 dark:text-fourth-100")}
                    >
                        {item.title}
                    </button>
                    </li>
                ))}
                </ul>
                <div className="grid gap-4 mt-4 lg:mt-6 sm:grid-cols-2 md:grid-cols-3">
                    {
                        plans[Tab].features.map((item, index) => 
                            
                            <ul role="list" key={index} className="space-y-4 dark:text-white">
                                
                                {item.map((feature, i) =>
                                <li key={i} className="flex space-x-2.5">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="leading-tight text-fourth-500 dark:text-fourth-200">{feature}</span>
                                  </li>
                                )}
                            </ul>
                        )
                    }
                    
                </div>
            </div>
            
            <div className="flex p-6 lg:p-8">
                <div id="starter-plan" className=" self-center w-full">
                <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    {plans[Tab].title}
                </div>
                <div className="font-light text-gray-500 dark:text-gray-400">
                    Starts at
                </div>
                <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                    ${plans[Tab].price}
                    <span className=" font-normal">/mo</span>
                </div>
                
                <Link
                    href={plans[Tab].link}
                    className="flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-bue-200 dark:focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
                >
                    Subscibe Now
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    *To see the monthly email send limit included with your specific
                    plan, click Calculate my price. If your plan&apos;s contact or email send
                    limit is exceeded, you will be charged for overages.
                </p>
                </div>
                
            </div>
        </div>
    );
}
const plans = [
    {
        title: "Starter",
        price: 10.00,
        link: "https://buy.stripe.com/fZecPHbZrcVSb3qbII",
        features: [
            ["Https Security, Free SSL",
            "Standard Proformance", "Git Integration"],
            ["100GB Bandwidth",
            "Standard Support"],
        ]
    },
    {
        title: "Buisness (recommended)",
        price: 20.00,
        link: "https://buy.stripe.com/eVa5nf4wZaNKb3q145",
        features: [
            ["Everything in Starter",
            "Email Integration", "Advanced Protection", "Scalability"],
            ["Standard Analytics",
            "Increased bandwidth", "Webhooks"],
            ["Traffic Monitoring",],
        ]
    },
    {
        title: "Business Plus",
        price: 35.00,
        link: "https://buy.stripe.com/5kA5nf4wZ8FC7RedQS",
        features: [
            ["Everything in Buiness",
            "Custom Buisness Email", "Custom Buisness Phone Number", "Mitigation tools"],
            ["Ideal for E-commerce",
            "Custom Databases", "Stripe Integration"],
            ["Updates",
            "CMS Integration", ]
        ]
    },
    {
        title: "Enterprise",
        price: 50.00,
        link: "https://buy.stripe.com/fZebLDd3vg846Na147",
        features: [
            ["Everything in Business Plus",
            "SMS Integration", "Buisness Phone Number", "Advanced Analytic Tools", "SEO Optimization"],
            ["DDoS Protection", "Serverless Functions", "Custom Domains",
            "API Access"],
            ["Multiple Users",
            "Dashboad Customization", "Custom Payment Gateway"]
        ]
    }]