import Image from "next/image";
import { Button } from "./ui/button";

const Clinic = () => {
  return (
    <section className=" mt-20">
      <div className="flex flex-col md:flex-row w-full h-full gap-10">
        <div className="w-full flex flex-col ">
          <div className="text-center md:text-left">
            <h1 className="uppercase mb-5">Clinic View</h1>
            <p className="subtitle">
              Modern and tailored to your unique needs ensure a comfortable,
              satisfying dental experience.
            </p>
          </div>

          <div className="md:hidden my-8 relative w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/clinic-img.png"
              alt="clinic view image"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 md:mt-12">
            <div className="p-5 border border-border rounded-xl text-left">
              <h3 className="mb-3">Innovative Equipment 🗽</h3>
              <p>
                We use cutting-edge technology and advanced dental equipment to
                ensure precise treatments, enhanced comfort, and the best
                results for your smile.
              </p>
            </div>

            <div className="p-5 border border-border rounded-xl text-left">
              <h3 className="mb-3">Personalized Approach 😊</h3>
              <p>
                Our tailored approach ensures that every treatment is customized
                to your unique dental needs, providing the best care for a
                healthier, brighter smile.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full relative rounded-lg">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/clinic-img.png"
              alt="clinic view image"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-between w-full">
          <div>
            <h3 className=" mb-3 font-serif">Expert Care</h3>
            <p className="mb-5">
              Our dedicated doctors are always here to provide top-quality
              dental care with precision and compassion. Whether it’s a routine
              check-up or an advanced procedure, we ensure a comfortable
              experience for every patient.
            </p>

            <Button variant={"outline"}>Free consultation</Button>
          </div>

          <div className="relative w-full h-[350px] rounded-lg overflow-hidden mt-6">
            <Image
              src="/assets/images/clinic-img_two.png"
              alt="clinic second"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
