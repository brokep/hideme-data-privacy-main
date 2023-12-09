import Link from "next/link";
import Image from "next/image";
import ProtectingData from "@/app/components/protecting-data";
import Footer from "@/app/components/footer";
import {
  bgAccent,
  bgAccentSmall,
  purpleCheck,
  pricingGradient,
} from "@/utils/images";

export default function Pricing() {
  return (
    <>
      <div className="section-small">
        <div className="container-small">
          <div
            data-w-id="09e10bf3-e64f-5b91-e541-3b187183e34b"
            className="title-wrapper-center"
          >
            <div className="margin-bottom-12">
              <div className="detail">SUBSCRIBE</div>
            </div>
            <h1>Pricing</h1>
          </div>
          <div className="w-dyn-list">
            <div
              role="list"
              data-w-id="8fef7d12-8166-ecb1-d7da-8fb22c2739b6"
              className="pricing-grid w-dyn-items"
            >
              <div role="listitem" className="w-dyn-item">
                <div className="pricing-card">
                  <div className="badge">
                    <div>FAMILY PLAN</div>
                  </div>
                  <div className="pricing-card-price-wrapper">
                    <h2>$ 50.00 USD</h2>
                  </div>
                  <div className="pricing-card-divider"></div>
                  <div className="margin-bottom-20">
                    <div className="label-regular">Features</div>
                  </div>
                  <div className="pricing-card-feature-list">
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Removals from <strong>270+ Sites</strong>
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Unlimited Custom Removal Requests
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">Dedicated Support</div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Priority Email Support
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        “Humans + Machines” approach
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Opt Out Progress and Exposure Risk Reporting
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="w-commerce-commerceaddtocartform default-state">
                      <label>Quantity</label>
                      <input
                        type="submit"
                        value="Add to Cart"
                        className="w-commerce-commerceaddtocartbutton button-primary"
                      />
                      <Link
                        href="/checkout"
                        className="w-commerce-commercebuynowbutton button-primary"
                      >
                        Buy now
                      </Link>
                    </form>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocartoutofstock"
                    >
                      <div>This product is out of stock.</div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocarterror"
                    >
                      <div>Product is not available in this quantity.</div>
                    </div>
                  </div>
                  <Link
                    href="/sign-up"
                    className="w-commerce-commercebuynowbutton button-primary"
                  >
                    Register Account
                  </Link>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="pricing-card">
                  <div className="badge">
                    <div>FAMILY PLAN</div>
                  </div>
                  <div className="pricing-card-price-wrapper">
                    <h2>$ 50.00 USD</h2>
                  </div>
                  <div className="pricing-card-divider"></div>
                  <div className="margin-bottom-20">
                    <div className="label-regular">Features</div>
                  </div>
                  <div className="pricing-card-feature-list">
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Removals from <strong>270+ Sites</strong>
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Unlimited Custom Removal Requests
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">Dedicated Support</div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Priority Email Support
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        “Humans + Machines” approach
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Opt Out Progress and Exposure Risk Reporting
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="w-commerce-commerceaddtocartform default-state">
                      <label>Quantity</label>
                      <input
                        type="submit"
                        value="Add to Cart"
                        className="w-commerce-commerceaddtocartbutton button-primary"
                      />
                      <Link
                        href="/checkout"
                        className="w-commerce-commercebuynowbutton button-primary"
                      >
                        Buy now
                      </Link>
                    </form>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocartoutofstock"
                    >
                      <div>This product is out of stock.</div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocarterror"
                    >
                      <div>Product is not available in this quantity.</div>
                    </div>
                  </div>
                  <Link
                    href="/sign-up"
                    className="w-commerce-commercebuynowbutton button-primary"
                  >
                    Register Account
                  </Link>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="pricing-card">
                  <div className="badge">
                    <div>FAMILY PLAN</div>
                  </div>
                  <div className="pricing-card-price-wrapper">
                    <h2>$ 50.00 USD</h2>
                  </div>
                  <div className="pricing-card-divider"></div>
                  <div className="margin-bottom-20">
                    <div className="label-regular">Features</div>
                  </div>
                  <div className="pricing-card-feature-list">
                    {/* Add more items as needed */}
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Removals from <strong>270+ Sites</strong>
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Unlimited Custom Removal Requests
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">Dedicated Support</div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Priority Email Support
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        “Humans + Machines” approach
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Opt Out Progress and Exposure Risk Reporting
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="w-commerce-commerceaddtocartform default-state">
                      <label>Quantity</label>
                      <input
                        type="submit"
                        value="Add to Cart"
                        className="w-commerce-commerceaddtocartbutton button-primary"
                      />
                      <Link
                        href="/checkout"
                        className="w-commerce-commercebuynowbutton button-primary"
                      >
                        Buy now
                      </Link>
                    </form>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocartoutofstock"
                    >
                      <div>This product is out of stock.</div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocarterror"
                    >
                      <div>Product is not available in this quantity.</div>
                    </div>
                  </div>
                  <Link
                    href="/sign-up"
                    className="w-commerce-commercebuynowbutton button-primary"
                  >
                    Register Account
                  </Link>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="pricing-card">
                  <div className="badge">
                    <div>FAMILY PLAN</div>
                  </div>
                  <div className="pricing-card-price-wrapper">
                    <h2>$ 50.00 USD</h2>
                  </div>
                  <div className="pricing-card-divider"></div>
                  <div className="margin-bottom-20">
                    <div className="label-regular">Features</div>
                  </div>
                  <div className="pricing-card-feature-list">
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Removals from <strong>270+ Sites</strong>
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Unlimited Custom Removal Requests
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">Dedicated Support</div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Priority Email Support
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        “Humans + Machines” approach
                      </div>
                    </div>
                    <div className="pricing-card-feature-item">
                      <Image
                        src={purpleCheck}
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        className="icon-regular"
                      />
                      <div className="paragraph-small">
                        Opt Out Progress and Exposure Risk Reporting
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="w-commerce-commerceaddtocartform default-state">
                      <label>Quantity</label>
                      <input
                        type="submit"
                        value="Add to Cart"
                        className="w-commerce-commerceaddtocartbutton button-primary"
                      />
                      <Link
                        href="/checkout"
                        className="w-commerce-commercebuynowbutton button-primary"
                      >
                        Buy now
                      </Link>
                    </form>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocartoutofstock"
                    >
                      <div>This product is out of stock.</div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocarterror"
                    >
                      <div>Product is not available in this quantity.</div>
                    </div>
                  </div>
                  <Link
                    href="/sign-up"
                    className="w-commerce-commercebuynowbutton button-primary"
                  >
                    Register Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="09e10bf3-e64f-5b91-e541-3b187183e363"
          className="circle-pricing"
        >
          <Image
            src={pricingGradient}
            loading="lazy"
            alt=""
            width={500}
            height={500}
            className="gradient"
          />
        </div>
        <div
          data-w-id="09e10bf3-e64f-5b91-e541-3b187183e365"
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
      <Footer />
    </>
  );
}
