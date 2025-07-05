import { useState } from 'react';


const EntriesHook = (defaultValue = '10', options = ['10', '25', '50', '100']) => {
    const [entriesPerPage, setEntriesPerPage] = useState(defaultValue);

    const handleEntriesChange = (e) => {
        setEntriesPerPage(e.target.value);
    };

    return {
        entriesPerPage,
        setEntriesPerPage,
        handleEntriesChange,
        entriesOptions: options
    };
};

export default EntriesHook;