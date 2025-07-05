import React, { useState, useEffect } from 'react';
import Pagination from '@pagination/Pagination';
import Button from '@buttons/Button';
import Container from '@components/ui/container/Container';
import { FiDownload } from 'react-icons/fi';

const Table = ({
    title,
    titleHighlight,
    columns,
    data,
    renderActions,
    containerClassName = "p-5",
    itemsPerPage = 10,

}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedData(data.slice(startIndex, endIndex));
    }, [currentPage, data, itemsPerPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container className={containerClassName}>
            {(title || titleHighlight) && (
                <h2 className="text-3xl font-semibold mb-4 border-l-4 border-deep-blue pl-2">
                    {titleHighlight && <span className="font-bold">{titleHighlight}</span>}{' '}
                    {title}
                </h2>
            )}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 font-bold">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 text-left text-sm font-bold text-gray-500"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-layout divide-y divide-gray-200">
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => {
                                    if (column.key === 'action' && renderActions) {
                                        return (
                                            <td key={colIndex} className="px-4 py-3 text-sm">
                                                {renderActions(row, rowIndex)}
                                            </td>
                                        );
                                    }

                                    if (column.render) {
                                        return (
                                            <td key={colIndex} className="px-4 py-3 text-sm">
                                                {column.render(row[column.key], row)}
                                            </td>
                                        );
                                    }

                                    return (
                                        <td key={colIndex} className="px-4 py-3 text-sm text-gray-900">
                                            {row[column.key]}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center gap-6 mt-4">
                <div className="w-full">
                    {totalPages > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            totalItems={data.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Table;