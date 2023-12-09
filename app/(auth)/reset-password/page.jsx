import Image from "next/image";
import formIcon03 from "@/assets/images/Form-Icon-03.svg";
import accountIcon02 from "@/assets/images/Account-Icon-02.svg";
import Footer from "@/app/components/footer";

export default function ResetPassword() {
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
          <div className="w-users-userresetpasswordformwrapper account-form-block">
            <div
              tabIndex="-1"
              className="w-users-userformsuccessstate w-form-success"
            >
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
                  <h4>Password Reset Email Sent</h4>
                </div>
                <p>
                  If we found an account associated with that email address,
                  we&#x27;ve sent a link to reset your password.
                </p>
              </div>
            </div>
            <form method="post" data-wf-user-form-type="resetPassword">
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
                  <h4>Forgot Password?</h4>
                </div>
                <p>Reset your password here</p>
              </div>
              <label>Email</label>
              <div className="text-field-wrapper">
                <Image
                  src={formIcon03}
                  loading="lazy"
                  alt=""
                  className="icon-large"
                />
                <input
                  type="email"
                  maxLength="256"
                  placeholder=""
                  name="Email"
                  id="wf-reset-password-email"
                  aria-describedby="wf-reset-password-paragraph"
                  className="text-field-plain w-input"
                  autoComplete="username"
                  required=""
                  data-wf-user-form-input-type="email"
                />
              </div>
              <input
                type="submit"
                value="Reset Password"
                data-wait="Please wait..."
                className="w-users-userformbutton button-primary"
              />
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate error-state w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-reset-pw-form-general-error-error="There was an error resetting your password. Please try again, or contact us if you continue to have problems."
              >
                There was an error resetting your password. Please try again, or
                contact us if you continue to have problems.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
