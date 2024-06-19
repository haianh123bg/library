import { Link } from 'react-router-dom';

export const InnerBanner: React.FC<{ title: string; pathLastTitle?: string; currentPageTitle: string }> = (props) => {
    return (
        <>
            {/*************************************
				Inner Banner Start
		**************************************/}
            <div
                className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner"
                data-z-index={-100}
                data-appear-top-offset={600}
                data-parallax="scroll"
                data-image-src="images/parallax/bgparallax-07.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>{props.title}</h1>
                                <ol className="tg-breadcrumb">
                                    <li>
                                        <Link to="/home">home</Link>
                                    </li>
                                    {props.pathLastTitle && <li className="tg-active">{props.currentPageTitle}</li>}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*************************************
				Inner Banner End
		**************************************/}
        </>
    );
};
