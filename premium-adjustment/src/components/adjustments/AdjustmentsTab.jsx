import React from 'react';
import SearchPanel from './SearchPanel';
import SelectPanel from './SelectPanel';
import ResultsPanel from './ResultsPanel';

const AdjustmentsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
      <div className="p-6 border-b border-gray-200" style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
        <h2 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
          Adjustments
        </h2>
        
        <div 
          className="grid grid-cols-4 gap-8"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 2fr', // This creates 3 columns: Search, Select, Results (2x wide)
            gap: '32px',
            alignItems: 'start'
          }}
        >
          <SearchPanel />
          <SelectPanel />
          <ResultsPanel />
        </div>
      </div>
    </div>
  );
};

export default AdjustmentsTab;