import React from 'react';
import { Table, Button } from 'antd';
import { 
  LeftOutlined, 
  RightOutlined, 
  DoubleLeftOutlined, 
  DoubleRightOutlined 
} from '@ant-design/icons';
import { tableColumns } from '../../constants/tableColumns';

const WorkflowTable = ({ 
  data, 
  rowSelection, 
  showPagination = false, 
  size = 'small' 
}) => {
  const PaginationComponent = () => (
    <div className="flex justify-between items-center p-4 border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <Button size="small" icon={<DoubleLeftOutlined />} disabled />
        <Button size="small" icon={<LeftOutlined />} disabled />
        <Button size="small" type="primary" className="bg-blue-500">1</Button>
        <Button size="small" icon={<RightOutlined />} disabled />
        <Button size="small" icon={<DoubleRightOutlined />} disabled />
      </div>
      <span className="text-sm text-gray-600">{data.length} - {data.length} of {data.length} items</span>
    </div>
  );

  const AdjustmentsPagination = () => (
    <div className="flex justify-between items-center p-2 border-t border-gray-200 bg-gray-50">
      <div className="flex items-center space-x-1">
        <Button size="small" icon={<DoubleLeftOutlined />} disabled />
        <Button size="small" icon={<LeftOutlined />} disabled />
        <Button size="small" type="primary" className="bg-blue-500">1</Button>
        <Button size="small" icon={<RightOutlined />} disabled />
        <Button size="small" icon={<DoubleRightOutlined />} disabled />
      </div>
      <span className="text-xs text-gray-600">{data.length} - {data.length} of {data.length} items</span>
    </div>
  );

  return (
    <>
      <div className="overflow-x-auto">
        <Table
          columns={tableColumns}
          dataSource={data}
          rowSelection={rowSelection}
          pagination={false}
          size={size}
          className="workflow-table"
          scroll={{ x: 1500 }}
        />
      </div>
      
      {showPagination && (size === 'small' ? <AdjustmentsPagination /> : <PaginationComponent />)}
    </>
  );
};

export default WorkflowTable;