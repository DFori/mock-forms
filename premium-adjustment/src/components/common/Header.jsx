import React from 'react';
import { Layout, Dropdown, Button, Avatar, Menu } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const premiumAdjustmentsMenu = (
    <Menu>
      <Menu.Item key="option1">Option 1</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="!bg-red-700 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="text-white font-bold text-lg">JE</div>
        <Dropdown overlay={premiumAdjustmentsMenu} trigger={['click']}>
          <Button type="text" className="text-white border-none">
            PREMIUM ADJUSTMENTS <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      
      <Dropdown overlay={userMenu} trigger={['click']}>
        <div className="flex items-center cursor-pointer">
          <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
          <span className="text-white">Test User</span>
          <DownOutlined className="text-white ml-1" />
        </div>
      </Dropdown>
    </AntHeader>
  );
};

export default Header;