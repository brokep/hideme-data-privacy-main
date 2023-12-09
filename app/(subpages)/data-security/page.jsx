import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { aboutGradient, bgAccentSmall, bgAccent } from "@/utils/images";

export default function Contact() {
  return (
    <>
      <div className="section-small">
        <div className="container-large">
          <div
            data-w-id="580a2c6b-80c2-310d-c499-a60a3dcee1f5"
            className="title-wrapper-center"
          >
            <div className="margin-bottom-12">
              <div className="detail">About</div>
            </div>
            <h1>HideMe&#x27;s Statement on Data Security      </h1>
          </div>
        </div>
        <div
          data-w-id="d8059560-4d78-311e-06e1-cab377fb4aff"
          style={{ opacity: 1 }}
          className="circle-about"
        >
          <Image
            src={aboutGradient}
            loading="lazy"
            alt=""
            className="gradient"
          />
        </div>
        <div className="background-wrapper">
          <div className="background-line-wrapper">
            <div className="line"></div>
            <div className="line-wrapper">
              <Image
                src={bgAccent}
                loading="lazy"
                data-w-id="9b7a4e33-3ee1-5a7d-9ff8-a0fdb6d2a27b"
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
                data-w-id="9b7a4e33-3ee1-5a7d-9ff8-a0fdb6d2a285"
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
        <div
          data-w-id="1fbbfb6e-ae3b-270a-7cf0-f2d79f37cccd"
          className="container-x-small"
        >
          <div className="rich-text w-richtext">
            <p>Last Updated: October 25, 2023</p>
            <p>
              HideMe, LLC deploys industry-standard security protocols designed
              to prevent unauthorized access, alteration, or loss of personal
              data. We follow stringent security guidelines similar to those in
              the healthcare industry, including compliance with HIPAA
              regulations.
            </p>
            <p>
              {" "}
                 Utilizing cloud infrastructure to minimize data storage
              footprint
              <br />    Encrypting all personal data during storage and
              transmission
              <br />    Isolating sensitive personal data in a dedicated
              environment with strict access controls
              <br />    Implementing network security measures like multi-factor
              authentication and a deny-all/allow-by-exception policy
              <br />    Regularly conducting penetration tests, vulnerability
              assessments, code reviews, and compliance checks
              <br />    Maintaining robust business continuity, disaster
              recovery, and incident response plans
              <br />    Restricting employee access to personal data only when
              necessary for job responsibilities
            </p>
            <p>
              You have the option to invest countless hours researching, opting
              out, and dispatching emails to eliminate threats on your own.
              Alternatively, with HideMe, you can address numerous websites and
              mitigate risks in a single click.
            </p>
            <p>
              Think of HideMe as the digital cleanser for your online footprint.
              We diligently comb the web, identifying sites that disclose
              details about you – be it your residential address, contact
              numbers, compromised passwords, or email IDs. Everyone&#x27;s
              online exposure, preferences, and vulnerabilities are distinctive.
              With this in mind, we tailor our approach to extracting
              information that compromises your privacy and safety.
            </p>
            <p>‍</p>
            <p>
              At HideMe, LLC, a dedicated guardian of consumer data privacy, we
              place the utmost importance on safeguarding your personal
              information when you engage with our services. Your trust is
              invaluable to us, and we are fully committed to upholding the
              security of your data. As part of this unwavering commitment,
              HideMe, LLC has successfully undergone an AICPA SOC 2, Type II
              security audit, and we are pleased to offer the audit report to
              our esteemed corporate customers under a Non-Disclosure Agreement
              (NDA). To delve deeper into the details of HideMe, LLC&#x27;s SOC
              2, Type II security audit.
            </p>
            <p>
              This informational page is designed to elucidate the measures we
              employ to protect the data of our registered users (&quot;user
              data&quot;) on our platforms, namely,{" "}
              <Link href="https://app.hideme.com">https://app.hideme.com</Link>{" "}
              and{" "}
              <Link href="https://business.hideme.com">
                https://business.hideme.com
              </Link>
              . It&#x27;s important to note that this page does not serve as a
              replacement for our official Terms of Service or Privacy Policy,
              and it does not extend to unregistered visitors to our website.
            </p>
            <p>
              In alignment with our Terms of Service and Privacy Policy, HideMe,
              LLC does not engage in the sale or rental of personal information
              to third parties for any purpose whatsoever. We want to emphasize
              that HideMe, LLC is not affiliated with data brokers, nor do we
              maintain any financial associations with them. Our utilization of
              user data is solely directed towards providing our Removal
              Services. As a registered user or paying customer, you retain
              complete ownership of your Personal Data, with the liberty to
              request disclosure or deletion at any point in time. Your
              data&#x27;s security and your privacy are paramount to us at
              HideMe, LLC.
            </p>
            <div className="w-embed">
              <table border="1">
                <thead>
                  <tr>
                    <th>Entity Name</th>
                    <th>Purpose</th>
                    <th>Location</th>
                    <th>More Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amazon Web Services</td>
                    <td>Cloud Hosting</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://aws.amazon.com">AWS</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Amplitude</td>
                    <td>Product Analytics</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://amplitude.com/amplitude-security-and-privacy">
                        Amplitude
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Crisp</td>
                    <td>Customer Support</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://help.crisp.chat/en/article/how-is-security-managed-on-crisp-services-1p8p1lm/">
                        Crisp
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Customer.io</td>
                    <td>Email Marketing, Notifications</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://customer.io/legal/security/">
                        Customer.io
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Ads</td>
                    <td>Marketing</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://policies.google.com/privacy">
                        Google Ads
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Marketing Platform</td>
                    <td>Analytics, Marketing, Tag Management</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://policies.google.com/privacy">
                        Google Marketing Platform
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Workspace</td>
                    <td>Internal Communications, Customer Support</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://policies.google.com/privacy">
                        Google Workspace
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Hotjar</td>
                    <td>Product Analytics</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://help.hotjar.com/hc/en-us/categories/360003405813">
                        Hotjar
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Hubspot</td>
                    <td>Customer Relationship Management</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://legal.hubspot.com/privacy-policy">
                        Hubspot
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Mailgun</td>
                    <td>Customer Analytics</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://www.mailgun.com/legal/privacy-policy/">
                        Mailgun
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Meta</td>
                    <td>Marketing</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://facebook.com/help/109378269482053/">
                        Meta
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Profitwell</td>
                    <td>Revenue Management</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://profitwell.com/security">
                        Profitwell
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Slack</td>
                    <td>Internal Communications, Customer Support</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://slack.com/">Slack</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Stripe</td>
                    <td>Payment Processing</td>
                    <td>USA</td>
                    <td>
                      <Link href="https://stripe.com/us/privacy">Stripe</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                className="accent-8"
              />
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="section-small">
        <div className="container-regular">
          <div
            data-w-id="17e80f0e-88af-4069-a479-7a4683e2a5d4"
            className="cta-wrapper"
          >
            <div className="cta-inner-wrapper">
              <div className="badge gray">
                <div>Members</div>
              </div>
              <div className="margin-bottom-32">
                <h1 className="h2-heading">Don&#x27;t be a fish in a barrel</h1>
              </div>
              <div className="w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="cta-email-form"
                  data-wf-page-id="65398e09923d78df3b589d5f"
                  data-wf-element-id="17e80f0e-88af-4069-a479-7a4683e2a5dd"
                >
                  <input
                    type="email"
                    className="text-field w-input"
                    maxLength="256"
                    name="CTA-Email"
                    data-name="CTA Email"
                    placeholder="Enter your email"
                    id="CTA-Email"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Start protecting your data today"
                    data-wait="Please wait..."
                    className="button-primary w-button"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
