import { useEffect, useState } from 'react';
import { PaginationComponent } from '../../Utils/PaginationComponent';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { InnerBanner } from '../Components/InnerBanner';
import { PostBook } from '../HomePage/Components/PostBook';
import BookModel from '../../../models/BookModel';
import { SpinnerLoading } from '../../Utils/SprinnerLoading';
import AuthorModel from '../../../models/AuthorModel';

export const AuthorDetail = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoadingBooks, setIsLoadingBooks] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [author, setAuthor] = useState<AuthorModel>();
    const [isLoadingAuthor, setIsLoadingAuthor] = useState(true);

    const [pageSize, setPageSize] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNo, setPageNo] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    const authorId = window.location.pathname.split('/')[2];

    const paginate = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = `http://localhost:8000/authors/${authorId}/books`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            const responseData = responseJson.result;

            setTotalElements(responseData.totalElements);
            setTotalPages(responseData.totalPages);
            setCurrentPage(responseData.pageNo + 1);

            const responseDataBooks = responseData.content;
            const loadedBooks: BookModel[] = [];
            for (const key in responseDataBooks) {
                loadedBooks.push({
                    id: responseDataBooks[key].id,
                    name: responseDataBooks[key].name,
                    inventory_number: responseDataBooks[key].inventoryNumber,
                    ratings_star: responseDataBooks[key].ratingsStar ?? 0,

                    author: {
                        name: responseDataBooks[key].author.name,
                        id: responseDataBooks[key].author.id,
                    },
                    category: {
                        name: responseDataBooks[key].category.name,
                        id: responseDataBooks[key].category.id,
                    },
                });
            }
            setBooks(loadedBooks);
            setIsLoadingBooks(false);
        };
        fetchBooks().catch((error: any) => {
            setIsLoadingBooks(false);
            setHttpError(error);
        });
    }, []);

    useEffect(() => {
        const fetchAuthorById = async () => {
            const baseUrl: string = `http://localhost:8000/authors/${authorId}`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            const responseData = responseJson.result;
            const loadedAuthor: AuthorModel = {
                id: responseData.id,
                name: responseData.name,
                total_book: responseData.totalBook,
                image: responseData.image,
                description: responseData.description,
            };
            setAuthor(loadedAuthor);
            setIsLoadingAuthor(false);
        };
        fetchAuthorById().catch((error: any) => {
            setHttpError(error);
            setIsLoadingAuthor(false);
        });
    }, []);

    if (isLoadingBooks || isLoadingAuthor) {
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
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
            <Header />
            <InnerBanner currentPageTitle="Authors Title" pathLastTitle="Home" title="Authors" />
            {/*************************************
				Main Start
		**************************************/}
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
					Author Detail Start
			**************************************/}
                <div className="tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="tg-authordetail">
                                    <figure className="tg-authorimg">
                                        <img src="/images/author/imag-25.jpg" alt="image description" />
                                    </figure>
                                    <div className="tg-authorcontentdetail">
                                        <div className="tg-sectionhead">
                                            <h2>
                                                <span>{author?.total_book} Published Books</span>Scarlet Hawthorne
                                            </h2>
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
                                        <div className="tg-description">
                                            <p>{author?.description}</p>
                                        </div>
                                        <div className="tg-booksfromauthor">
                                            <div className="tg-sectionhead">
                                                <h2>Books of Scarlet</h2>
                                            </div>
                                            <div className="row">
                                                {books.map((book) => (
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                        <PostBook book={book} key={book.id} />
                                                    </div>
                                                ))}

                                                {totalPages !== 1 && (
                                                    <PaginationComponent
                                                        currentPage={currentPage}
                                                        paginate={paginate}
                                                        totalPages={totalPages}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
					Author Detail End
			**************************************/}
            </main>
            {/*************************************
				Main End
		**************************************/}

            <Footer />
        </div>
    );
};
