import { useEffect, useState } from 'react';
import CategoryModel from '../../../../../models/CategoryModel';
import { SpinnerLoading } from '../../../../Utils/SprinnerLoading';
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const param = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            const baseUrl: string = 'http://localhost:8000/categories';

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();

            const responseData = responseJson.result;

            const loadedCategories: CategoryModel[] = [];

            for (const key in responseData) {
                loadedCategories.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    total_book: responseData[key].totalBooks,
                });
            }

            setCategories(
                loadedCategories.filter((category) => {
                    return category.total_book !== undefined && category.total_book > 0;
                }),
            );
            setIsLoadingCategories(false);
        };
        fetchCategories().catch((error: any) => {
            setIsLoadingCategories(false);
            setHttpError(error.message);
        });
    }, []);
    if (isLoadingCategories) {
        return <SpinnerLoading />;
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }
    return (
        <div className="tg-navigationarea">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav id="tg-nav" className="tg-nav">
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#tg-navigation"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                            </div>
                            <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                <ul>
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="javascript:void(0);">All Categories</a>
                                        <div className="mega-menu">
                                            <ul className="tg-themetabnav" role="tablist">
                                                {categories.map((category) => (
                                                    <li role="presentation" className="active">
                                                        <Link
                                                            to={`/products/${category.id}`}
                                                            aria-controls="artandphotography"
                                                            role="tab"
                                                            data-toggle="tab"
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tab-content tg-themetabcontent">
                                                <div role="tabpanel" className="tab-pane active" id="artandphotography">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="products.html">Tough As Nails</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Pro Grease Monkey</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Building Memories</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Bulldozer Boyz</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Build Or Leave On Us</a>
                                                                </li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">
                                                                View All
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="products.html">Consectetur adipisicing</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Aelit sed do eiusmod</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Tempor incididunt labore</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Dolore magna aliqua</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Ut enim ad minim</a>
                                                                </li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">
                                                                View All
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="products.html">Veniam quis nostrud</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Exercitation</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Laboris nisi ut aliuip</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Commodo conseat</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Duis aute irure</a>
                                                                </li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">
                                                                View All
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure>
                                                                <img src="images/img-01.png" alt="image description" />
                                                            </figure>
                                                            <div className="tg-textbox">
                                                                <h3>
                                                                    More Than<span>12,0657,53</span>Books Collection
                                                                </h3>
                                                                <div className="tg-description">
                                                                    <p>
                                                                        Consectetur adipisicing elit sed doe eiusmod
                                                                        tempor incididunt laebore toloregna aliqua enim.
                                                                    </p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">
                                                                    view all
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`menu-item-has-children ${
                                            param.pathname === '/home' ? 'current-menu-item' : ''
                                        }`}
                                    >
                                        <a href="javascript:void(0);">Home</a>
                                        <ul className="sub-menu">
                                            <li className="current-menu-item">
                                                <a href="index-2.html">Home V one</a>
                                            </li>
                                            <li>
                                                <a href="indexv2.html">Home V two</a>
                                            </li>
                                            <li>
                                                <a href="indexv3.html">Home V three</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`menu-item-has-children ${
                                            param.pathname === '/authors' ? 'current-menu-item' : ''
                                        }`}
                                    >
                                        <a href="javascript:void(0);">Authors</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/authors">Authors</Link>
                                            </li>
                                            <li>
                                                <a href="authordetail.html">Author Detail</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="products.html">Best Selling</a>
                                    </li>
                                    <li>
                                        <a href="products.html">Weekly Sale</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="javascript:void(0);">Latest News</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="newslist.html">News List</a>
                                            </li>
                                            <li>
                                                <a href="newsgrid.html">News Grid</a>
                                            </li>
                                            <li>
                                                <a href="newsdetail.html">News Detail</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contactus.html">Contact</a>
                                    </li>
                                    <li className="menu-item-has-children current-menu-item">
                                        <a href="javascript:void(0);">
                                            <i className="icon-menu" />
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="aboutus.html">Products</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="products.html">Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="productdetail.html">Product Detail</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="aboutus.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="404error.html">404 Error</a>
                                            </li>
                                            <li>
                                                <a href="comingsoon.html">Coming Soon</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
