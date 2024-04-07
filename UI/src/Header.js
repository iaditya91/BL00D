import React from 'react';

function Header() {
  return (
    <header className="bg-green-500 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">BLOOD</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Support</li>
          <li>My Account</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;