import { Tabs } from "antd";
import { Button } from "antd";
import Tab2 from "./Tab2/Tab2";
import Tab1 from "./Tab1/Tab1";
const Tab = () => {
  return (
    <Tabs  defaultActiveKey="1">
      <Tabs.TabPane tab="Tổng quan" key="1">
        <Tab1/>
      </Tabs.TabPane>
      
      <Tabs.TabPane tab="Danh sách bệnh nhân" key="2">
        <Tab2/>
      </Tabs.TabPane>
    </Tabs>
  );
};
export default Tab;
