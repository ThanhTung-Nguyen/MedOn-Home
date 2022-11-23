import ntung from "./image/ThanhTung_Nguyen.jpg";
import { Image } from "antd";
import ThreeBtn from "./Button/Button";
import { Layout } from "antd";
import Tab from "./Tabs/Tabs";
import Special from "./Special/Special";
import Name from "./Name/Name";
import Medical from "./Medical/Med";
import { Col, Row } from 'antd';
import "./Top.css";

const Top = () => {
  return (
    <div className="Content">
      <div className="topContent">
        <Image width={190} height={190} src={ntung} />
        <div className="nameDetail">
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
      
            }}
          >
            <Col span={23}><Name /></Col>
            
            <Col span={1}>
              <ThreeBtn />
            </Col>
          </Row>
          <Special />
          <Medical />
        </div>
      </div>
      <Tab />
    </div>
  );
};
export default Top;
