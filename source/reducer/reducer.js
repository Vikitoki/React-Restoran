const initialState = {
  menu: [],
  loading: true,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUEST":
      return {
        ...state,
        menu: state.menu,
        loading: false,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload,
        cartItem = state.menu.find((item) => item.id === id),
        newItem = {
          title: cartItem.title,
          price: cartItem.price,
          url: cartItem.url,
          id: cartItem.id,
        };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "DELETE_ITEM_FROM_CART":
      const idx = action.payload,
        newArray = state.items.filter((item) => item.id !== idx);
      return {
        ...state,
        items: [...newArray],
      };
    default:
      return state;
  }
};

export default reducer;
