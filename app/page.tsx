import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenue sur le site officiel de Musilearn</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login">Se connecter</Link>
        <br />
        <Link href="/register">S'inscrire</Link>
      </div>
    </div>
  );
};

export default HomePage; 