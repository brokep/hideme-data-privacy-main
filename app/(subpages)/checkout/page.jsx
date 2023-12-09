import Link from "next/link";
import Footer from "@/app/components/footer";

export default function CheckOut() {
  return (
    <>
      <div
        data-node-type="commerce-checkout-form-container"
        data-wf-checkout-query=""
        data-wf-page-link-href-prefix=""
        className="w-commerce-commercecheckoutformcontainer checkout-form"
      >
        <div className="w-commerce-commercelayoutcontainer w-container">
          <div className="w-commerce-commercelayoutmain">
            <form
              data-node-type="commerce-checkout-customer-info-wrapper"
              className="w-commerce-commercecheckoutcustomerinfowrapper"
            >
              <div className="w-commerce-commercecheckoutblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Customer Info
                </h5>
                <div>* Required</div>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <label
                  htmlFor="wf-ecom-email"
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Email *
                </label>
                <input
                  type="text"
                  id="wf-ecom-email"
                  className="w-commerce-commercecheckoutemailinput form-field"
                  name="email"
                  required=""
                />
              </fieldset>
            </form>
            <form
              data-node-type="commerce-checkout-shipping-address-wrapper"
              className="w-commerce-commercecheckoutshippingaddresswrapper"
            >
              <div className="w-commerce-commercecheckoutblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Shipping Address
                </h5>
                <div>* Required</div>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-commerce-commercecheckoutshippingfullname form-field"
                  name="name"
                  required=""
                />
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  className="w-commerce-commercecheckoutshippingstreetaddress form-field"
                  name="address_line1"
                  required=""
                />
                <input
                  type="text"
                  aria-label=""
                  className="w-commerce-commercecheckoutshippingstreetaddressoptional form-field"
                  name="address_line2"
                />
                <div className="w-commerce-commercecheckoutrow">
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      className="w-commerce-commercecheckoutshippingcity form-field"
                      name="address_city"
                      required=""
                    />
                  </div>
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      State/Province
                    </label>
                    <input
                      type="text"
                      className="w-commerce-commercecheckoutshippingstateprovince form-field"
                      name="address_state"
                    />
                  </div>
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      Zip/Postal Code *
                    </label>
                    <input
                      type="text"
                      data-node-type="commerce-checkout-shipping-zip-field"
                      className="w-commerce-commercecheckoutshippingzippostalcode form-field"
                      name="address_zip"
                      required=""
                    />
                  </div>
                </div>
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Country *
                </label>
                <select
                  className="w-commerce-commercecheckoutshippingcountryselector form-field"
                  name="address_country"
                >
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="CD">Democratic Republic of the Congo</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="KP">North Korea</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="CG">Republic of the Congo</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="VI">U.S. Virgin Islands</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </fieldset>
            </form>
            <form
              data-node-type="commerce-checkout-shipping-methods-wrapper"
              className="w-commerce-commercecheckoutshippingmethodswrapper"
            >
              <div className="w-commerce-commercecheckoutblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Shipping Method
                </h5>
              </div>
              <fieldset>
                <script
                  type="text/x-wf-template"
                  id="wf-template-63493462d2f3b410de01d32f000000000042"
                >
                  %3Clabel%20className%3D%22w-commerce-commercecheckoutshippingmethoditem%22%3E%3Cinput%20type%3D%22radio%22%20required%3D%22%22%20name%3D%22shipping-method-choice%22%2F%3E%3Cdiv%20className%3D%22w-commerce-commercecheckoutshippingmethoddescriptionblock%22%3E%3Cdiv%20className%3D%22w-commerce-commerceboldtextblock%22%3E%3C%2Fdiv%3E%3Cdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%3E%3C%2Fdiv%3E%3C%2Flabel%3E
                </script>
                <div
                  data-node-type="commerce-checkout-shipping-methods-list"
                  className="w-commerce-commercecheckoutshippingmethodslist"
                  data-wf-collection="database.commerceOrder.availableShippingMethods"
                  data-wf-template-id="wf-template-63493462d2f3b410de01d32f000000000042"
                >
                  <label className="w-commerce-commercecheckoutshippingmethoditem">
                    <input
                      type="radio"
                      required=""
                      name="shipping-method-choice"
                    />
                    <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                      <div className="w-commerce-commerceboldtextblock"></div>
                      <div></div>
                    </div>
                    <div></div>
                  </label>
                </div>
                <div
                  data-node-type="commerce-checkout-shipping-methods-empty-state"
                  style={{ display: "none" }}
                  className="w-commerce-commercecheckoutshippingmethodsemptystate"
                >
                  <div>
                    No shipping methods are available for the address given.
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="w-commerce-commercecheckoutpaymentinfowrapper">
              <div className="w-commerce-commercecheckoutblockheader block-header">
                <h4 aria-level="2" className="h5-heading">
                  Payment Info
                </h4>
                <div>* Required</div>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Card Number *
                </label>
                <div
                  data-wf-stripe-element-type="cardNumber"
                  data-wf-style-map="{}"
                  style={{ position: "relative" }}
                  className="w-commerce-commercecheckoutcardnumber form-field"
                >
                  <div></div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                    }}
                  ></div>
                </div>
                <div className="w-commerce-commercecheckoutrow">
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      Expiration Date *
                    </label>
                    <div
                      data-wf-stripe-element-type="cardExpiry"
                      data-wf-style-map="{}"
                      style={{ position: "relative" }}
                      className="w-commerce-commercecheckoutcardexpirationdate form-field"
                    >
                      <div></div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: 0,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      Security Code *
                    </label>
                    <div
                      data-wf-stripe-element-type="cardCvc"
                      data-wf-style-map="{}"
                      style={{ position: "relative" }}
                      className="w-commerce-commercecheckoutcardsecuritycode form-field"
                    >
                      <div></div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: 0,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-commerce-commercecheckoutbillingaddresstogglewrapper">
                  <input
                    type="checkbox"
                    id="billing-address-toggle"
                    data-node-type="commerce-checkout-billing-address-toggle-checkbox"
                    className="w-commerce-commercecheckoutbillingaddresstogglecheckbox"
                    checked=""
                  />
                  <label
                    htmlFor="billing-address-toggle"
                    className="w-commerce-commercecheckoutbillingaddresstogglelabel"
                  >
                    Billing address same as shipping
                  </label>
                </div>
              </fieldset>
            </div>
            <form
              data-node-type="commerce-checkout-billing-address-wrapper"
              style={{ display: "none" }}
              className="w-commerce-commercecheckoutbillingaddresswrapper"
            >
              <div className="w-commerce-commercecheckoutblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Billing Address
                </h5>
                <div>* Required</div>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-commerce-commercecheckoutbillingfullname form-field"
                  name="name"
                  required=""
                />
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  className="w-commerce-commercecheckoutbillingstreetaddress form-field"
                  name="address_line1"
                  required=""
                />
                <input
                  type="text"
                  aria-label=""
                  className="w-commerce-commercecheckoutbillingstreetaddressoptional form-field"
                  name="address_line2"
                />
                <div className="w-commerce-commercecheckoutrow">
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      className="w-commerce-commercecheckoutbillingcity form-field"
                      name="address_city"
                      required=""
                    />
                  </div>
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      State/Province
                    </label>
                    <input
                      type="text"
                      className="w-commerce-commercecheckoutbillingstateprovince form-field"
                      name="address_state"
                    />
                  </div>
                  <div className="w-commerce-commercecheckoutcolumn">
                    <label
                      htmlFor=""
                      className="w-commerce-commercecheckoutlabel field-label"
                    >
                      Zip/Postal Code *
                    </label>
                    <input
                      type="text"
                      data-node-type="commerce-checkout-billing-zip-field"
                      className="w-commerce-commercecheckoutbillingzippostalcode form-field"
                      name="address_zip"
                      required=""
                    />
                  </div>
                </div>
                <label
                  htmlFor=""
                  className="w-commerce-commercecheckoutlabel field-label"
                >
                  Country *
                </label>
                <select
                  className="w-commerce-commercecheckoutbillingcountryselector form-field"
                  name="address_country"
                >
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="CD">Democratic Republic of the Congo</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="KP">North Korea</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="CG">Republic of the Congo</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="VI">U.S. Virgin Islands</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option selected="" value="US">
                    United States
                  </option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </fieldset>
            </form>
            <div className="w-commerce-commercecheckoutorderitemswrapper">
              <div className="w-commerce-commercecheckoutsummaryblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Items in Order
                </h5>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <script
                  type="text/x-wf-template"
                  id="wf-template-63493462d2f3b410de01d32f000000000086"
                ></script>
                <div
                  role="list"
                  className="w-commerce-commercecheckoutorderitemslist"
                  data-wf-collection="database.commerceOrder.userItems"
                  data-wf-template-id="wf-template-63493462d2f3b410de01d32f000000000086"
                ></div>
              </fieldset>
            </div>
          </div>
          <div className="w-commerce-commercelayoutsidebar">
            <div className="w-commerce-commercecheckoutordersummarywrapper">
              <div className="w-commerce-commercecheckoutsummaryblockheader block-header">
                <h5 aria-level="2" className="h5-heading">
                  Order Summary
                </h5>
              </div>
              <fieldset className="w-commerce-commercecheckoutblockcontent">
                <div className="w-commerce-commercecheckoutsummarylineitem">
                  <div>Subtotal</div>
                  <div></div>
                </div>
                <script
                  type="text/x-wf-template"
                  id="wf-template-63493462d2f3b410de01d32f0000000000a0"
                >
                  %3Cdiv%20className%3D%22w-commerce-commercecheckoutordersummaryextraitemslistitem%22%3E%3Cdiv%3E%3C%2Fdiv%3E%3Cdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                </script>
                <div
                  className="w-commerce-commercecheckoutordersummaryextraitemslist"
                  data-wf-collection="database.commerceOrder.extraItems"
                  data-wf-template-id="wf-template-63493462d2f3b410de01d32f0000000000a0"
                >
                  <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="w-commerce-commercecheckoutsummarylineitem">
                  <div>Total</div>
                  <div className="w-commerce-commercecheckoutsummarytotal"></div>
                </div>
              </fieldset>
            </div>
            <Link
              href="#"
              value="Place Order"
              data-node-type="commerce-checkout-place-order-button"
              className="w-commerce-commercecheckoutplaceorderbutton button-primary"
              data-loading-text="Placing Order..."
            >
              Place Order
            </Link>
            <div
              data-node-type="commerce-checkout-error-state"
              style={{ display: "none" }}
              className="w-commerce-commercecheckouterrorstate"
            >
              <div
                aria-live="polite"
                className="w-checkout-error-msg"
                data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems."
                data-w-shipping-error="Sorry. We can’t ship your order to the address provided."
                data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems."
                data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems."
                data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again."
                data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue."
                data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again."
                data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again."
                data-w-invalid-discount-error="This discount is invalid."
                data-w-expired-discount-error="This discount is no longer available."
                data-w-usage-reached-discount-error="This discount is no longer available."
                data-w-requirements-not-met-error=""
              >
                There was an error processing your customer info. Please try
                again, or contact us if you continue to have problems.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
