import React from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const SearchPanel = () => {
  const searchFields = [
    { label: 'SICS ID', value: '9-1000506', options: [{ value: '9-1000506', label: '9-1000506' }] },
    { label: 'Reinsurer', value: 'Toa Reinsurance Com...', options: [{ value: 'toa', label: 'Toa Reinsurance Com...' }] },
    { label: 'Broker', value: 'Willis Towers Watson, ...', options: [{ value: 'willis', label: 'Willis Towers Watson, ...' }] },
    { label: 'Year', value: '2025', options: [{ value: '2025', label: '2025' }] },
    { label: 'Cedent', value: 'Zurich Insurance Grou...', options: [{ value: 'zurich', label: 'Zurich Insurance Grou...' }] },
    { label: 'Currency', value: 'USD', options: [{ value: 'USD', label: 'USD' }] },
    { label: 'Main Class Of Business', value: 'AviationADA', options: [{ value: 'aviation', label: 'AviationADA' }] },
    { label: 'MTG Number', value: 'MTG66', options: [{ value: 'mtg66', label: 'MTG66' }] }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Search</h3>
      
      <div className="space-y-3">
        {searchFields.map((field, index) => (
          <div key={index}>
            <label className="block text-xs text-gray-500 mb-1">{field.label}</label>
            <Select
              defaultValue={field.value}
              className="w-full"
              size="small"
            >
              {field.options.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-2 pt-4">
        <Button size="small" className="text-gray-600">Clear</Button>
        <Button type="primary" size="small" className="bg-red-600 border-red-600">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchPanel;