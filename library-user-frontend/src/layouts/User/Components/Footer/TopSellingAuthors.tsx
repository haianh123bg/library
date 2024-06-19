import { useEffect, useState } from 'react';
import AuthorModel from '../../../../models/AuthorModel';
import { SpinnerLoading } from '../../../Utils/SprinnerLoading';

export const TopSellingAuthors = () => {
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
                    total_book: responseData[key].totalBook,
                });
            }
            setAuthors(loadedAuthors.slice(0, 3));
            console.log(loadedAuthors);

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
        <div className="tg-footercol tg-widget tg-widgettopsellingauthors">
            <div className="tg-widgettitle">
                <h3>Top Selling Authors</h3>
            </div>
            <div className="tg-widgetcontent">
                <ul>
                    {authors.map((author) => (
                        <li>
                            <figure>
                                <a href="javascript:void(0);">
                                    <img src="/images/author/imag-09.jpg" alt="image description" />
                                </a>
                            </figure>
                            <div className="tg-authornamebooks">
                                <h4>
                                    <a href="javascript:void(0);">{author.name}</a>
                                </h4>
                                <p>{author.total_book} Published Books</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
