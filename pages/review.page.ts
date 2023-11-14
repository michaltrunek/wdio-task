import { $ } from "@wdio/globals";
import Page from "./page.js";

class ReviewPage extends Page {
  public get buttonCheckout() {
    return $("button.checkout");
  }
  public get textShippingDetails() {
    return $(".payment-method-content");
  }

  public async submit() {
    await this.buttonCheckout.click();
  }

  public async checkDetails(...expectedDetails: string[]) {
    const shippingDetails = await this.textShippingDetails;
    await expect(shippingDetails).toHaveTextContaining(expectedDetails);
  }
}

export default new ReviewPage();
