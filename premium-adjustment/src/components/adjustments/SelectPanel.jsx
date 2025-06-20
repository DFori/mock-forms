import React from 'react';
import { Button } from 'antd';

const SelectPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Select</h3>
        <Button type="link" className="text-red-600 p-0 text-xs">
          Select all
        </Button>
      </div>
      <div className="min-h-96 border border-gray-200 rounded bg-gray-50">
        {/* Empty select area - could be populated with selectable items */}
      </div>
    </div>
  );
};

export default SelectPanel;