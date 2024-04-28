import PricingTabs from "./components/pricing-tabs"

export default function Pricing() {
    return (
<section id="pricing" className=" pt-10 from-third-100 to-fourth-100 dark:from-third-900 dark:to-fourth-900 bg-gradient-radial">
  <div className="py-8 px-4 mx-auto max-w-[2000px] lg:py-16 lg:px-6">
        <PricingTabs/>
  </div>
</section>

    );
}