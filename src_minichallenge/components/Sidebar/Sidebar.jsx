import React, { useState } from 'react';
import './Sidebar.css';
import AddWalletModal from '../AddWalletModal/AddWalletModal'; // Modal Component

function Sidebar({ onSelectWallet }) {
  const [wallets, setWallets] = useState([]); // State for wallet list
  const [showModal, setShowModal] = useState(false); // State to show modal

  // Function to add new wallet
  const addWallet = (name, value) => {
    setWallets([...wallets, { name, value: parseFloat(value) }]);
    setShowModal(false); // Close modal after adding
  };

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-pic"></div>
        <span className="username">John Doe</span>
      </div>

      {/* Wallet Section */}
      <div className="wallet-section">
        <span className="wallet-title">Wallet</span>
        <button className="add-wallet-button" onClick={() => setShowModal(true)}>+</button>
      </div>

      {/* Wallet List */}
      <div className="wallet-list">
        {wallets.map((wallet, index) => (
          <div key={index} className="wallet-item" onClick={() => onSelectWallet(wallet)}>
            <span>{wallet.name}</span>
            <span>{wallet.value}</span>
          </div>
        ))}
      </div>

      {/* Add Wallet Modal */}
      {showModal && <AddWalletModal onCancel={() => setShowModal(false)} onAdd={addWallet} />}
    </div>
  );
}

export default Sidebar;
