import Link from "next/link";
import Image from "next/image";
import Banner from "@/app/components/banner";
import QA from "@/app/components/QA";
import Footer from "@/app/components/footer";
import { accountIcon02 } from "@/utils/images";

export default function Contact() {
  return (
    <>
      <div className="utility-page-wrap">
        <div className="background-wrapper">
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="form-container">
          <div className="account-title-wrap">
            <div className="account-icon-wrapper">
              <Image
                src={accountIcon02}
                loading="lazy"
                alt=""
                className="icon-large"
              />
            </div>
            <div className="margin-bottom-08">
              <h4>Page Not Found</h4>
            </div>
            <p>
              The page you are looking for doesn’t exist or has been moved.
              Click <Link href="/">here</Link> to go back home.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <QA />
      <Banner />
    </>
  );
}
