import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CodeBlock = ({
    code,
    language = 'jsx',
    showLineNumbers = true,
    title = '',
    className = ''
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`rounded-lg overflow-hidden ${className}`}>
            {title && (
                <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm font-mono flex justify-between items-center">
                    <span>{title}</span>
                </div>
            )}
            <div className="relative">
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 bg-opacity-50 text-white hover:bg-opacity-70 transition-colors z-10"
                    title="Copy to clipboard"
                >
                    {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
                </button>
                <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto text-sm">
                    <code className={`language-${language}`}>
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;