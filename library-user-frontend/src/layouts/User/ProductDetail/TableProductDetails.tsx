import BookModel from '../../../models/BookModel';

export const TableProductDetails: React.FC<{ book?: BookModel }> = (props) => {
    return (
        <>
            <div className="tg-sectionhead">
                <h2>Product Details</h2>
            </div>
            <ul className="tg-productinfo">
                <li>
                    <span>Pages:</span>
                    <span>{props.book?.page_number} pages</span>
                </li>
                <li>
                    <span>Dimensions:</span>
                    <span>
                        {props.book?.size} mm | {props.book?.weight} g
                    </span>
                </li>
                <li>
                    <span>Publication Date:</span>
                    <span>{props.book?.publishing_year}</span>
                </li>
                <li>
                    <span>Publisher:</span>
                    <span>{props.book?.publisher?.name}</span>
                </li>
                <li>
                    <span>Language:</span>
                    <span>{props.book?.language}</span>
                </li>
                <li>
                    <span>Illustrations note:</span>
                    <span>b&amp;w images thru-out; 1 x 16pp colour plates</span>
                </li>
                <li>
                    <span>ISBN10:</span>
                    <span>1234567890</span>
                </li>
                <li>
                    <span>ISBN13:</span>
                    <span>1234567890000</span>
                </li>
                <li>
                    <span>Other Fomate:</span>
                    <span>CD-Audio, Paperback, E-Book</span>
                </li>
            </ul>
            <div className="tg-alsoavailable">
                <figure>
                    <img src="/images/img-02.jpg" alt="image description" />
                    <figcaption>
                        <h3>Also Available in:</h3>
                        <ul>
                            <li>
                                <span>CD-Audio $18.30</span>
                            </li>
                            <li>
                                <span>Paperback $20.10</span>
                            </li>
                            <li>
                                <span>E-Book $11.30</span>
                            </li>
                        </ul>
                    </figcaption>
                </figure>
            </div>
        </>
    );
};
