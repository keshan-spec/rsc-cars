import { useRouter } from 'next/navigation';
import React from 'react'

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loading?: boolean;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ children, ...props }) => {
    const router = useRouter();

    const { className, loading } = props;

    const disabledClass = loading ? "opacity-50 cursor-not-allowed bg-red-800" : "bg-red-700 hover:bg-red-800";

    return (
        <button
            {...props}
            disabled={loading}
            onClick={() => {
                router.push('#value-car');
            }}
            className={`text-black py-2 px-4 uppercase font-bold text-sm ${className} ${disabledClass}`}
        >
            {children} {loading && <i className="fas fa-spinner fa-spin ml-1" />}
        </button>
    );
}