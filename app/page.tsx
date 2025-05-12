import {
  Clinic,
  Cta,
  Doctors,
  FeaturedBrand,
  Hero,
  RealResult,
  Reviews,
  Services,
} from "./components";

import SEO from "./components/SEO";
import { JSON_LD } from "./data";

const page = () => {
  return (
    <>
      <SEO
        title="Alice Oasis Dental | Trusted Dental Clinic in Dhaka, Bangladesh"
        description="Visit Alice Oasis Dental for top-quality dental care in Dhaka. From cosmetic dentistry to orthodontics — we care for your smile."
        url="https://aliceoasisdental.com"
        image="https://aliceoasisdental.com/og-image.jpg"
        jsonLd={JSON_LD}
      />

      <main>
        <Hero />
        <div className="container mx-auto px-5 md:px-0">
          <FeaturedBrand />
          <Services />
          <Clinic />
          <RealResult />
          <Doctors />
          <Reviews />
          <Cta />
        </div>
      </main>
    </>
  );
};

export default page;
