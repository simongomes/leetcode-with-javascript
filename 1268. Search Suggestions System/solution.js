var suggestedProducts = function (products, searchWord) {
  if (!searchWord) return [];
  const sortedProducts = products.sort();
  const result = [];
  let start = 0;
  let end = products.length - 1;
  for (let i = 1; i <= searchWord.length; i++) {
    const term = searchWord.substring(0, i);
    while (start < end) {
      if (sortedProducts[start].startsWith(term)) break;
      start++;
    }

    while (end > start) {
      if (sortedProducts[end].startsWith(term)) break;
      end--;
    }
    if (end - start > 2) {
      result.push(sortedProducts.slice(start, start + 3));
    } else {
      result.push(
        sortedProducts
          .slice(start, end + 1)
          .filter((product) => product.includes(term))
      );
    }
  }
  return result;
};
