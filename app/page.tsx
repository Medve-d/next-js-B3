import Header from '../app/components/ui/header';
import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header />
      <h1>Bienvenue sur le site officiel de Musilearn</h1>
      <div style={{ marginTop: '20px' }}>
      <Link href="/login" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Se connecter</Link>
      <Link href="/register" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">S&#39;inscrire</Link>
      </div>
    </div>
  );
};

export default HomePage; 