import Image from "next/image";
import Footer from "@/app/components/footer";
import { formIcon04, accountIcon06 } from "@/utils/images";

export default function Page() {
  return (
    <>
      <div className="utility-page-wrap">
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
        <div className="utility-page-content w-password-page w-form">
          <form
            action="/.wf_auth"
            method="post"
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className="utility-page-form w-password-page"
            data-wf-page-id="65385660a9a77b039e8dc345"
            data-wf-element-id="6354a19a4d0d411c4f9cbd2500000000000c"
          >
            <div className="account-title-wrap">
              <div className="account-icon-wrapper">
                <Image
                  src={accountIcon06}
                  loading="lazy"
                  alt=""
                  className="icon-large"
                />
              </div>
              <div className="margin-bottom-08">
                <h4>Protected Page</h4>
              </div>
            </div>
            <label className="w-password-page">Password</label>
            <div className="text-field-wrapper">
              <Image
                src={formIcon04}
                loading="lazy"
                alt=""
                className="icon-large"
              />
              <input
                type="password"
                className="text-field-plain w-password-page w-input"
                autoFocus="true"
                maxLength="256"
                name="pass"
                data-name="field"
                placeholder="Enter your password"
                id="pass"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              data-wait="Please wait..."
              className="button-primary w-password-page"
            />
            <div className="w-password-page w-form-fail">
              <div>Incorrect password. Please try again.</div>
            </div>
            <div
              style={{ display: "none" }}
              className="w-password-page w-embed w-script"
            >
              <input type="hidden" name="path" value="<%WF_FORM_VALUE_PATH%>" />
              <input type="hidden" name="page" value="<%WF_FORM_VALUE_PAGE%>" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
