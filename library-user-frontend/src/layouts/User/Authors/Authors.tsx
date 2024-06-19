import { useEffect, useState } from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { InnerBanner } from '../Components/InnerBanner';
import { CardAuthor } from './CardAuthor';
import AuthorModel from '../../../models/AuthorModel';
import { SpinnerLoading } from '../../Utils/SprinnerLoading';
import { Link } from 'react-router-dom';

export const Authors = () => {
    const [authors, setAuthors] = useState<AuthorModel[]>([]);
    const [isLoadingAuthors, setIsLoadingAuthors] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchAuthors = async () => {
            const baseUrl: string = `http://localhost:8000/authors`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();

            const responseData = responseJson.result;

            const loadedAuthors: AuthorModel[] = [];

            for (const key in responseData) {
                loadedAuthors.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    total_book: responseData[key].totalBook,
                });
            }
            setAuthors(
                loadedAuthors.filter((author) => {
                    return author.total_book !== undefined && author.total_book > 0;
                }),
            );
            setIsLoadingAuthors(false);
        };
        fetchAuthors().catch((error: any) => {
            setIsLoadingAuthors(false);
            setHttpError(error.message);
        });
    }, []);
    if (isLoadingAuthors) {
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
            <InnerBanner currentPageTitle="Authors" pathLastTitle="Home" title="Authors" />
            {/*************************************
				Main Start
		**************************************/}
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
					Authors Start
			**************************************/}
                <div className="tg-authorsgrid">
                    <div className="container">
                        <div className="row">
                            <div className="tg-authors">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-sectionhead">
                                        <h2>
                                            <span>Strong Minds Behind Us</span>Most Popular Authors
                                        </h2>
                                    </div>
                                </div>
                                {authors.map((author) => (
                                    <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                        <Link to={`/authors/${author.id}`}>
                                            <CardAuthor
                                                key={author.id}
                                                image={author.image}
                                                name={author.name}
                                                total_book={author.total_book}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
					Authors End
			**************************************/}
            </main>
            {/*************************************
				Main End
		**************************************/}

            <Footer />
        </div>
    );
};
