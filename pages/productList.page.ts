import Page from "./page.js";
import { getRandomInt } from "./helpers.js";

class ProductListPage extends Page {
  public get itemsProduct() {
    return $$(".product-item-info");
  }

  public async selectItem() {
    const items = await this.itemsProduct;
    // get a random item index from the list of products
    const randomItem = getRandomInt(items.length);
    await items[randomItem].$(".photo").click();
  }
}

export default new ProductListPage();
