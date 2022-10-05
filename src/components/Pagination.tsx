import React from 'react';
import Styles from "./Pagination.styled";
import 'bootstrap/dist/css/bootstrap.min.css'

type FooterProps = {
    cardsPerPage: number,
    totalCards: number,
    paginate: Function
}

const Pagination = (props: FooterProps) => {
    const { cardsPerPage, totalCards, paginate } = props;
    const pageNumbers: number[] = [];

    for(let i=1; i <= Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Styles className='footer-wrapper'>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={(e) => {e.preventDefault(); paginate(number)}} href="/" className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))

                    }
                </ul>
            </nav>
        </Styles>
    );
}

export default Pagination;