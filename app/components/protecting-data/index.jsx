"use client";
import { useState } from "react";

export default function ProtectingData() {
  const [formStatus, setFormStatus] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    // For now, just log submitted data
    console.log(`Submitted email: ${email}`);
    setFormStatus("submitted");
  };
  return (
    <>
      <div className="cta-wrapper">
        <div className="cta-inner-wrapper">
          <div className="badge gray">
            <div>Members</div>
          </div>
          <div className="margin-bottom-32">
            <h1 className="h2-heading">Don&apos;t be a fish in a barrel</h1>
          </div>
          <div className="w-form">
            <form
              id="email-form"
              name="email-form"
              onSubmit={handleSubmit}
              className="cta-email-form"
            >
              <input
                type="email"
                className="text-field w-input"
                maxLength="256"
                name="CTA-Email"
                placeholder="Enter your email"
                id="CTA-Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="submit"
                value="Start protecting your data today"
                className="button-primary w-button"
              />
            </form>
            {formStatus === "submitted" && (
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
            )}
            {formStatus === "failed" && (
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
