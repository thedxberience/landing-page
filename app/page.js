import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import ReusableButton from "./component/ReusableButton";
import CTAForm from "./component/CTAForm";
import { redirect } from "next/navigation";
import Footer from "./component/Footer";
import UpcomingEvents from "./component/UpcomingEvents";
import RatingsSection from "./component/RatingsSection";
import VideoSection from "./component/VideoSection";

export default function Home() {
  redirect("/coming_soon", "replace");
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between">
      <section className="hero-section relative w-full lg:min-h-screen h-fit">
        <Navbar />
        {/* <video muted autoPlay playsInline loop id="videoBg">
          <source src="/video_bg.mp4" type="video/mp4" />
        </video> */}
        <div className="flex mt-2 flex-col items-center justify-center gap-8">
          <CTAForm />
        </div>
      </section>
      <VideoSection />
      <UpcomingEvents />
      <RatingsSection />
      <Footer />
    </main>
  );
}
