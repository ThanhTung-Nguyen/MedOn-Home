import React, { useState } from "react";
import { Layout, Menu, Space } from "antd";
import {
  BankOutlined,
  UserOutlined,
  OrderedListOutlined,
  DashboardOutlined,
  NotificationOutlined,
  UsergroupAddOutlined,
  ReconciliationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Top from "../Header/Top";
import "./Sidebar.css";

const {Sider} = Layout;

const Sidebar= (props:any) => {
  
  return (
      <Sider
        style={{backgroundColor: "#FFFFFF", width: "240px" }}
        trigger={null}
        collapsible
        collapsed={props.conlao}
      >
        <Menu
          style={{
            paddingLeft: "0px",
            fontWeight: "bold", 
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              key: "1",
              icon: <BankOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Tài khoản",
            },
            {
              key: "3",
              icon: <OrderedListOutlined />,
              label: "Danh mục",
            },
            {
              key: "4",
              icon: <DashboardOutlined />,
              label: "Banner/Popup",
            },
            {
              key: "5",
              icon: <NotificationOutlined />,
              label: "Thông báo",
            },
            {
              key: "6",
              icon: <UsergroupAddOutlined />,
              label: "Bác sĩ",
            },
            {
              key: "7",
              icon: <ReconciliationOutlined />,
              label: "Quản lý lịch hẹn",
            },
            {
              key: "8",
              icon: <SettingOutlined />,
              label: "Thiết lập chung",
            },
          ]}
        />
      </Sider>
  );
};
export default Sidebar;