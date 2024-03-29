import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <Link to = {`/book/${bookId}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 hidden sm:block">
        <img src={image} className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"/>
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">January 26, 2021</span>
            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
        </div>
    </Link>
    );
};

export default BookCard;