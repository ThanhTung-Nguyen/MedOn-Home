import { UserOutlined, QrcodeOutlined, AntCloudOutlined } from "@ant-design/icons";
const Special = () => {
    return(
        <div style={{ display: "flex", alignItems: "center"}}>
            <div className="special">
              <QrcodeOutlined />
              Mã CTV: 12577
            </div>
            <div style={{padding: "0 33px"}}>
              <UserOutlined />
              Bác sĩ chuyên khoa II
            </div>
            <div className="special">
              <AntCloudOutlined />
              Chuyên khoa: Tai Mũi Hong, Nội khoa
            </div>
          </div>
    )
}
export default Special;