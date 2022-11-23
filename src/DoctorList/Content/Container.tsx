import { Layout, Space } from "antd";
import Selectall from "./Selectall/Selectall";
import Search from "./Search";
import Date from "./Date/Date";
import TbDoctorList from "./Table/Table";
// import TableTest from "./Table/Table";
import Page from "./Page";

const { Content } = Layout;

const Container = () => {
  return (
    <div>
      <Content
        className=""
        style={{
          minWidth: "1200px",
          minHeight: "933px",
          backgroundColor: "#FAFAFA",
        }}
      >
        <div style={{padding: "18px 25px"}}>
        <Space style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Search />
          <Selectall />
          <Date />
        </Space>
        </div>
        <div><TbDoctorList/></div>
        <div style={{padding: "64px 0 51px 0"}}><Page /></div>
      </Content>
    </div>
  );
}
export default Container;
