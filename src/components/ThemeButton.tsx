import React from 'react'

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loading?: boolean;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ children, ...props }) => {
    const { className, loading } = props;

    const disabledClass = loading ? "opacity-50 cursor-not-allowed bg-red-800" : "bg-red-700 hover:bg-red-800";

    return (
        <button
            {...props}
            disabled={loading}
            className={`text-black py-2 px-4 uppercase font-bold ${className} ${disabledClass}`}
        >
            {children} {loading && <i className="fas fa-spinner fa-spin ml-1" />}
        </button>
    );
}