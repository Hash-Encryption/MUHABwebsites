import React from "react";
import {
  ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";
import gotchaImg from "@/assets/gotcha-fresh-tea.png";
import alkhalImg from "@/assets/alkhal-aldimashki.png";

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
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    videoSrc: "/videos/app-demo3.mp4",
    alt: "Ueno Saryo Japanese Teahouse",
    title: "Ueno Saryo — Japanese Culinary",
    category: "Matcha & Teahouse",
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    videoSrc: "/videos/app-demo4.mp4",
    alt: "Lavoa Boutique Platform",
    title: "Lavoa — Luxury E-Commerce",
    category: "Boutique & Retail",
  },
];

export default function PhoneMockupBasic() {
  return <PhoneCarousel images={liveClientMedia} />;
}
