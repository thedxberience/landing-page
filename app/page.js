import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import ReusableButton from "./component/ReusableButton";
import CTAForm from "./component/CTAForm";
import ServiceCard from "./component/ServiceCard";
import CarouselButtons from "./component/CarouselButtons";
import MemoryContainer from "./component/MemoryContianer";
import RatingsCard from "./component/RatingsCard";
import ServicesCarousel from "./component/ServicesCarousel";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/coming_soon", "replace");
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <section className="hero-section w-full">
        <Navbar />
        <div className="flex mt-20 flex-col items-center justify-center gap-8">
          <h1 className="text-2xl lg:text-5xl font-bold text-text_primary">
            Hello there, How can we help you?
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <ReusableButton btnText={"LUXURY EXPERIENCES"} />
            <ReusableButton btnText={"Luxury destinations"} filled={false} />
            <ReusableButton
              btnText={"build your custom experiences"}
              filled={false}
            />
          </div>
          <CTAForm />
        </div>
      </section>
      <section className="video-section flex flex-col gap-7 justify-center items-center">
        <div className="section-header">
          <h1 className="text-5xl font-bold text-text_primary">
            Awaken to a different World
          </h1>
        </div>
        <div className="video-container w-[83.012vw] h-[651.45px] relative">
          <Image
            src="/videoThumbnail.png"
            alt="video thumbnail"
            fill
            className="object-cover"
          />
          <div className="video-play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/playButton.svg"
              alt="play button"
              width={176.79}
              height={176.79}
            />
          </div>
        </div>
        <ReusableButton btnText={"Book a trip now"} />
      </section>
      <ServicesCarousel />
      <section className="memories w-full flex flex-col justify-center items-center relative">
        <div className="w-[37.292vw] h-[800px] bg-secondary absolute top-0 left-0 -z-10"></div>
        <div className="section-header w-full flex justify-evenly items-center mt-16">
          <h1 className="text-5xl font-bold text-text_primary">
            Create Memories
          </h1>
          <div className="w-[49.722vw] border h-[1px] border-gray-800"></div>
          <div className="flex justify-center items-center gap-4">
            <CarouselButtons direction="prev" disabled={true} />
            <CarouselButtons direction="next" disabled={true} />
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-6">
          <MemoryContainer star={4} />
          <MemoryContainer star={5} />
          <MemoryContainer star={3} />
        </div>
      </section>
      <section className="review-section flex justify-center items-center px-20 w-full mb-8">
        <div className="flex flex-col justify-center items-center border-t border-b border-gray-800 w-full h-full mt-40 py-16 gap-12">
          <div className="section-header w-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-text_primary">
              Our clients share their experiences.
            </h1>
          </div>
          <div className="review-container flex justify-center items-center gap-8">
            <RatingsCard
              star={5}
              ratingAuthor={"Craylin"}
              ratingDescription={
                " I had an amazing experience travelling with the team at DXberience. The flight was on point and the location was absolutely beautiful"
              }
            />
            <RatingsCard
              star={4}
              ratingAuthor={"Emma"}
              ratingDescription={
                " I had an amazing experience travelling with the team at DXberience. The flight was on point and the location was absolutely beautiful"
              }
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <CarouselButtons direction="prev" disabled={true} />
            <CarouselButtons direction="next" disabled={true} />
          </div>
        </div>
      </section>
      <footer className="w-full flex flex-col gap-8 justify-center items-center bg-primary">
        <div className="logo relative w-[24.467vw] h-10 mt-16">
          <Image src="/dxberience_logo_white.svg" alt="logo" fill />
        </div>
        <div className="footer-items w-full flex justify-between items-center px-20">
          <div>
            <h1 className="text-4xl text-white">Find Your Adventure</h1>
          </div>
          <div className="flex justify-center items-center gap-8">
            <ul className="flex justify-center items-center gap-8 font-poppins">
              <li className="text-text_primary_light font-medium text-base">
                MEMBERSHIP
              </li>
              <li className="text-text_primary_light font-medium text-base">
                EVENTS
              </li>
              <li className="text-text_primary_light font-medium text-base">
                BOOKINGS
              </li>
            </ul>
          </div>
          <ReusableButton
            btnText={"BOOK A TRIP"}
            filled={false}
            background={"bg-white"}
          />
        </div>
        <div className="contact-details flex justify-evenly border-white border-y py-8 items-center w-full">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-medium text-text_primary_light">CALL US</h1>
            <p className="text-text_primary_light text-4xl font-medium">
              +971 4 123 4567
            </p>
          </div>
          <div className="h-[152.01px] w-0 border border-white rotate-90 lg:rotate-0"></div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-medium text-text_primary_light">EMAIL US</h1>
            <p className="text-text_primary_light text-4xl font-medium">
              dxberience@email.com
            </p>
          </div>
        </div>
        <div className="social-media flex justify-center items-center gap-4">
          <Image
            src="/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/instagram.svg"
            alt="instagram"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/youtube.svg"
            alt="twitter"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/twitter.svg"
            alt="twitter"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/linkedin.svg"
            alt="twitter"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="footer-bottom w-full flex justify-center items-center gap-8 pb-8">
          <p className="text-text_primary_light font-poppins text-base font-normal">
            © 2024 DXberience. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
