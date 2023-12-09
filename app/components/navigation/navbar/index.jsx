"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { brand } from "@/utils/images";
import Banner from "@/app/components/banner";

const Navigation = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const pathName = usePathname();
  const router = useRouter();

  const handleCartOpen = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Banner />
      <div className="w-nav">
        <div className="container-navigation">
          <Link href="/" className="logo w-nav-brand">
            <Image src={brand} alt="Logo" />
          </Link>
          <nav className="nav-menu w-nav-menu">
            <div className="nav-link-wrapper">
              <Link
                href="/"
                className={`nav-link ${pathName === "/" ? "w--current" : ""} `}
              >
                Home
              </Link>
              <Link
                href="/howwework"
                className={`nav-link ${
                  pathName === "/howwework" ? "w--current" : ""
                } `}
              >
                How We Work
              </Link>
              <Link
                href="/pricing"
                className={`nav-link ${
                  pathName === "/pricing" ? "w--current" : ""
                } `}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`nav-link ${
                  pathName === "/contact" ? "w--current" : ""
                } `}
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="menu-button-wrapper">
            <div className="w-commerce-commercecartwrapper cart">
              <button
                onClick={handleCartOpen}
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
              >
                <Image
                  src="https://uploads-ssl.webflow.com/63338a1f38b4fd25d6ea3cb2/63549c3e41400ec16fc20d25_Cart%20Icon.svg"
                  alt="Cart"
                  width={40}
                  height={40}
                />
                <div
                  style={{ display: "none" }}
                  className="w-commerce-commercecartopenlinkcount cart-quantity"
                >
                  {cartItems}
                </div>
              </button>
              {isCartOpen && <></>}
            </div>
            <button
              className="navigation-login"
              data-wf-user-logout="Log out"
              data-wf-user-login="Log in"
              type="button"
              onClick={() => {
                router.push("/log-in");
              }}
            >
              Log In
            </button>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
