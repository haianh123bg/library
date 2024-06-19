import { useEffect, useState } from 'react';
import { PostBook } from './PostBook';
import BookModel from '../../../../models/BookModel';
import { SpinnerLoading } from '../../../Utils/SprinnerLoading';

export const NewReleaseStart = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoadingBooks, setIsLoadingBooks] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = `http://localhost:8000/books/getthreebookrelease`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const responseData = responseJson.result;
            const loadedBooks: BookModel[] = [];
            for (const key in responseData) {
                loadedBooks.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    ratings_star: responseData[key].ratingsStar,
                    category: {
                        id: responseData[key].category.id,
                        name: responseData[key].category.name,
                    },
                    author: {
                        id: responseData[key].author.id,
                        name: responseData[key].author.name,
                    },
                });
            }
            setBooks(loadedBooks);
            setIsLoadingBooks(false);
        };
        fetchBooks().catch((error: any) => {
            setHttpError(error);
            setIsLoadingBooks(false);
        });
    }, []);

    if (isLoadingBooks) {
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
        <>
            {/*************************************
					New Release Start
			**************************************/}
            <section className="tg-sectionspace tg-haslayout">
                <div className="container">
                    <div className="row">
                        <div className="tg-newrelease">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="tg-sectionhead">
                                    <h2>
                                        <span>Taste The New Spice</span>New Release Books
                                    </h2>
                                </div>
                                <div className="tg-description">
                                    <p>
                                        Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip
                                        commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor
                                        fugiat nulla pariatur cepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                                <div className="tg-btns">
                                    <a className="tg-btn tg-active" href="javascript:void(0);">
                                        View All
                                    </a>
                                    <a className="tg-btn" href="javascript:void(0);">
                                        Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="row">
                                    <div className="tg-newreleasebooks">
                                        {books.map((book) => (
                                            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-4 hidden-md">
                                                <PostBook key={book.id} book={book} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*************************************
					New Release End
			**************************************/}
        </>
    );
};
