import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'adjustments', label: 'Adjustments' },
    { key: 'results', label: 'Results' }
  ];

  return (
    <div className="bg-red-600 px-4">
      <div className="flex space-x-8">
        {tabs.map(tab => (
          <div 
            key={tab.key}
            className={`text-white py-3 border-b-2 cursor-pointer ${
              activeTab === tab.key 
                ? 'border-white' 
                : 'border-transparent hover:border-white'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;