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
    image: "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    link: "https://www.credly.com/badges/95413578-3d2c-4200-8c9f-a194c2d1f66f/public_url",
  },
  {
    title: "Hashicorp Terraform - Associate",
    issuer: "HashiCorp",
    date: "Apr 2024",
    link: "https://www.credly.com/badges/0119962d-bc38-41d3-bb59-71df02cca7f6/public_url",
    image: "https://images.credly.com/size/680x680/images/b2896af1-137a-4104-bb27-b61c64cf8f62/blob",
  },
  {
    title: "AWS Advanced Network - Specality",
    issuer: "HashiCorp",
    date: "Feb 2024",
    link: "https://www.udemy.com/certificate/UC-8e040552-c5b1-4bf8-b788-5a6a21c6c4cb/",
    image: "https://images.credly.com/size/680x680/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "May 2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ChirraPrasannaKumarReddy-8110/6438C078B3807EE0?sharingId=B7E3616979910587",
    image: "https://images.credly.com/size/160x160/images/a0431919-92a6-49f1-b62b-aacc47cc7f07/converted20250601-28-uccih5.png",
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
