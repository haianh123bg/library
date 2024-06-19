export const PaginationComponent: React.FC<{ currentPage: number; totalPages: number; paginate: any }> = (props) => {
    const pageNumbers = [];

    if (props.currentPage === 1) {
        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    } else if (props.currentPage > 1) {
        if (props.currentPage >= 3) {
            pageNumbers.push(props.currentPage - 2);
            pageNumbers.push(props.currentPage - 1);
        } else {
            pageNumbers.push(props.currentPage - 1);
        }

        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.paginate(1)}>
                    <a className="page-link" href="#">
                        First Page
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => props.paginate(number)}
                        className={'page-item ' + (props.currentPage === number ? 'active' : '')}
                    >
                        <a className="page-link" href="#">
                            {number}
                        </a>
                    </li>
                ))}
                <li className="page-item" onClick={() => props.paginate(props.totalPages)}>
                    <a className="page-link" href="#">
                        Last Page
                    </a>
                </li>
            </ul>
        </nav>
    );
};
