import React from "react";
import {
  ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";
import gotchaImg from "@/assets/gotcha-fresh-tea.png";
import alkhalImg from "@/assets/alkhal-aldimashki.png";
import uenoImg from "@/assets/ueno-saryo.png";
import lavoaImg from "@/assets/lavoa.png";

const liveClientMedia: ImageItem[] = [
  {
    type: "video",
    src: gotchaImg,
    videoSrc: "/videos/app-demo1.mp4",
    alt: "Gotcha Fresh Tea Jeddah",
    title: "Gotcha Fresh Tea — Jeddah Store",
    category: "Fresh Tea & Beverage",
  },
  {
    type: "video",
    src: alkhalImg,
    videoSrc: "/videos/app-demo2.mp4",
    alt: "Alkhal Aldimashki",
    title: "Alkhal Aldimashki",
    category: "Syrian Cuisine & Menu",
  },
  {
    type: "video",
    src: uenoImg,
    videoSrc: "/videos/app-demo3.mp4",
    alt: "Ueno Saryo Teahouse",
    title: "Ueno Saryo — Teahouse Experience",
    category: "Matcha & Teahouse",
  },
  {
    type: "video",
    src: lavoaImg,
    videoSrc: "/videos/app-demo4.mp4",
    alt: "Lavoa Night Lounge & Café",
    title: "Lavoa — Night Lounge & Café",
    category: "Night Lounge & Café",
  },
];

export default function PhoneMockupBasic() {
  return <PhoneCarousel images={liveClientMedia} />;
}
