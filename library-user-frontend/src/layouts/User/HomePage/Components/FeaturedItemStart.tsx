export const FeaturedItemStart = () => {
    return (
        <>
            {/*************************************
					Featured Item Start
			**************************************/}
            <section className="tg-bglight tg-haslayout">
                <div className="container">
                    <div className="row">
                        <div className="tg-featureditm">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                                <figure>
                                    <img src="images/img-02.png" alt="image description" />
                                </figure>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="tg-featureditmcontent">
                                    <div className="tg-themetagbox">
                                        <span className="tg-themetag">featured</span>
                                    </div>
                                    <div className="tg-booktitle">
                                        <h3>
                                            <a href="javascript:void(0);">Things To Know About Green Flat Design</a>
                                        </h3>
                                    </div>
                                    <span className="tg-bookwriter">
                                        By: <a href="javascript:void(0);">Farrah Whisenhunt</a>
                                    </span>
                                    <span className="tg-stars">
                                        <span />
                                    </span>
                                    <div className="tg-priceandbtn">
                                        <span className="tg-bookprice">
                                            <ins>$23.18</ins>
                                            <del>$30.20</del>
                                        </span>
                                        <a className="tg-btn tg-btnstyletwo tg-active" href="javascript:void(0);">
                                            <i className="fa fa-shopping-basket" />
                                            <em>Add To Basket</em>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*************************************
					Featured Item End
			**************************************/}
        </>
    );
};
