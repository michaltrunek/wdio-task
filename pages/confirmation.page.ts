import { $ } from "@wdio/globals";
import Page from "./page.js";

class ConfirmationPage extends Page {
  public get labelPageTitle() {
    return $(".page-title");
  }

  public async checkPurchase() {
    const orderConfirmation = await this.labelPageTitle;
    await expect(orderConfirmation).toHaveTextContaining(
      "Thank you for your purchase!"
    );
  }
}

export default new ConfirmationPage();
