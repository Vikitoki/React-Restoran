import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import WithRestoService from "../hoc";
import { connect } from "react-redux";
import { menuLoaded, menuRequest, addedToCart } from "../../actions/actions";
import Spinner from "../spinner";

import "./menu-list.scss";

class MenuList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.menuRequest();

    const { RestoService } = this.props;
    RestoService.getMenuItems().then((res) =>
      console.log(this.props.menuLoaded(res))
    );
  }

  render() {
    const { menuItems, loading, addedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map((menuItem) => {
          return (
            <MenuListItem
              onAddToCart={() => addedToCart(menuItem.id)}
              menuItem={menuItem}
              key={menuItem.id}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    menuLoaded: (newMenu) => {
      dispatch(menuLoaded(newMenu));
    },
    menuRequest: () => {
      dispatch(menuRequest());
    },
    addedToCart: (id) => {
      dispatch(addedToCart(id));
    },
  };
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
);
