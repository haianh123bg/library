import { Link } from 'react-router-dom';
import BookModel from '../../../../models/BookModel';
import { StarsReview } from '../../../Utils/StarsReview';

export const PostBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <>
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover">
                            <Link to={`/productdetails/${props.book.id}`}>
                                <img src="/images/books/img-07.jpg" alt="image description" />
                            </Link>
                        </div>
                        <div className="tg-backcover">
                            <Link to={`/productdetails/${props.book.id}`}>
                                <img src="/images/books/img-07.jpg" alt="image description" />
                            </Link>
                        </div>
                    </div>
                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                        <i className="icon-heart" />
                        <span>add to wishlist</span>
                    </a>
                </figure>
                <div className="tg-postbookcontent">
                    <ul className="tg-bookscategories">
                        <li>
                            <a href="javascript:void(0);">{props.book.category?.name}</a>
                        </li>
                    </ul>
                    <div className="tg-booktitle">
                        <h3>
                            <Link to={`/productdetails/${props.book.id}`}>{props.book.name}</Link>
                        </h3>
                    </div>
                    <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">{props.book.author?.name}</a>
                    </span>

                    <StarsReview rating={props.book?.ratings_star ?? 3} size={16} key={props.book.id} />
                </div>
            </div>
        </>
    );
};
