import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { accountIcon02 } from "@/utils/images";

export default function Contact() {
  return (
    <>
      <div className="section-large">
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
              <h4>Access Denied</h4>
            </div>
            <div className="margin-bottom-32">
              <p>
                A site membership is required to view this page. You can upgrade
                your account via the link below
                <br />
                Please <Link href="/sign-up">Sign up</Link> or{" "}
                <Link href="/log-in">Log in</Link>.
              </p>
            </div>
            <Link href="/pricing" className="button-primary w-button">
              Register Pro Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
