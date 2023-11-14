import { $ } from "@wdio/globals";
import Page from "./page.js";

class ShippingDetailsPage extends Page {
  public get inputEmail() {
    return $('#customer-email-fieldset input[type="email"]');
  }
  public get inputfirstName() {
    return $('[name="firstname"]');
  }
  public get inputLastName() {
    return $('[name="lastname"]');
  }
  public get inputCompany() {
    return $('[name="company"]');
  }
  public get inputStreetAdress() {
    return $('[name="street[0]"]');
  }
  public get inputCity() {
    return $('[name="city"]');
  }
  public get selectState() {
    return $('[name="region_id"]');
  }
  public get inputPostalCode() {
    return $('[name="postcode"]');
  }
  public get selectCountry() {
    return $('[name="country_id"]');
  }
  public get inputPhoneNumber() {
    return $('[name="telephone"]');
  }
  public get radioFlatShippingMethod() {
    return $('input[value="flatrate_flatrate"]');
  }
  public get radioTableRateShippingMethod() {
    return $('input[value="tablerate_bestway"]');
  }
  public get buttonNext() {
    return $('button[data-role="opc-continue"]');
  }

  public async fill(details: {
    email: string;
    firstName: string;
    lastName: string;
    company?: string;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
  }) {
    const {
      email,
      firstName,
      lastName,
      company,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      phoneNumber,
    } = details;

    await Promise.all([
      this.inputEmail.setValue(email),
      this.inputfirstName.setValue(firstName),
      this.inputLastName.setValue(lastName),
      this.inputStreetAdress.setValue(streetAddress),
      this.inputCity.setValue(city),
      this.selectState.selectByVisibleText(state),
      this.selectCountry.selectByVisibleText(country),
      this.inputPostalCode.setValue(postalCode),
      this.inputPhoneNumber.setValue(phoneNumber),
    ]);
    if (company) {
      await this.inputCompany.setValue(company);
    }
  }

  public async selectShippingMethod(method: "table rate" | "fixed") {
    const item =
      method === "table rate"
        ? this.radioTableRateShippingMethod
        : this.radioFlatShippingMethod;
    await item.click();
  }

  public async clickNext() {
    await this.buttonNext.click();
  }
}

export default new ShippingDetailsPage();
