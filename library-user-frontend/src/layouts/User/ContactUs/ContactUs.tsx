import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { InnerBanner } from '../Components/InnerBanner';

export const ContactUs = () => {
    return (
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
            <Header />
            <InnerBanner currentPageTitle="Contact Us" pathLastTitle="Home" title="Contact Us" />
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
					Contact Us Start
			**************************************/}
                <div className="tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="tg-contactus">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-sectionhead">
                                        <h2>
                                            <span>Say Hello!</span>Get In Touch With Us
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div id="tg-locationmap" className="tg-locationmap tg-map" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <form className="tg-formtheme tg-formcontactus">
                                        <fieldset>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    className="form-control"
                                                    placeholder="First Name*"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    className="form-control"
                                                    placeholder="Last Name*"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Last Name*"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control"
                                                    placeholder="Subject (optional)"
                                                />
                                            </div>
                                            <div className="form-group tg-hastextarea">
                                                <textarea placeholder="Comment" defaultValue={''} />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="tg-btn tg-active">
                                                    Submit
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className="tg-contactdetail">
                                        <div className="tg-sectionhead">
                                            <h2>Get In Touch With Us</h2>
                                        </div>
                                        <ul className="tg-contactinfo">
                                            <li>
                                                <i className="icon-apartment" />
                                                <address>
                                                    Suit # 07, Rose world Building, Street # 02, AT246T Manchester
                                                </address>
                                            </li>
                                            <li>
                                                <i className="icon-phone-handset" />
                                                <span>
                                                    <em>0800 12345 - 678 - 89</em>
                                                    <em>+4 1234 - 4567 - 67</em>
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
                                                        <a href="mailto:support@domain.com">support@domain.com</a>
                                                    </em>
                                                    <em>
                                                        <a href="mailto:info@domain.com">info@domain.com</a>
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
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
					Contact Us End
			**************************************/}
            </main>
            <Footer />
        </div>
    );
};
