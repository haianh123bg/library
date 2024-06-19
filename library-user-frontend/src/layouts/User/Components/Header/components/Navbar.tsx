export const Navbar = () => {
    return (
        <div className="tg-topbar">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul className="tg-addnav">
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="icon-envelope" />
                                    <em>Contact</em>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="icon-question-circle" />
                                    <em>Help</em>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown tg-themedropdown tg-currencydropdown">
                            <a
                                href="javascript:void(0);"
                                id="tg-currenty"
                                className="tg-btnthemedropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="icon-earth" />
                                <span>Currency</span>
                            </a>
                            <ul className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-currenty">
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>£</i>
                                        <span>British Pound</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>$</i>
                                        <span>Us Dollar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>€</i>
                                        <span>Euro</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tg-userlogin">
                            <figure>
                                <a href="javascript:void(0);">
                                    <img src="/images/users/img-01.jpg" alt="image description" />
                                </a>
                            </figure>
                            <span>Hi, John</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
