const getProductList = async () => {
  try {
    const response = await fetch("/data/product.json");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default getProductList;
