import React from 'react';
import { Button } from 'antd';
import WorkflowTable from '../results/WorkflowTable';
import { mockData } from '../../constants/mockData';
import { useTableSelection } from '../../hooks/useTableSelection';

const ResultsPanel = () => {
  const { selectedRowKeys, rowSelection } = useTableSelection();

  return (
    <div className="space-y-4 col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Results</h3>
        <div className="flex space-x-2">
          <Button type="link" className="text-red-600 p-0 text-xs">Clear</Button>
          <Button type="link" className="text-red-600 p-0 text-xs">Select all</Button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded bg-white">
        <WorkflowTable 
          data={mockData}
          rowSelection={rowSelection}
          showPagination={true}
          size="small"
        />
      </div>
    </div>
  );
};

export default ResultsPanel;