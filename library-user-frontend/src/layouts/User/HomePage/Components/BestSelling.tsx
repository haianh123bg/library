import React from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { PostBook } from './PostBook';
import BookModel from '../../../../models/BookModel';
export const BestSelling: React.FC<{ books: BookModel[] }> = (props) => {
    return (
        <div className="container" style={{ marginBottom: 10 }}>
            <div>
                <h2>Sách mượn nhiều</h2>
            </div>
            <hr />
            <div>
                <ScrollingCarousel>
                    {props.books.map((book) => (
                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                            <PostBook key={book.id} book={book} />
                        </div>
                    ))}
                </ScrollingCarousel>
            </div>
        </div>
    );
};
