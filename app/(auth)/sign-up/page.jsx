import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/footer";
import {
  accountIcon02,
  formIcon01,
  formIcon03,
  formIcon04,
  contactIcon01,
} from "@/utils/images";

export default function SignUp() {
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
          <div className="w-users-usersignupformwrapper account-form-block">
            <div
              tabIndex="-1"
              className="w-users-userformsuccessstate w-form-success"
            >
              <div className="account-title-wrap">
                <div className="account-icon-wrapper">
                  <Image
                    src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
                    alt=""
                    className="icon-large"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="margin-bottom-04">
                  <h4>Account activated</h4>
                </div>
                <p>
                  Your account was created successfully. <br />
                  You will be redirected shortly.
                </p>
                <div data-wf-user-form-redirect="" className="redirect-block">
                  <Link href="/">If nothing happens, click here.</Link>
                </div>
              </div>
            </div>
            <form method="post" data-wf-user-form-type="signup">
              <div className="account-title-wrap">
                <div className="account-icon-wrapper">
                  <Image
                    loading="lazy"
                    src={accountIcon02}
                    alt=""
                    className="icon-large"
                  />
                </div>
                <div className="margin-bottom-04">
                  <h4>Create New Account</h4>
                </div>
                <p>Create a new account with the form below.</p>
              </div>
              <label>Email</label>
              <div className="text-field-wrapper">
                <Image loading="lazy" src={formIcon03} alt="" />
                <input
                  type="email"
                  id="wf-sign-up-email"
                  placeholder="Enter your email"
                  maxLength="256"
                  name="Email"
                  className="text-field-plain w-input"
                  autoComplete="username"
                  required=""
                  data-wf-user-form-input-type="email"
                />
              </div>
              <label>Name</label>
              <div className="text-field-wrapper">
                <Image loading="lazy" src={formIcon01} alt="" />
                <input
                  type="text"
                  className="text-field-plain w-input"
                  maxLength="256"
                  name=""
                  data-name="field"
                  data-wf-user-field="wf-user-field-name"
                  placeholder="Enter your name"
                  fieldtype=""
                  id="wf-sign-up-name"
                  required=""
                />
              </div>
              <label>Password</label>
              <div className="margin-bottom-32">
                <div className="text-field-wrapper">
                  <Image loading="lazy" src={formIcon04} alt="" />
                  <input
                    type="password"
                    id="wf-sign-up-password"
                    placeholder="Enter your password"
                    maxLength="256"
                    name="Password"
                    className="text-field-plain w-input"
                    required=""
                    data-wf-user-form-input-type="password"
                  />
                </div>
              </div>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-form"></div>
                <input
                  type="checkbox"
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-privacy"
                  placeholder=""
                  id="wf-sign-up-accept-privacy"
                  required=""
                  style={{ opacity: 0, position: "absolute" }}
                />
                <span className="w-form-label" htmlFor="Checkbox">
                  By creating an account, I agree to this website&#x27;s
                  <Link href="/"> privacy policy</Link> and
                  <Link href="/"> terms of service</Link>
                </span>{" "}
              </label>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-form"></div>
                <input
                  type="checkbox"
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-communications"
                  placeholder=""
                  id="wf-sign-up-accept-communications"
                  style={{ opacity: 0, position: "absolute" }}
                />
                <span className="w-form-label" htmlFor="Checkbox">
                  I consent to receive marketing emails.
                </span>{" "}
              </label>
              <input
                type="submit"
                value="Sign Up"
                data-wait="Please wait..."
                className="w-users-userformbutton button-primary w-button"
              />
              <div className="w-users-userformfooter form-footer">
                <span>Already have an account?</span>
                <Link href="/log-in">Log In</Link>
              </div>
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate error-state w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
                wf-signup-form-not-allowed-error="You&#x27;re not allowed to access this site, please contact the admin for support."
                wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
                wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
                wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
                wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
                wf-signup-form-not-verified-error="We couldn&#x27;t verify your account. Please try again, or contact us if you continue to have problems."
                wf-signup-form-expired-token-error="This verification link has expired. A new verification link has been sent to your email. Please try again, or contact us if you continue to have problems."
              >
                There was an error signing you up. Please try again, or contact
                us if you continue to have problems.
              </div>
            </div>
            <div
              tabIndex="-1"
              className="w-users-usersignupverificationmessage w-form-verification"
              data-wf-user-form-verification="true"
            >
              <div className="w-users-userformheader">
                <div className="account-title-wrap">
                  <div className="account-icon-wrapper">
                    <Image
                      src={contactIcon01}
                      loading="lazy"
                      alt=""
                      className="icon-large"
                    />
                  </div>
                  <div className="margin-bottom-08">
                    <h4>Verification Required</h4>
                  </div>
                  <p>
                    Account verification required. Please check your email to
                    find your unique verification link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
