const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestedProducts = function (products, searchWord) {
  const sortedProducts = products.sort();
  const result = [];
  for (let i = 0; i < searchWord.length - 1; i++) {
    const term = searchWord.substring(0, i);
    console.log(term, i);
  }
};

suggestedProducts(products, searchWord);
