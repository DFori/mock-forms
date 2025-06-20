import { useState } from 'react';

export const useTableSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return {
    selectedRowKeys,
    rowSelection,
    setSelectedRowKeys
  };
};