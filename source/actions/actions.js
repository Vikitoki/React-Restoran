

const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequest = () => {
  return {
    type: "MENU_REQUEST",
  };
};

const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  };
};

const deleteFromCart = (id) => {
  return {
    type: "DELETE_ITEM_FROM_CART",
    payload: id,
  };
};

export { menuLoaded, menuRequest, addedToCart ,deleteFromCart};
