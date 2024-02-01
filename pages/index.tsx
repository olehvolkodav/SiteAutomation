import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MobileMenu from "@/components/Header/mobileMenu";
import MobileMenuLogo from "@/components/Header/mobileMenuLogo";
import Banner from "@/components/banner";
import CTA from "@/components/cta";
import Features from "@/components/features";
import About from "@/components/about";
import Service from "@/components/service";
import Service2 from "@/components/service2";
import SeeMore from "@/components/seeMore";
import AboutChooseArea from "@/components/aboutChooseArea";
import RecentProjects from "@/components/recentProjects";
import BlogArea from "@/components/blogArea";
import BrandArea from "@/components/brandArea";
import Footer from "@/components/footer";
import SettingButton from "@/components/settingButton";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [settingsStatus, setSettingStatus] = useState({
    Header: true,
    Banner: true,
    CTA: true,
    Features: true,
    About: true,
    Service: true,
    Service2: true,
    SeeMore: true,
    AboutChooseArea: true,
    RecentProjects: true,
    TeamArea: true,
    CallArea: true,
    TestimonialArea: true,
    VisionArea: true,
    BlogArea: true,
    BrandArea: true,
    Footer: true,
  });
  useEffect(() => {
    window.localStorage.getItem("settingsStatus") &&
      setSettingStatus(
        JSON.parse(window.localStorage.getItem("settingsStatus")!)
      );
    console.log(JSON.parse(window.localStorage.getItem("settingsStatus")!));
  }, []);
  return (
    <main className="em40_header_area_main">
      {settingsStatus?.Header && (
        <>
          <Header />
          <MobileMenuLogo />
          <MobileMenu />
        </>
      )}
      {settingsStatus?.Banner && <Banner />}
      {settingsStatus?.CTA && <CTA />}
      {settingsStatus?.Features && <Features />}
      {settingsStatus?.Service && <Service />}
      {settingsStatus?.Service2 && <Service2 />}
      {settingsStatus?.AboutChooseArea && <AboutChooseArea />}
      {settingsStatus?.RecentProjects && <RecentProjects />}
      {settingsStatus?.About && <About />}
      {settingsStatus?.SeeMore && <SeeMore />}
      {/* {settingsStatus?.TeamArea && <TeamArea />} */}
      {/* {settingsStatus?.CallArea && <CallArea />} */}
      {/* {settingsStatus?.TestimonialArea && <Testimonial />} */}
      {/* {settingsStatus?.VisionArea && <VisionArea />} */}
      {settingsStatus?.BlogArea && <BlogArea />}
      {settingsStatus?.BrandArea && <BrandArea />}
      {settingsStatus?.Footer && <Footer />}
      <SettingButton />
    </main>
  );
}
