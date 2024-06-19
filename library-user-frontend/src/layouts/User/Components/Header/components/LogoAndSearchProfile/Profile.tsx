export const Profile = () => {
    return (
        <div className="tg-wishlistandcart">
            <div className="dropdown tg-themedropdown tg-wishlistdropdown">
                <a
                    href="javascript:void(0);"
                    id="tg-wishlisst"
                    className="tg-btnthemedropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="tg-themebadge">3</span>
                    <i className="icon-heart" />
                    <span>Wishlist</span>
                </a>
                <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
                    <div className="tg-description">
                        <p>No products were added to the wishlist!</p>
                    </div>
                </div>
            </div>
            <div className="dropdown tg-themedropdown tg-minicartdropdown">
                <a
                    href="javascript:void(0);"
                    id="tg-minicart"
                    className="tg-btnthemedropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="tg-themebadge">3</span>
                    <i className="icon-cart" />
                    <span>$123.00</span>
                </a>
                <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
                    <div className="tg-minicartbody">
                        <div className="tg-minicarproduct">
                            <figure>
                                <img src="/images/products/img-01.jpg" alt="image description" />
                            </figure>
                            <div className="tg-minicarproductdata">
                                <h5>
                                    <a href="javascript:void(0);">Our State Fair Is A Great Function</a>
                                </h5>
                                <h6>
                                    <a href="javascript:void(0);">$ 12.15</a>
                                </h6>
                            </div>
                        </div>
                        <div className="tg-minicarproduct">
                            <figure>
                                <img src="/images/products/img-02.jpg" alt="image description" />
                            </figure>
                            <div className="tg-minicarproductdata">
                                <h5>
                                    <a href="javascript:void(0);">Bring Me To Light</a>
                                </h5>
                                <h6>
                                    <a href="javascript:void(0);">$ 12.15</a>
                                </h6>
                            </div>
                        </div>
                        <div className="tg-minicarproduct">
                            <figure>
                                <img src="/images/products/img-03.jpg" alt="image description" />
                            </figure>
                            <div className="tg-minicarproductdata">
                                <h5>
                                    <a href="javascript:void(0);">Have Faith In Your Soul</a>
                                </h5>
                                <h6>
                                    <a href="javascript:void(0);">$ 12.15</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="tg-minicartfoot">
                        <a className="tg-btnemptycart" href="javascript:void(0);">
                            <i className="fa fa-trash-o" />
                            <span>Clear Your Cart</span>
                        </a>
                        <span className="tg-subtotal">
                            Subtotal: <strong>35.78</strong>
                        </span>
                        <div className="tg-btns">
                            <a className="tg-btn tg-active" href="javascript:void(0);">
                                View Cart
                            </a>
                            <a className="tg-btn" href="javascript:void(0);">
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
