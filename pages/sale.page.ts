import Page from "./page.js";
import { getRandomInt } from "./helpers.js";

class SalePage extends Page {
  public get listItems() {
    return $$(".categories-menu .items");
  }

  public async selectCategory(category: "male" | "female" | "gear") {
    const allCategories = await this.listItems;

    let expectedCategoryIndex: number;
    switch (category) {
      case "female":
        expectedCategoryIndex = 0;
        break;
      case "male":
        expectedCategoryIndex = 1;
        break;
      case "gear":
        expectedCategoryIndex = 2;
        break;
    }

    const expectedCategory = allCategories[expectedCategoryIndex];
    const items = await expectedCategory.$$("a");

    // Return an index of a random product item to be selected
    const randomInt = getRandomInt(items.length);
    await items[randomInt].click();
  }

  public open() {
    return super.open("sale.html");
  }
}

export default new SalePage();
