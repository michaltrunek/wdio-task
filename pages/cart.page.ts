import { $ } from "@wdio/globals";
import Page from "./page.js";
import { getTotalSum } from "./helpers.js";

class CartPage extends Page {
  public get labelCartCounter() {
    return $(".showcart .counter");
  }
  public get labelTotalAmount() {
    return $(".grand.totals");
  }
  public get listShoppingCart() {
    return $("#shopping-cart-table");
  }
  public get buttonProceedToCheckout() {
    return $('[data-role="proceed-to-checkout"]');
  }

  public async open() {
    return super.open("checkout/cart/");
  }

  public async checkItemsInCart(expectedItemCount: number) {
    const cartCount = await this.labelCartCounter;
    await expect(cartCount).toHaveTextContaining(expectedItemCount.toString());
  }

  public async checkTotalPrice(prices: string[]) {
    const totalSum = getTotalSum(prices);
    const shoppingCartList = await this.labelTotalAmount;
    await expect(shoppingCartList).toHaveTextContaining(totalSum.toString());
  }

  public async checkProduct(...expectedProductName: string[]) {
    const shoppingCartList = await this.listShoppingCart;
    await expect(shoppingCartList).toHaveTextContaining(expectedProductName);
  }

  public async proceedToCheckout() {
    await this.buttonProceedToCheckout.click();
  }
}

export default new CartPage();
