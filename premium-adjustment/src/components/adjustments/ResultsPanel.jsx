import React from 'react';
import { Button } from 'antd';
import WorkflowTable from '../results/WorkflowTable';
import { mockData } from '../../constants/mockData';
import { useTableSelection } from '../../hooks/useTableSelection';

const ResultsPanel = () => {
  const { selectedRowKeys, rowSelection } = useTableSelection();

  return (
    <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 className="text-sm font-medium text-gray-700" style={{ fontSize: '14px', fontWeight: '500' }}>Results</h3>
        <div className="flex space-x-2" style={{ display: 'flex', gap: '8px' }}>
          <Button type="link" className="text-red-600 p-0 text-xs" style={{ color: '#dc2626', padding: '0', fontSize: '12px' }}>
            Clear
          </Button>
          <Button type="link" className="text-red-600 p-0 text-xs" style={{ color: '#dc2626', padding: '0', fontSize: '12px' }}>
            Select all
          </Button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white' }}>
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