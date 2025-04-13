function getShippingCost(country) {
  let message;
  if (country === "China") {
    message = "Shipping cost is 100 credits";
  } else if (country === "Chile") {
    message = "Shipping cost is 250 credits";
  } else if (country === "Australia") {
    message = "Shipping cost is 170 credits";
  } else if (country === "Jamaica") {
    message = "Shipping cost is 120 credits";
  } else {
    message = "Sorry, there is no delivery to your country";
  }
  return message;
}