import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './Finance.css';

function Finance() {
  const [selectedWallet, setSelectedWallet] = useState(null); // State for selected wallet
  const [transactions, setTransactions] = useState({}); // Store transactions for each wallet

  // Function to handle wallet selection
  const handleSelectWallet = (wallet) => {
    setSelectedWallet(wallet);
  };

  // Function to handle adding a transaction
  const handleAddTransaction = (walletName, transaction) => {
    setTransactions(prev => ({
      ...prev,
      [walletName]: [...(prev[walletName] || []), transaction]
    }));
  };

  return (
    <div className="finance-container">
      <Sidebar onSelectWallet={handleSelectWallet} />
      <Navbar />
      <div className="content">
        {selectedWallet ? (
          <div className="wallet-details">
            <h1>{selectedWallet.name}</h1>
            <p>Balance: {selectedWallet.value}</p>

            {/* Buttons for actions */}
            <div className="actions">
              <button onClick={() => setSelectedWallet(prev => ({ ...prev, action: 'menabung' }))}>Menabung</button>
              <button onClick={() => setSelectedWallet(prev => ({ ...prev, action: 'transaksi' }))}>Transaksi</button>
            </div>

            {/* Show list of transactions */}
            <div className="transactions-list">
              {transactions[selectedWallet.name]?.map((transaction, index) => (
                <div key={index} className="transaction-item">
                  <p>{transaction.name}</p>
                  <p>Amount: {transaction.amount}</p>
                  <p>Date: {transaction.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Select a wallet to view details.</p>
        )}
      </div>

      {/* Popup Modals */}
      {selectedWallet?.action === 'menabung' && (
        <SavingPopup wallet={selectedWallet} onAdd={amount => {
          setSelectedWallet(prev => ({ ...prev, value: prev.value + amount }));
          setSelectedWallet(null); // Close the popup
        }} />
      )}
      {selectedWallet?.action === 'transaksi' && (
        <TransactionPopup wallet={selectedWallet} onAdd={transaction => {
          handleAddTransaction(selectedWallet.name, transaction);
          setSelectedWallet(null); // Close the popup
        }} />
      )}
    </div>
  );
}

export default Finance;
