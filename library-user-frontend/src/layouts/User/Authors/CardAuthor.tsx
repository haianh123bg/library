export const CardAuthor: React.FC<{ name?: string; total_book?: number; image?: string }> = (props) => {
    return (
        <div className="tg-author">
            <figure>
                <a href="javascript:void(0);">
                    <img src="/images/author/imag-03.jpg" alt="image description" />
                </a>
            </figure>
            <div className="tg-authorcontent">
                <h2>
                    <a href="javascript:void(0);">{props.name}</a>
                </h2>
                <span>{props.total_book} Published Books</span>
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
                </ul>
            </div>
        </div>
    );
};
