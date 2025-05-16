"use-client";
import Image from "next/image";
import Link from "next/link";
import { reviews } from "../data";

const Reviews = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-14 w-full">
        <div className=" text-center md:text-left w-full mb-8 md:mb-0">
          <h1>REVIEWS</h1>
          <p className="mt-2 text-base">
            That you can{" "}
            <span className="font-semibold tracking-[2px]">BELIEVE.</span>
          </p>
        </div>

        <div className="flex items-center md:justify-end md:mr-10 px-5 md:px-0 justify-between gap-10 w-full">
          <Link href="">
            <Image
              src="/assets/images/logos/google_review.svg"
              width={100}
              height={100}
              alt="google reviews logo"
              className="block w-35"
            />
          </Link>

          <Link href="">
            <Image
              src="/assets/images/logos/trustpilot-logo.svg"
              width={100}
              height={100}
              alt="trustpilot reviews logo"
              className="block w-35"
            />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-start justify-between w-full h-full">
        {reviews.map((review, index) => (
          <div key={index} className="reviewCard">
            <div className="flex flexBetween mb-6">
              <div className=" flex items-center gap-3">
                <Image
                  src={review.img}
                  width={100}
                  height={100}
                  alt={review.name}
                  className="block w-12 h-12 rounded-full "
                />

                <div>
                  <h3 className=" text-[22px] font-normal">{`${
                    review.name
                  } ${review.surname.charAt(0)}.`}</h3>
                  <p className="text-xs mt-[2px]">
                    <span className=" font-semibold text-white">s/</span>
                    {review.serviceName}
                  </p>
                </div>
              </div>

              <div className=" flex flexCenter px-3 py-2 bg-white/15 rounded-4xl">
                <Image
                  src="/assets/icons/review-star.svg"
                  width={100}
                  height={100}
                  alt="reviews star"
                  className="block w-7 h-7"
                />
                <p className=" text-lg ml-1">{review.rating}</p>
              </div>
            </div>
            <div className="review">
              <p className="text-base mx-2 text-white">{review.review}</p>
              <p className="text-right text-sm font-medium mt-2">
                {review.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
