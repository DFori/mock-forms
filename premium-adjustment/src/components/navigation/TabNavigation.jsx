import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'adjustments', label: 'Adjustments' },
    { key: 'results', label: 'Results' }
  ];

  return (
    <div 
      className="bg-red-600 px-4"
      style={{ backgroundColor: '#dc2626', padding: '0 16px' }}
    >
      <div className="flex space-x-8" style={{ display: 'flex', gap: '32px' }}>
        {tabs.map(tab => (
          <div 
            key={tab.key}
            className={`text-white py-3 border-b-2 cursor-pointer ${
              activeTab === tab.key 
                ? 'border-white' 
                : 'border-transparent hover:border-white'
            }`}
            style={{
              color: 'white',
              padding: '12px 0',
              borderBottom: activeTab === tab.key ? '2px solid white' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease'
            }}
            onClick={() => setActiveTab(tab.key)}
            onMouseEnter={(e) => {
              if (activeTab !== tab.key) {
                e.target.style.borderBottomColor = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.key) {
                e.target.style.borderBottomColor = 'transparent';
              }
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;