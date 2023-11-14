import salePage from "../pages/sale.page.js";
import productListPage from "../pages/productList.page.js";
import productInfoPage from "../pages/productInfo.page.js";
import cartPage from "../pages/cart.page.js";
import shippingDetailsPage from "../pages/shippingDetails.page.js";
import reviewPage from "../pages/review.page.js";
import confirmation from "../pages/confirmation.page.js";

const addItemToCart = async (category: "male" | "female") => {
  await salePage.open();
  category === "male"
    ? await salePage.selectCategory("male")
    : await salePage.selectCategory("female");
  await productListPage.selectItem();
  const productName = await productInfoPage.getTitle();
  const productPrice = await productInfoPage.getPrice();
  await productInfoPage.selectSize();
  await productInfoPage.selectColor();
  await productInfoPage.addToCart();
  return { productName, productPrice };
};

const shippingDetails = {
  email: "tony.stark@marvels.com",
  firstName: "Tony",
  lastName: "Stark",
  company: "Marvels",
  streetAddress: "Lost Street 123",
  city: "NY",
  state: "Alabama",
  postalCode: "12345",
  country: "United States",
  phoneNumber: "+0123456789",
};

describe("Sales page | Ordering items", () => {
  it("should complete an order for two items from two different categories", async () => {
    // Go to Sales / Women’s Deals / Add one random product
    const { productName: firstProductName, productPrice: firstProductPrice } =
      await addItemToCart("female");

    // Go to Sales / Men’s Deals / Add one random product
    const { productName: secondProductName, productPrice: secondProductPrice } =
      await addItemToCart("male");

    await cartPage.open();
    await cartPage.checkProduct(firstProductName, secondProductName);
    await cartPage.checkTotalPrice([firstProductPrice, secondProductPrice]);
    await cartPage.proceedToCheckout();

    // Add shipping details and complete the payment process
    await shippingDetailsPage.fill(shippingDetails);
    await shippingDetailsPage.selectShippingMethod("table rate");
    await shippingDetailsPage.clickNext();
    await reviewPage.checkDetails("United States", "Tony", "Stark");
    await reviewPage.submit();
    await confirmation.checkPurchase();
  });
});
