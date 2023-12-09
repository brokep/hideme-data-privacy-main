import Image from "next/image";
import { bannerLeft, bannerRight } from "@/utils/images";

export default function Banner() {
  return (
    <div className="banner">
      <Image
        src={bannerLeft}
        alt="banner-left"
        className="banner-left"
        priority
      />
      <div className="banner-text">HIDEME BETA v0.11</div>
      <Image
        src={bannerRight}
        alt="banner-right"
        className="banner-right"
        priority
      />
    </div>
  );
}
