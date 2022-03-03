export const getSavedProductIds = () => {
    const savedProductIds = localStorage.getItem('saved_products')
      ? JSON.parse(localStorage.getItem('saved_products'))
      : [];
  
    return savedProductIds;
  };
  
  export const savedProductIds = (productIdArr) => {
    if (productIdArr.length) {
      localStorage.setItem('saved_products', JSON.stringify(productIdArr));
    } else {
      localStorage.removeItem('saved_products');
    }
  };
  
  export const removeProductId = (productId) => {
    const savedProductIds = localStorage.getItem('saved_product')
      ? JSON.parse(localStorage.getItem('saved_product'))
      : null;
  
    if (!savedProductIds) {
      return false;
    }
  
    const updatedSavedProductIds = savedProductIds?.filter((savedProductId) => savedProductId !== productId);
    localStorage.setItem('saved_products', JSON.stringify(updatedSavedProductIds));
  
    return true;
  };