import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import ReusableButton from "./component/ReusableButton";
import CTAForm from "./component/CTAForm";
import { redirect } from "next/navigation";
import Footer from "./component/Footer";
import UpcomingEvents from "./component/UpcomingEvents";
import RatingsSection from "./component/RatingsSection";

export default function Home() {
  // redirect("/coming_soon", "replace");
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <section className="hero-section w-full lg:min-h-screen h-fit">
        <Navbar />
        <div className="flex mt-2 flex-col items-center justify-center gap-8">
          <CTAForm />
        </div>
      </section>
      <section className="video-section py-[46px] flex flex-col gap-7 justify-center items-center">
        <div className="section-header">
          <h1 className="text-xl lg:text-5xl font-bold text-text_primary">
            Awaken to a different World
          </h1>
        </div>
        <div className="video-container w-[83.012vw] h-[260px] lg:h-[79.252vh] relative">
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
              className="w-16 h-16 lg:w-[176.79px] lg:h-[176.79px]"
            />
          </div>
        </div>
        <ReusableButton btnText={"Book a trip now"} />
      </section>
      <UpcomingEvents />
      <RatingsSection />
      <Footer />
    </main>
  );
}
