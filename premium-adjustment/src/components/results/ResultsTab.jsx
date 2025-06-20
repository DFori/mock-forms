import React from 'react';
import FiltersSection from './FiltersSection';
import WorkflowTable from './WorkflowTable';
import { mockData } from '../../constants/mockData';
import { useTableSelection } from '../../hooks/useTableSelection';

const ResultsTab = () => {
  const { selectedRowKeys, rowSelection } = useTableSelection();

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Workflow Results</h2>
        <FiltersSection />
      </div>

      <WorkflowTable 
        data={mockData}
        rowSelection={rowSelection}
        showPagination={true}
      />
    </div>
  );
};

export default ResultsTab;