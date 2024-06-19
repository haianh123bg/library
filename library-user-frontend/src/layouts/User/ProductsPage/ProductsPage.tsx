import { useEffect, useState } from 'react';
import CategoryModel from '../../../models/CategoryModel';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { InnerBanner } from '../Components/InnerBanner';
import { PostBook } from '../HomePage/Components/PostBook';
import { PaginationComponent } from '../../Utils/PaginationComponent';
import { SearchInput } from '../../Utils/SearchInput';
import { SpinnerLoading } from '../../Utils/SprinnerLoading';
import { MenuCategories } from './Components/MenuCategories';
import { MenuInstagram } from './Components/MenuInstagram';
import { MenuTrendingProduct } from './Components/MenuTrendingProduct';
import { RefineSearch } from './Components/RefineSearch';
import { TopBlogger } from './Components/TopBlogger';
import BookModel from '../../../models/BookModel';

export const ProductsPage = () => {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [title, setTitle] = useState<string | undefined>('All Books');

    const [books, setBooks] = useState<BookModel[]>([]);
    console.log(books);

    const [isLoadingBooks, setIsLoadingBooks] = useState(true);

    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [sortBy, setSortBy] = useState('id');
    const [sortDir, setSortDir] = useState('asc');
    const [totalElements, setTotalElements] = useState(10);
    const [isLastPage, setIsLastPage] = useState(false);
    const [categorySelected, setCategorySelected] = useState(0);

    const [keySearch, setKeySearch] = useState('');
    console.log('keySearch: ', keySearch);

    // Hàm xử lý khi giá trị của categories thay đổi
    const handleCategorySelected = (idCategory: number) => {
        setCategorySelected(idCategory);
        setKeySearch('');

        setCurrentPage(1);
    };

    // Hàm xử lý khi giá trị của select thay đổi
    const handleSelectChange = (size: number) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    // Hàm xử lý khi giá trị của select sortBy thay đổi
    const handleSelectSortByChange = (by: string) => {
        setSortBy(by);
        setCurrentPage(1);
    };

    const handleSearchKey = (key: string) => {
        setKeySearch(key);
        setCategorySelected(0);
    };

    const paginate = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            const baseUrl: string = `http://localhost:8000/categories`;

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

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl1: string = `http://localhost:8000/books/search`;
            const baseUrl2: string = `http://localhost:8000/categories/${categorySelected}/books`;
            let baseUrl = '';
            if (categorySelected == 0) {
                baseUrl = baseUrl1;
            } else {
                baseUrl = baseUrl2;
            }

            const url: string =
                baseUrl +
                `?pageNo=${
                    currentPage - 1
                }&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}&search=${keySearch}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();

            const responseData = responseJson.result?.content;
            const paginationData = responseJson.result;

            setTotalPages(paginationData.totalPages);
            setCurrentPage(paginationData.pageNo + 1);
            setTotalElements(paginationData.totalElements);
            setIsLastPage(paginationData.last);

            const loadedBooks: BookModel[] = [];
            for (const key in responseData) {
                loadedBooks.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    inventory_number: responseData[key].inventoryNumber,
                    ratings_star: responseData[key].ratingsStar ?? 0,

                    author: {
                        name: responseData[key].author.name,
                        id: responseData[key].author.id,
                    },
                    category: {
                        name: responseData[key].category.name,
                        id: responseData[key].category.id,
                    },
                });
            }
            if (categorySelected != 0) {
                setTitle(loadedBooks[0].category?.name);
            }
            if (keySearch) {
                setTitle(`Tìm kiếm theo ${keySearch}`);
            }
            if (!categorySelected && !keySearch) {
                setTitle('All Books');
            }
            setBooks(loadedBooks);
            setIsLoadingBooks(false);
            setHttpError(null);
        };
        fetchBooks().catch((error: any) => {
            setIsLoadingBooks(false);
            setHttpError(error.message);
            setBooks([]);
        });
    }, [pageSize, currentPage, sortBy, categorySelected, keySearch]);
    if (isLoadingCategories || isLoadingBooks) {
        return <SpinnerLoading />;
    }

    return (
        <>
            <Header />
            <InnerBanner currentPageTitle="Products" pathLastTitle="Home" title="All Products" />
            {/*************************************
    Main Start
**************************************/}
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
  News Grid Start
**************************************/}
                <div className="tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div id="tg-twocolumns" className="tg-twocolumns">
                                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                                    <div id="tg-content" className="tg-content">
                                        <div className="tg-products">
                                            <div className="tg-sectionhead">
                                                <h2>
                                                    <span style={{ fontSize: 30 }}>{title}</span>
                                                </h2>
                                            </div>

                                            <div className="tg-productgrid">
                                                {!httpError && (
                                                    <RefineSearch
                                                        isLastPage={isLastPage}
                                                        sortBy={sortBy}
                                                        handleSelectSortByChange={handleSelectSortByChange}
                                                        currentPage={currentPage}
                                                        totalElements={totalElements}
                                                        pageSize={pageSize}
                                                        handleSelectChange={handleSelectChange}
                                                    />
                                                )}

                                                {httpError && (
                                                    <div>
                                                        <h3>Không có quyển sách nào</h3>
                                                    </div>
                                                )}
                                                {books.map((book) => (
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                        <PostBook key={book.id} book={book} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {!httpError && (
                                        <PaginationComponent
                                            currentPage={currentPage}
                                            paginate={paginate}
                                            totalPages={totalPages}
                                        />
                                    )}
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                                    <aside id="tg-sidebar" className="tg-sidebar">
                                        <SearchInput handleSearchKey={handleSearchKey} />
                                        <MenuCategories
                                            categorySelected={categorySelected}
                                            handleCategorySelected={handleCategorySelected}
                                            categories={categories}
                                        />
                                        <MenuTrendingProduct />
                                        <MenuInstagram />
                                        <TopBlogger />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
  News Grid End
**************************************/}
            </main>
            {/*************************************
    Main End
**************************************/}
            <Footer />
        </>
    );
};
