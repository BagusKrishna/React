import React, { useState } from 'react';
import './AddWalletModal.css';

function AddWalletModal({ onCancel, onAdd }) {
  const [walletName, setWalletName] = useState('');
  const [walletValue, setWalletValue] = useState('');

  const handleAdd = () => {
    if (walletName && walletValue) {
      onAdd(walletName, walletValue);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Wallet</h2>
        <input
          type="text"
          placeholder="Wallet Name"
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Wallet Value"
          value={walletValue}
          onChange={(e) => setWalletValue(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="ok-button" onClick={handleAdd}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default AddWalletModal;
