import Image from "next/image";
import Footer from "@/app/components/footer";
import { accountIcon02, formIcon03, formIcon04 } from "@/utils/images";
import Link from "next/link";

export default function LogIn() {
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
            <div className="margin-bottom-04">
              <h4>Welcome back!</h4>
            </div>
            <p className="paragraph-regular">
              Login to see the members functionality
            </p>
          </div>
          <div className="w-users-userloginformwrapper account-form-block">
            <form
              data-wf-user-form-type="login"
              data-wf-user-form-redirect="/"
              method="post"
            >
              <div className="text-field-wrapper">
                <Image
                  src={formIcon03}
                  loading="lazy"
                  alt=""
                  className="icon-regular"
                />
                <input
                  type="email"
                  maxLength="256"
                  placeholder="Enter your email"
                  name="Email"
                  id="wf-log-in-email"
                  className="text-field-plain w-input"
                  autoComplete="username"
                  required=""
                  data-wf-user-form-input-type="email"
                />
              </div>
              <div className="text-field-wrapper">
                <Image
                  src={formIcon04}
                  loading="lazy"
                  alt=""
                  className="icon-regular"
                />
                <input
                  type="password"
                  maxLength="256"
                  placeholder="Enter your password"
                  name="Password"
                  id="wf-log-in-password"
                  className="text-field-plain w-input"
                  required=""
                  data-wf-user-form-input-type="password"
                />
              </div>
              <input
                type="submit"
                value="Log In"
                data-wait="Please wait..."
                className="w-users-userformbutton button-primary w-button"
              />
              <div className="w-users-userformfooter form-footer">
                <span>Don&#x27;t have an account?</span>
                <Link href="/sign-up">Sign Up</Link>
              </div>
              <div className="forgot-password">
                <Link href="/reset-password">Forgot Password?</Link>
              </div>
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate error-state w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
                wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
              >
                We&#x27;re having trouble logging you in. Please try again, or
                contact us if you continue to have problems.
              </div>
            </div>
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
                  data-wf-page-id="65385660a9a77b039e8dc3c0"
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
