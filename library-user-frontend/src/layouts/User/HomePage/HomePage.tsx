import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';

import { FeaturedItemStart } from './Components/FeaturedItemStart';
import { NewReleaseStart } from './Components/NewReleaseStart';
import { InnerBanner } from '../Components/InnerBanner';
import { useEffect, useState } from 'react';
import BookModel from '../../../models/BookModel';
import { SpinnerLoading } from '../../Utils/SprinnerLoading';
import { BestSelling } from './Components/BestSelling';

export const HomePage = () => {
    const [bestsellingBooks, setBestSellingBooks] = useState<BookModel[]>([]);
    const [isLoadingBestSellingBooks, setIsLoadingBestSellingBooks] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // Lấy số sách được mượn nhiều nhất
    useEffect(() => {
        const fetchBestSellingBooks = async () => {
            const baseUrl: string = `http://localhost:8000/books?pageSize=10`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const responseData = responseJson.result?.content;

            const loadBestSellingBooks: BookModel[] = [];
            for (const key in responseData) {
                loadBestSellingBooks.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    ratings_star: responseData[key].ratingsStar,
                    category: {
                        id: responseData[key].category?.id,
                        name: responseData[key].category?.name,
                    },
                    author: {
                        id: responseData[key].author?.id,
                        name: responseData[key].author?.name,
                    },
                });
            }
            setBestSellingBooks(loadBestSellingBooks);
            setIsLoadingBestSellingBooks(false);
        };
        fetchBestSellingBooks().catch((error: any) => {
            setIsLoadingBestSellingBooks(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoadingBestSellingBooks) {
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
            <InnerBanner currentPageTitle="Home" title="Home" />
            <BestSelling books={bestsellingBooks} />
            <NewReleaseStart />
            <FeaturedItemStart />
            <Footer />
        </div>
    );
};
