import React from 'react';

interface ShoppingCartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCartSidebar: React.FC<ShoppingCartSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <button
        className="text-gray-600 hover:text-gray-800 absolute top-4 right-4"
        onClick={onClose}
      >
        Close
      </button>
      {/* Shopping cart content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <p>Items will be displayed here.</p>
      </div>
    </div>
  );
};

export default ShoppingCartSidebar;
