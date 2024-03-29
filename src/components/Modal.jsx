import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen h-screen px-4">
                <div className="fixed inset-0 transition-opacity">
                    <div
                        className="absolute inset-0 bg-gray-500 opacity-75"
                        onClick={onClose}
                    />
                </div>
                <div className="bg-white rounded-lg  overflow-hidden  shadow-xl transform transition-all sm:max-h-screen max-w-screen-md">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between pb-4">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <button
                                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                                onClick={onClose}
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;