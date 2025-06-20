import React from 'react';
import SearchPanel from './SearchPanel';
import SelectPanel from './SelectPanel';
import ResultsPanel from './ResultsPanel';

const AdjustmentsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Adjustments</h2>
        
        <div className="grid grid-cols-4 gap-8">
          <SearchPanel />
          <SelectPanel />
          <ResultsPanel />
        </div>
      </div>
    </div>
  );
};

export default AdjustmentsTab;