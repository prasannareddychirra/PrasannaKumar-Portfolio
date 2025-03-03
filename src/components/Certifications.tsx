import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { image } from "framer-motion/client";

const certifications = [
  {
    title: "AWS Devops Engineer - Professional",
    issuer: "Amazon Web Services",
    date: "Mar 2020",
    link: "https://www.credly.com/badges/8aa4fb36-8995-4b07-abbd-9d1e60338fee/public_url",
    image: "https://media.licdn.com/dms/image/v2/C5622AQEa4jfXQqkXcw/feedshare-shrink_1280/feedshare-shrink_1280/0/1584117303143?e=1743638400&v=beta&t=1o2DixmvnuJrXR1XtQ7wQBGMjYctF79mx17B68Su_uQ"
  },
  {
    title: "AWS Solution Architect - Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2019",
    link: "https://www.credly.com/badges/e3584bf0-0db5-4c59-86dc-cd8113bc6eb2/public_url",
    image: "https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "Google Cloud Engineer - Associate",
    issuer: "Google Cloud",
    date: "Oct 2022",
    image: "https://media.licdn.com/dms/image/v2/C5622AQFgPfkI26Tr3w/feedshare-shrink_800/feedshare-shrink_800/0/1666785792478?e=1743638400&v=beta&t=6oADRIoIp3iPU2PfFCJYZn7Gdvfo7qNmHO0dPc8Tezg",
    link: "https://media.licdn.com/dms/image/v2/C5622AQFgPfkI26Tr3w/feedshare-shrink_800/feedshare-shrink_800/0/1666785792478?e=1743638400&v=beta&t=6oADRIoIp3iPU2PfFCJYZn7Gdvfo7qNmHO0dPc8Tezg",
  },
  {
    title: "Hashicorp Terraform - Associate",
    issuer: "HashiCorp",
    date: "Apr 2024",
    link: "https://moonshot.scaler.com/s/image/li/8T4eLNJyeF",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQEQMA9NcCy1yg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1713541971158?e=1743638400&v=beta&t=bEHyScsgwQRuhSFWTH1yTb48ZXCHst4bMmmomgabA-Q",
  },
  {
    title: "AWS Advanced Network - Specality",
    issuer: "HashiCorp",
    date: "Feb 2024",
    link: "https://www.udemy.com/certificate/UC-8e040552-c5b1-4bf8-b788-5a6a21c6c4cb/",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-8e040552-c5b1-4bf8-b788-5a6a21c6c4cb.jpg?v=1708634924000",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
