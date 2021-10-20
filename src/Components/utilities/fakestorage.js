// Use local storage as temporary database
const addToStorage = id => {
    const exists = getStorage();
    let addmission_cart = {};
    if (!exists) {
      addmission_cart[id] = 1;
    }
    else {
      addmission_cart = JSON.parse(exists);
      if (addmission_cart[id]) {
        const newCount = addmission_cart[id] * 1;
        addmission_cart[id] = newCount;
      }
      else {
        addmission_cart[id] = 1;
      }
    }
    updateStorage(addmission_cart);
  }
  
  const getStorage = () => localStorage.getItem('addmission_cart');
  const updateStorage = cart => {
    localStorage.setItem('addmission_cart', JSON.stringify(cart));
  }
  
  const removeFromStorage = id => {
    const exists = getStorage();
    if (!exists) {
  
    }
    else {
      const addmission_cart = JSON.parse(exists);
      delete addmission_cart[id];
      updateStorage(addmission_cart);
    }
  }
  
  const getStoredAdmission = () => {
    const exists = getStorage();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheStorage = () => {
    localStorage.removeItem('addmission_cart');
  }
  
  export { addToStorage, removeFromStorage as deleteFromStorage, clearTheStorage, getStoredAdmission }
  