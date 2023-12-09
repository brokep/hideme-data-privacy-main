"use client";
import Link from "next/link";
import Image from "next/image";
import { bgAccent, bgAccentSmall, signal } from "@/utils/images";
import Footer from "./components/footer";
import Cart from "./components/cart";
import ProtectingData from "./components/protecting-data";
import Category from "./components/category";
import QA from "./components/QA";

export default function Home() {
  return (
    <>
      <div className="section-regular">
        <div className="container-regular">
          <div className="w-layout-grid header-grid">
            <div
              id="w-node-_0acee32b-2549-5116-45b5-ce82af872196-9e8dc324"
              className="header-text-wrapper"
            >
              <div
                data-w-id="0acee32b-2549-5116-45b5-ce82af872197"
                className="header-top"
              >
                <div className="margin-bottom-14">
                  <div className="detail">HIDEME</div>
                </div>
                <div className="margin-bottom-24">
                  <h1>
                    Stop Hacks, Junk Mail, and Online Bullies.
                    <br />
                  </h1>
                </div>
                <p className="paragraph-large">
                  Your data should be private. <br />
                  HideMe removes your personal info from risky websites.
                </p>
                <div className="header-button-wrapper">
                  <Link href="/pricing" className="button-primary-right-icon">
                    <div>Get Started</div>
                    <div className="icon-regular w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.187 11.2362L11.0895 7.13873L12.1696 6.05859L18.1111 12.0001L12.1696 17.9416L11.0895 16.8615L15.187 12.764H5.88892V11.2362H15.187Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id="w-node-_0acee32b-2549-5116-45b5-ce82af8721b5-9e8dc324">
              <Image src={signal} alt="Hero Header" className="hero-header" />
            </div>
          </div>
        </div>
        <div className="background-wrapper">
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image src={bgAccentSmall} alt="" className="accent-2" />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image src={bgAccent} alt="" className="accent-1" />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <Cart />
      <div className="section-small">
        <div className="container-regular">
          <div
            data-w-id="f931eddd-76ee-7452-08a1-3e151e0229a8"
            className="title-wrapper-center"
          >
            <div className="badge red">
              <div>CATEGORY SECTION</div>
            </div>
            <h2>What to expect from HideMe</h2>
          </div>
          <Category />
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
        </div>
      </div>
      <QA />
      <div className="section-small">
        <div className="container-regular">
          <ProtectingData />
        </div>
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
      </div>
      <Footer />
    </>
  );
}
