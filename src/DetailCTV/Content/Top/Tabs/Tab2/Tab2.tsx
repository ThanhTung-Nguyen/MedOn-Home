import Icon from "@ant-design/icons";
import { Image } from "antd";
import { Tabs } from "antd";
import { Form, Input } from "antd";
import { Layout, Menu } from "antd";
import {Typography} from "antd";
import Tab from "../Tabs";
import ntung from "./image/ThanhTung_Nguyen.jpg";

const {Title} = Typography;
const { Header, Sider, Content } = Layout;
const Tab2 = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#fff" }}>
        <Form layout="inline">
          <Form.Item label="Họ tên" name={"name"}>
            <Input placeholder="Nhập họ tên" />
          </Form.Item>
          <Form.Item label="Số điện thoại" name={"sdt"}>
            <Input placeholder="Nhập SĐT" />
          </Form.Item>
        </Form>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item key="1" >
              <div style={{display: "flex"}}>
              <div><Image src={ntung} width={46} height={46} /></div>
              <div>
                  <p>Nguyễn Tùng</p>
              </div></div>
            </Menu.Item>
            <Menu.Item key="2">
            <span>Shopify</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>Shopify</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>Shopify</span>
            </Menu.Item>
            <Menu.Item key="5">
              <span>Shopify</span>
            </Menu.Item>
            <Menu.Item key="6">
              <span>Shopify</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};
export default Tab2;
