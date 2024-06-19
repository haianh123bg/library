import { TopSellingAuthors } from './TopSellingAuthors';

export const Footer = () => {
    return (
        <>
            {/*************************************
    Footer Start
**************************************/}
            <footer id="tg-footer" className="tg-footer tg-haslayout">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29799.165278048822!2d105.8056500635986!3d20.996819236054456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad4028885acb%3A0x7e4f5ff9f303aa66!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gdMawIHbhuqVuIHbDoCDEkeG6p3UgdMawIFdlWW8!5e0!3m2!1svi!2s!4v1718770860011!5m2!1svi!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="tg-footerarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <ul className="tg-clientservices">
                                    <li className="tg-devlivery">
                                        <span className="tg-clientserviceicon">
                                            <i className="icon-rocket" />
                                        </span>
                                        <div className="tg-titlesubtitle">
                                            <h3>Fast Delivery</h3>
                                            <p>Shipping Worldwide</p>
                                        </div>
                                    </li>
                                    <li className="tg-discount">
                                        <span className="tg-clientserviceicon">
                                            <i className="icon-tag" />
                                        </span>
                                        <div className="tg-titlesubtitle">
                                            <h3>Open Discount</h3>
                                            <p>Offering Open Discount</p>
                                        </div>
                                    </li>
                                    <li className="tg-quality">
                                        <span className="tg-clientserviceicon">
                                            <i className="icon-leaf" />
                                        </span>
                                        <div className="tg-titlesubtitle">
                                            <h3>Eyes On Quality</h3>
                                            <p>Publishing Quality Work</p>
                                        </div>
                                    </li>
                                    <li className="tg-support">
                                        <span className="tg-clientserviceicon">
                                            <i className="icon-heart" />
                                        </span>
                                        <div className="tg-titlesubtitle">
                                            <h3>24/7 Support</h3>
                                            <p>Serving Every Moments</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tg-threecolumns">
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                    <div className="tg-footercol">
                                        <strong className="tg-logo">
                                            <a href="javascript:void(0);">
                                                <img
                                                    src="/Images/logo.png"
                                                    alt="image description"
                                                    style={{ maxHeight: 200, maxWidth: 200 }}
                                                />
                                            </a>
                                        </strong>
                                        <ul className="tg-contactinfo">
                                            <li>
                                                <i className="icon-apartment" />
                                                <address>Minh Khai, Bắc Từ Liêm - Hà Nội</address>
                                            </li>
                                            <li>
                                                <i className="icon-phone-handset" />
                                                <span>
                                                    <em>+84 793 355 880</em>
                                                    <em>0921 843 966</em>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="icon-clock" />
                                                <span>Serving 7 Days A Week From 9am - 5pm</span>
                                            </li>
                                            <li>
                                                <i className="icon-envelope" />
                                                <span>
                                                    <em>
                                                        <a href="mailto:nguyenngochaianh@gmail.com">
                                                            nguyenngochaianh@gmail.com
                                                        </a>
                                                    </em>
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="tg-socialicons">
                                            <li className="tg-facebook">
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li className="tg-twitter">
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li className="tg-linkedin">
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>
                                            <li className="tg-googleplus">
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li className="tg-rss">
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-rss" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                    <div className="tg-footercol tg-widget tg-widgetnavigation">
                                        <div className="tg-widgettitle">
                                            <h3>Shipping And Help Information</h3>
                                        </div>
                                        <div className="tg-widgetcontent">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">Terms of Use</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Terms of Sale</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Returns</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Privacy</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Cookies</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Our Affiliates</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Vision &amp; Aim</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">Our Story</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Meet Our Team</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Join Our Team</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <TopSellingAuthors />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <h4>Signup Newsletter!</h4>
                                <h5>Consectetur adipisicing elit sed do eiusmod tempor incididunt.</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <form className="tg-formtheme tg-formnewsletter">
                                    <fieldset>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter Your Email ID"
                                        />
                                        <button type="button">
                                            <i className="icon-envelope" />
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-footerbar">
                    <a id="tg-btnbacktotop" className="tg-btnbacktotop" href="javascript:void(0);">
                        <i className="icon-chevron-up" />
                    </a>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span className="tg-paymenttype">
                                    <img src="/images/paymenticon.png" alt="image description" />
                                </span>
                                <span className="tg-copyright">2024 All Rights Reserved By © Book Library</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*************************************
    Footer End
**************************************/}
        </>
    );
};
