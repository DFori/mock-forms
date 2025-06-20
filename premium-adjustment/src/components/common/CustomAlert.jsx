import React from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';

const CustomAlert = ({ show, onClose, message, type = 'error' }) => {
  if (!show) return null;

  return (
    <Alert
      message={message}
      type={type}
      icon={<ExclamationCircleOutlined />}
      closable
      onClose={onClose}
      closeIcon={<CloseOutlined />}
      className="fixed bottom-4 right-4 max-w-md z-50"
    />
  );
};

export default CustomAlert;