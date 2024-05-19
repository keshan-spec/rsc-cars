import React from 'react'

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ children, ...props }) => {
    const { className } = props;

    return (
        <button
        {...props}
            className={`bg-red-700 hover:bg-red-800 text-black py-2 px-4 uppercase font-bold ${className}`}
        >
            {children}
        </button>
    );
}