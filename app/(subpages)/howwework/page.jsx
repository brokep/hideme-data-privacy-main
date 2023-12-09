import Link from "next/link";
import Image from "next/image";
import ProtectingData from "@/app/components/protecting-data";
import Footer from "@/app/components/footer";
import { bgCircle, bgAccentSmall, bgAccent } from "@/utils/images";

export default function HowWeWork() {
  return (
    <>
      <div className="section-regular">
        <div className="container-regular">
          <div
            data-w-id="44b37a92-ea51-0a83-7f72-d1015387b7fc"
            className="title-wrapper-center"
          >
            <div className="margin-bottom-12">
              <div className="detail">Hideme</div>
            </div>
            <h1>The Path to Successful Personal Data Privacy</h1>
            <p>
              Our personal data saturates the internet. In essence, the more
              active we become in this digital landscape, the more our data
              proliferates.We willingly share certain aspects: our identities,
              social media posts, photographs, and professional backgrounds.
              <br />
              <br />
              However, there&#x27;s also a myriad of details — such as our
              addresses, phone numbers, family data, health records, and
              earnings — that we&#x27;d prefer remain confidential. Despite our
              best efforts, some of these facts inadvertently make their way
              online.
              <br />
              <br />
              The unsettling reality is that &quot;data brokers&quot;
              continuously broadcast, manipulate, and magnify our
              personal/private details. These entities relentlessly scour the
              internet, amassing any accessible data, crafting detailed
              profiles, and then marketing these profiles to advertisers,
              cybercriminals, or any interested party willing to pay.
              <br />
              <br />
              The gravity of this situation cannot be understated.
              <br />
              <br />I remember my dismay when, upon inspecting some of these
              platforms, I stumbled upon my profile. Beyond the fact that both
              my property&#x27;s value and income were inaccurately inflated, I
              was horrified to discover a public link to my wife&#x27;s relative
              and our confidential health records.
              <br />
              <br />
              On a brighter note, U.S. legislation mandates these broker
              websites to honor removal requests. This means I could technically
              approach such a site and, via a form or email, demand the deletion
              of my personal details.
              <br />
              <br />
              However, the challenge arises from the sheer volume of these
              platforms, with new ones emerging continually.
              <br />
              <br />
              <strong>
                <sub>
                  HideMe boasts a user-friendly front end paired with a complex
                  backend that persistently combs the internet, automatically
                  dispatching removal requests to data brokers.
                  <br />
                </sub>
              </strong>
              ‍<br />
              <br />‍
            </p>
            <div
              data-w-id="eecd7091-d34e-ddf6-a0b1-6f5ea9c048d8"
              className="header-card-wrapper"
            >
              <div
                data-w-id="d8d6ec34-f67f-142d-d39d-7c863cfe3e98"
                className="circle-course"
              >
                <Image src={bgCircle} alt="gradient" className="gradient" />
              </div>
            </div>
          </div>
        </div>
        <div className="background-wrapper">
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
      <div className="section-small">
        <div className="background-wrapper">
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccent}
                loading="lazy"
                alt=""
                className="accent-3"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccent}
                loading="lazy"
                alt=""
                className="accent-7"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="section-regular">
        <div className="container-x-small">
          <div
            data-w-id="362479a4-ad8f-68b0-447f-d46739d7ca12"
            className="title-wrapper-center"
          >
            <div className="badge pink">
              <div>WHAT DO YOU WANT TO KNOW?</div>
            </div>
            <h2 className="h2-heading">
              Some of the most frequently asked questions
            </h2>
          </div>
          <div
            data-w-id="362479a4-ad8f-68b0-447f-d46739d7ca18"
            className="faq-wrapper"
          >
            <div
              data-w-id="362479a4-ad8f-68b0-447f-d46739d7ca19"
              className="faq-item w-dropdown"
            >
              <div className="faq-item-toggle w-dropdown-toggle">
                <div className="faq-title-wrapper">
                  <div className="label-large">How is HideMe Rated?</div>
                  <div className="faq-icon-wrapper">
                    <div className="faq-plus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="faq-minus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65283 11.2363H17.3473V12.7641H6.65283V11.2363Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list">
                <div className="faq-tab-content">
                  <p className="paragraph-regular">
                    HideMe has been recommended by Lavabit, Privacytools.io,
                    TEM, and Bitcoin Twitter. We&#x27;re rated highly for being
                    fast to help with support requests and having broad coverage
                    of sites. We&#x27;ve received mostly 5 star and 4 star
                    reviews, and a few 3 star reviews along the way. We always
                    appreciate people letting us know how we&#x27;re doing and
                    what we can do to improve.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              className="faq-item w-dropdown"
            >
              <div className="faq-item-toggle w-dropdown-toggle">
                <div className="faq-title-wrapper">
                  <div className="label-large">What Does HideMe Cost?</div>
                  <div className="faq-icon-wrapper">
                    <div className="faq-plus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="faq-minus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65283 11.2363H17.3473V12.7641H6.65283V11.2363Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list">
                <div className="faq-tab-content">
                  <p className="paragraph-regular">
                    HideMe is the most affordable way to protect your privacy
                    online. We offer flexible month to month
                    <Link href="#">plans for as low as $12 / month</Link> as
                    well as further discounted yearly plans.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              className="faq-item w-dropdown"
            >
              <div className="faq-item-toggle w-dropdown-toggle">
                <div className="faq-title-wrapper">
                  <div className="label-large">
                    What are the Pros and Cons of Using HideMe?
                  </div>
                  <div className="faq-icon-wrapper">
                    <div className="faq-plus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="faq-minus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65283 11.2363H17.3473V12.7641H6.65283V11.2363Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list">
                <div className="faq-tab-content">
                  <p className="paragraph-regular">
                    <strong>Advantages:</strong>You ensure the wrongdoers face
                    consequences.It decreases vulnerabilities and threats.
                    HideMe&#x27;s features enable you to protect those you care
                    about. <br />‍<strong>Disadvantages:</strong>You must
                    provide certain details for HideMe to assist you
                    effectively.If you&#x27;re a regular social media or
                    internet user, some information may reappear.Currently,
                    HideMe doesn&#x27;t offer a solution to prevent initial data
                    breaches.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              className="faq-item w-dropdown"
            >
              <div className="faq-item-toggle w-dropdown-toggle">
                <div className="faq-title-wrapper">
                  <div className="label-large">
                    How Does HideMe Compare To Competitors like DeleteMe,
                    Kanary, or Optery?
                  </div>
                  <div className="faq-icon-wrapper">
                    <div className="faq-plus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="faq-minus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65283 11.2363H17.3473V12.7641H6.65283V11.2363Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list">
                <div className="faq-tab-content">
                  <p className="paragraph-regular">
                    We started HideMe because there was a gap in what data
                    removal companies were doing. Some were even affiliated with
                    data brokers themselves (yuck).
                    <strong>
                      We started HideMe to be an independent and member-aligned
                      group with the sole mission of helping you remove your
                      information to protect your privacy, security, and
                      identity.{" "}
                    </strong>
                    We cover the most sites of any data removal service and
                    offer speedy and extremely helpful member support.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              className="faq-item w-dropdown"
            >
              <div className="faq-item-toggle w-dropdown-toggle">
                <div className="faq-title-wrapper">
                  <div className="label-large">
                    Is this Automated or Human-Driven?
                  </div>
                  <div className="faq-icon-wrapper">
                    <div className="faq-plus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="faq-minus w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65283 11.2363H17.3473V12.7641H6.65283V11.2363Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="faq-content w-dropdown-list">
                <div className="faq-tab-content">
                  <p className="paragraph-regular">
                    Both. After thousands of manual data removal requests, our
                    team developed a process to efficiently identify, remove,
                    and verify data leaks. Our engineering team builds
                    automation to scale our process to hundreds of sites and
                    thousands of members
                  </p>
                </div>
              </nav>
            </div>
          </div>
          <div className="background-wrapper">
            <div className="background-line-wrapper">
              <div className="line"></div>
              {/* Repeat above div for each line */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
