import { useState } from 'react';
import Button from '@components/ui/buttons/Button';
import { FiEye, FiCode, FiCopy, FiCheck } from 'react-icons/fi';

const CodePreviewToggle = ({
    previewContent,
    codeContent,
    defaultView = 'preview'
}) => {
    const [activeView, setActiveView] = useState(defaultView);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeContent)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy code: ', err);
            });
    };

    return (
        <div className="overflow-hidden">
            <div className="flex justify-end border-b border-gray-200">
                <Button
                    onClick={() => setActiveView('preview')}
                    className={`flex items-center px-3 py-2 text-xs font-medium transition-colors duration-200 ${activeView === 'preview'
                        ? 'bg-deep-blue text-white'
                        : 'bg-transparent text-gray-600 hover:text-gray-800'
                        } rounded-tl-lg focus:outline-none`}
                >
                    <FiEye className="mr-1 w-3.5 h-3.5" />
                    Preview
                </Button>
                <Button
                    onClick={() => setActiveView('code')}
                    className={`flex items-center px-3 py-2 text-xs font-medium transition-colors duration-200 ${activeView === 'code'
                        ? 'bg-deep-blue text-white'
                        : 'bg-transparent text-gray-600 hover:text-gray-800'
                        } rounded-tr-lg focus:outline-none`}
                >
                    <FiCode className="mr-1 w-3.5 h-3.5" />
                    Code
                </Button>
            </div>

            <div className="p-4">
                {activeView === 'preview' ? (
                    <div className="preview-content">{previewContent}</div>
                ) : (
                    <div className="code-content relative">
                        <Button
                            onClick={handleCopy}
                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1.5 rounded focus:outline-none"
                            aria-label={copied ? "Copied" : "Copy code"}
                        >
                            {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                        </Button>
                        <pre className="bg-deep-blue p-4 rounded-lg overflow-x-auto text-sm font-mono text-white">
                            {codeContent}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodePreviewToggle;