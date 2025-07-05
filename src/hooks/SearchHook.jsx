import { useState, useMemo, useCallback } from 'react';

const SearchHook = (data, searchFields, debounceTime = 0) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) return data;

        return data.filter(item =>
            searchFields.some(field => {
                const fieldValue = item[field];
                return fieldValue &&
                    String(fieldValue).toLowerCase().includes(searchTerm.toLowerCase());
            })
        );
    }, [data, searchTerm, searchFields]);

    const handleSearch = useCallback((e) => {
        const value = e.target.value;
        setSearchTerm(value);
    }, []);

    return {
        searchTerm,
        setSearchTerm,
        handleSearch,
        filteredData
    };
};

export default SearchHook;