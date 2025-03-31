import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
            <h1 className="text-2xl font-bold">MusiLearn</h1>
            <div className="flex gap-4">
                <Link href="/login" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Se connecter</Link>
                <Link href="/register" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">S&#39;inscrire</Link>
            </div>
        </header>
    );
};

export default Header;
