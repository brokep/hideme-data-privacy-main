import Image from "next/image";
import accountIcon05 from "@/assets/images/Account-Icon-05.svg";
import formIcon04 from "@/assets/images/Form-Icon-04.svg";
import Footer from "@/app/components/footer";
import Link from "next/link";

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
          <div className="w-users-userupdatepasswordformwrapper account-form-block">
            <div
              tabIndex="-1"
              className="w-users-userformsuccessstate w-form-success"
            >
              <div className="account-title-wrap">
                <div className="account-icon-wrapper">
                  <Image
                    src={accountIcon05}
                    loading="lazy"
                    alt=""
                    className="icon-large"
                  />
                </div>
                <div className="margin-bottom-08">
                  <h4>Password updated</h4>
                </div>
                <p>
                  Your password was updated successfully. You were automatically
                  logged in and can continue your session.
                </p>
              </div>
              <Link href="/" className="button-primary w-button">
                Go to Homepage
              </Link>
            </div>
            <form method="post" data-wf-user-form-type="updatePassword">
              <div className="account-title-wrap">
                <div className="account-icon-wrapper">
                  <Image
                    src={accountIcon05}
                    loading="lazy"
                    alt=""
                    className="icon-large"
                  />
                </div>
                <div className="margin-bottom-08">
                  <h4>Update Password</h4>
                </div>
                <p>
                  Please enter your new password in the field below. Make sure
                  you are not using your current password.
                </p>
              </div>
              <label>New Password</label>
              <div className="text-field-wrapper">
                <Image src={formIcon04} loading="lazy" alt="" />
                <input
                  type="password"
                  maxLength="256"
                  placeholder=""
                  name="Password"
                  id="wf-update-password"
                  className="text-field-plain w-input"
                  required
                  data-wf-user-form-input-type="password"
                />
              </div>
              <input
                type="submit"
                value="Update Password"
                data-wait="Please wait..."
                className="w-users-userformbutton button-primary w-button"
              />
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate error-state w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-update-pw-form-general-error-error="There was an error updating your password. Please try again, or contact us if you continue to have problems."
                wf-update-pw-form-weak-password-error="Your password must be at least 8 characters."
              >
                There was an error updating your password. Please try again, or
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
