import Image from "next/image";
import formIcon01 from "@/assets/images/Form-Icon-01.svg";
import formIcon03 from "@/assets/images/Form-Icon-03.svg";
import accountIcon04 from "@/assets/images/Account-Icon-04.svg";
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
          <div className="account-title-wrap">
            <div className="account-icon-wrapper">
              <Image
                src={accountIcon04}
                loading="lazy"
                alt=""
                className="icon-large"
              />
            </div>
            <div className="margin-bottom-04">
              <h4>Account Management</h4>
            </div>
            <p>Manage your account here</p>
          </div>
          <div
            className="w-users-useraccountwrapper user-account-wrapper"
            data-wf-user-account="true"
            data-wf-collection="site.siteUser"
          >
            <div>
              <form className="user-account-form" method="post">
                <label>Email</label>
                <div className="text-field-wrapper">
                  <Image loading="lazy" src={formIcon03} alt="" />
                  <input
                    type="email"
                    id="wf-user-account-email"
                    placeholder=""
                    disabled
                    name="Email"
                    className="text-field-plain w-input w-input-disabled"
                    autoComplete="username"
                    required
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
                    placeholder=""
                    fieldtype=""
                    id="wf-user-account-name"
                    required
                  />
                </div>
                <div className="margin-bottom-16">
                  <label className="w-checkbox">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                    <input
                      type="checkbox"
                      name="Checkbox"
                      data-name="Checkbox"
                      placeholder=""
                      id="wf-user-account-accept-communications"
                      style={{ opacity: 0 }}
                    />
                    <span className="checkbox-label" htmlFor="Checkbox">
                      I consent to receive marketing emails.
                    </span>
                  </label>
                </div>
                <input
                  type="submit"
                  value="Save Changes"
                  data-wait="Saving..."
                  className="w-users-useraccountformsavebutton button-primary"
                />
                <Link href="/reset-password" className="reset-password-link">
                  Reset password
                </Link>
                <input
                  type="reset"
                  value="Cancel"
                  className="w-users-useraccountformcancelbutton cancel-button"
                />
              </form>
              <div
                tabIndex="-1"
                className="w-users-userformsuccessstate w-form-success"
              >
                <p className="success-message">
                  Your account was updated successfully.
                </p>
              </div>
              <div
                style={{ display: "none" }}
                data-wf-user-form-error="true"
                className="error-state w-form-fail"
              >
                <div
                  className="user-form-error-msg"
                  wf-account-update-form-general-error-error="There was an error updating your account. Please try again, or contact us if you continue to have problems."
                >
                  There was an error updating your account. Please try again, or
                  contact us if you continue to have problems.
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
