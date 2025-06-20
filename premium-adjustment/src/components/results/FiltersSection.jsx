import React from 'react';
import { DatePicker, Button } from 'antd';
import { CalendarOutlined, ExportOutlined } from '@ant-design/icons';

const FiltersSection = () => {
  const statusButtons = [
    { label: 'Success', color: 'green' },
    { label: 'Failure', color: 'red' },
    { label: 'In Progress', color: 'blue' }
  ];

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">From</span>
          <DatePicker 
            placeholder="Select date" 
            className="w-36"
            suffixIcon={<CalendarOutlined />}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">To</span>
          <DatePicker 
            placeholder="Select date" 
            className="w-36"
            suffixIcon={<CalendarOutlined />}
          />
        </div>
        <Button 
          type="primary" 
          className="bg-red-600 border-red-600 hover:bg-red-700"
          icon={<ExportOutlined />}
        >
          Export To Excel
        </Button>
      </div>
      
      <div className="flex space-x-2">
        {statusButtons.map(button => (
          <Button 
            key={button.label}
            size="small" 
            className={`text-${button.color}-600 border-${button.color}-600`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSection;