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

const page = () => {
  return (
    <>
      <Hero />
      <div className=" container mx-auto hidden">
        <FeaturedBrand />
        <Services />
        <Clinic />
        <RealResult />
        <Doctors />
        <Reviews />
        <Cta />
      </div>
    </>
  );
};

export default page;
