import Image from "next/image";
import Link from "next/link";
import { brandInfo, footerLinks, OPEN_TIMES } from "../data";

const Footer = () => {
  return (
    <footer className="mt-16 mb-10 container mx-auto px-5 md:px-0">
      <div className=" grid lg:grid-cols-3 gap-10 justify-between items-start w-full">
        <div className="min-w-2/6 w-full">
          <div>
            <Image
              src={brandInfo.LOGO_VER}
              width={100}
              height={100}
              alt={brandInfo.NAME}
              className=" w-16 block mb-5"
            />

            <p className="w-4/5">{brandInfo.DIS}</p>
          </div>

          <div className=" flex flex-col gap-3 mt-6">
            <Link
              href={brandInfo.email.link}
              className=" flex gap-3 items-center"
            >
              <Image
                src="/assets/icons/mail.svg"
                width={100}
                height={100}
                alt="Alice Dental email"
                className=" w-5 inline-block"
              />
              <p className=" text-white text-base">
                {brandInfo.email.placeholder}
              </p>
            </Link>

            <Link
              href={brandInfo.phone.link}
              className=" flex gap-3 items-center"
            >
              <Image
                src="/assets/icons/phone.svg"
                width={100}
                height={100}
                alt="Alice Dental email"
                className=" w-5 inline-block"
              />
              <p className=" text-white text-base">{brandInfo.phone.number}</p>
            </Link>

            <Link
              href={brandInfo.address.link}
              className=" flex gap-3 items-start "
            >
              <Image
                src="/assets/icons/location.svg"
                width={100}
                height={100}
                alt="Alice Dental email"
                className=" w-5 inline-block"
              />
              <p className=" text-white text-base max-w-3/5">
                {brandInfo.address.placeholder}
              </p>
            </Link>
          </div>
        </div>

        <div className=" flex justify-between items-center min-w-2/5 w-full">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h2 className=" font-sans capitalize text-xl font-medium mb-6">
                {link.title}
              </h2>
              <ul className="flex flex-col">
                {link.links.map((link, index) => (
                  <li
                    key={index}
                    className="py-[5px] text-lg tracking-wide hover:text-white-600 transition-all duration-200 "
                  >
                    <Link href={link.forward}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="min-w-2/6 w-full">
          <h3 className=" font-sans capitalize text-xl font-medium mb-6">
            Opening Times
          </h3>
          {OPEN_TIMES.map((item, index) => (
            <div key={index}>
              <>
                {item.open.map((item, i) => (
                  <p key={i} className=" text-lg mb-2">
                    <span className=" text-green-primary">{item.days}</span>:{" "}
                    {item.hours}
                  </p>
                ))}
              </>
              <>
                {item.closed.map((item, i) => (
                  <p key={i}>
                    {item.dasy}: <span className=" text-red-500">Closed</span>
                  </p>
                ))}
              </>
            </div>
          ))}
        </div>
      </div>

      <span className=" w-full h-[2px] bg-border block mt-14 mb-7"></span>

      <div className=" flex flex-col md:flex-row flexBetween w-full">
        <ul className="flex items-center gap-5 md:order-3 mt-4 md:mt-0">
          {brandInfo.SOCIAL_LINKS.map((link, index) => (
            <Link key={index} href={link.link}>
              <li className=" w-12 h-12 border-[1.5px] border-border rounded-full flex flexCenter">
                <Image
                  src={link.icon}
                  width={100}
                  height={100}
                  alt="Social Icons - Alice Dental"
                  className="block w-10 object-contain aspect-video hover:grayscale transition-all duration-200 ease-in-out"
                />
              </li>
            </Link>
          ))}
        </ul>

        <p className="mt-8 md:mt-0 md:mb-0 mb-2 font-light">
          ©-2025 Alice Dental. All rights reserved.
        </p>

        <Link href="https://nihals.com">
          <p className="font-light">
            Powered by <span className="md:font-medium">Nihal Nic</span>
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
