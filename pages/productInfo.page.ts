import { $ } from "@wdio/globals";
import Page from "./page.js";
import { getRandomInt } from "./helpers.js";

class ProductInfoPage extends Page {
  public get labelProduct() {
    return $('[data-ui-id="page-title-wrapper"]');
  }
  public get labelPrice() {
    return $(".product-info-price .price");
  }
  public get labelsProductSizes() {
    return $$('[id*="size"][role="option"]');
  }
  public get labelsProductColor() {
    return $$('[id*="color"][role="option"]');
  }
  public get buttonAddToCart() {
    return $("#product-addtocart-button");
  }

  public async getTitle() {
    return await this.labelProduct.getText();
  }

  public async getPrice() {
    return await this.labelPrice.getText();
  }

  public async selectSize() {
    const sizes = await this.labelsProductSizes;
    // Select random size from the list of available sizes
    const randomItem = getRandomInt(sizes.length);
    await sizes[randomItem].click();
  }

  public async selectColor() {
    const sizes = await this.labelsProductColor;
    // Select random color from the list of available colors
    const randomItem = getRandomInt(sizes.length);
    await sizes[randomItem].click();
  }

  public async addToCart() {
    await this.buttonAddToCart.click();
  }
}

export default new ProductInfoPage();
