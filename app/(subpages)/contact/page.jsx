import Link from "next/link";
import Image from "next/image";
import QA from "@/app/components/QA";
import Footer from "@/app/components/footer";
import {
  bgAccent,
  bgAccentSmall,
  formIcon01,
  formIcon02,
  formIcon03,
  contactIcon01,
  contactIcon02,
  contactIcon03,
  contactGradient,
} from "@/utils/images";

export default function Contact() {
  return (
    <>
      <div className="section-small">
        <div className="container-x-small">
          <div
            data-w-id="6737bd0a-b18a-90fe-3601-02e21c778674"
            className="title-wrapper-center"
          >
            <div className="margin-bottom-12">
              <div className="detail">contact us</div>
            </div>
            <div className="margin-bottom-16">
              <h1>We’ve been waiting for you.</h1>
            </div>
            <p className="paragraph-large">
              We want to hear from you. Let us know how we can help.
            </p>
          </div>
          <div
            data-w-id="561e433f-70be-7d03-cd56-6451e894ca82"
            className="form-block w-form"
          >
            <div className="margin-bottom-24">
              <h5>Send us a Message</h5>
            </div>
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
            >
              <div className="text-field-wrapper">
                <Image
                  src={formIcon01}
                  loading="lazy"
                  alt=""
                  className="icon-regular"
                />
                <input
                  type="text"
                  className="text-field-plain w-input"
                  maxLength="256"
                  name="Name"
                  placeholder="Enter your name"
                  id="Name"
                  required
                />
              </div>
              <div className="text-field-wrapper">
                <Image
                  src={formIcon03}
                  loading="lazy"
                  alt=""
                  className="icon-regular"
                />
                <input
                  type="email"
                  className="text-field-plain w-input"
                  maxLength="256"
                  name="Email"
                  placeholder="Enter your email"
                  id="Email-5"
                  required
                />
              </div>
              <div className="text-field-wrapper">
                <Image
                  src={formIcon01}
                  loading="lazy"
                  alt=""
                  className="icon-regular"
                />
                <input
                  type="text"
                  className="text-field-plain w-input"
                  maxLength="256"
                  name="Company"
                  placeholder="Business name "
                  id="Company"
                  required
                />
              </div>
              <div className="margin-bottom-16">
                <div className="text-field-wrapper">
                  <Image
                    src={formIcon02}
                    loading="lazy"
                    alt=""
                    className="icon-regular"
                  />
                  <input
                    type="tel"
                    className="text-field-plain w-input"
                    maxLength="256"
                    name="Phone"
                    placeholder="Phone number"
                    id="Phone"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="button-primary w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div
          data-w-id="6737bd0a-b18a-90fe-3601-02e21c7786cb"
          className="circle-contact"
        >
          <Image
            src={contactGradient}
            loading="lazy"
            alt=""
            className="gradient"
          />
        </div>
        <div
          data-w-id="6737bd0a-b18a-90fe-3601-02e21c7786cd"
          className="background-wrapper"
        >
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccent}
                loading="lazy"
                alt=""
                className="accent-1"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccentSmall}
                loading="lazy"
                alt=""
                className="accent-4"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="section-regular">
        <div className="container-large">
          <div
            data-w-id="e113b58e-5753-38ed-7d13-19dca963d5a4"
            className="title-wrapper-center"
          >
            <div className="badge red">
              <div>contact information</div>
            </div>
            <div className="margin-bottom-16">
              <h2>Get in touch with our team</h2>
            </div>
            <p className="paragraph-large">
              We want to hear from you. Let us know how we can help.
            </p>
          </div>
          <div className="w-layout-grid contact-grid">
            <Link
              data-w-id="8ba70765-8c15-790f-3f56-f30c361982c6"
              href="tel:(+67)0422332235"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <Image
                  src={contactIcon02}
                  loading="lazy"
                  alt=""
                  className="icon-extra-large"
                />
              </div>
              <div className="margin-bottom-08">
                <h5>(+1) (816) 866-1337</h5>
              </div>
            </Link>
            <Link
              data-w-id="17ab0160-10ff-6077-3788-debd70b28c22"
              href="mailto:hello@quillow.edu?subject=Customer%20Support"
              className="contact-card"
            >
              <div className="contact-icon-wrapper pink">
                <Image
                  src={contactIcon01}
                  loading="lazy"
                  alt=""
                  className="icon-extra-large"
                />
              </div>
              <div className="margin-bottom-08">
                <h5>support@hideme.dev</h5>
              </div>
            </Link>
            <Link
              data-w-id="51d8c06c-c845-689e-7494-bbd05c353c70"
              href="https://goo.gl/maps/8sUyW8NJkr7dEz2j7"
              target="_blank"
              className="contact-card"
            >
              <div className="contact-icon-wrapper yellow">
                <Image
                  src={contactIcon03}
                  loading="lazy"
                  alt=""
                  className="icon-extra-large"
                />
              </div>
              <div className="margin-bottom-08">
                <h5>Sheridan, WY</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="background-wrapper">
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccentSmall}
                loading="lazy"
                alt=""
                className="accent-2"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccent}
                loading="lazy"
                alt=""
                className="accent-1"
              />
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
      <QA />
      <Footer />
    </>
  );
}
