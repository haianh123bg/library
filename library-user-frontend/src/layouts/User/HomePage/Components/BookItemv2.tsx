export const BookItemv2 = () => {
    return (
        <div className="item">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover">
                            <img src="images/books/img-10.jpg" alt="image description" />
                        </div>
                    </div>
                    <div className="tg-hovercontent">
                        <div className="tg-description">
                            <p>
                                Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua
                                enim adia minim veniam, quis nostrud.
                            </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">Category: Adventure, Fun</strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                            <span className="tg-stars">
                                <span />
                            </span>
                        </div>
                    </div>
                </figure>
                <div className="tg-postbookcontent">
                    <div className="tg-booktitle">
                        <h3>
                            <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                    </div>
                    <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Sunshine Orlando</a>
                    </span>
                    <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                    </a>
                </div>
            </div>
        </div>
    );
};
