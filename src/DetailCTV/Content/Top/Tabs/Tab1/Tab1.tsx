import { Tabs } from "antd";
import ButtonMid from "../../../Mid/MidButton";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import './Tab1.css'

interface DataType {
  key: string;
  tit: string;
  detail: string;
}
const columnstb1: ColumnsType<DataType> = [
  {
    title: "Thông tin cơ bản",
    colSpan: 2,
    dataIndex: "tit",
    width: 500,
  },
  {
    title: "",
    colSpan: 0,
    dataIndex: "detail",
  },
];
const datatb1: DataType[] = [
  {
    key: "1",
    tit: "Họ và tên",
    detail: "Nguyễn Thanh Tùng",
  },
  {
    key: "2",
    tit: "Số điện thoại",
    detail: "0972714199",
  },
  {
    key: "3",
    tit: "Ngày sinh",
    detail: "03/12/1999",
  },
  {
    key: "4",
    tit: "Giới tính",
    detail: "Nam",
  },
  {
    key: "5",
    tit: "Email",
    detail: "huyenmta2711@gmail.com",
  },
  {
    key: "6",
    tit: "Tỉnh thành/Quận Huyện/Phường xã",
    detail: "Hà Nội, Bắc Từ Liêm,Cổ Nhuế 1",
  },
  {
    key: "7",
    tit: "Địa chỉ cụ thể",
    detail: "100 Cổ Nhuế",
  },
];

const columnstb2: ColumnsType<DataType> = [
  {
    title: "Thông tin chuyên môn",
    colSpan: 2,
    dataIndex: "tit",
    width: 500,
  },
  {
    title: "Phone",
    colSpan: 0,
    dataIndex: "detail",
  },
];
const datatb2: DataType[] = [
  {
    key: "1",
    tit: "Chuyên khoa",
    detail: "Tai Mũi Hong",
  },
  {
    key: "2",
    tit: "Chức danh",
    detail: "Bác Sĩ Chuyên Khoa II",
  },
  
];

const columnstb3: ColumnsType<DataType> = [
  {
    title: "Thông tin tài khoản",
    colSpan: 2,
    dataIndex: "tit",
    width: 500,
  },
  {
    title: "Phone",
    colSpan: 0,
    dataIndex: "detail",
  },
];
const datatb3: DataType[] = [
  {
    key: "1",
    tit: "Trạng thái tài khoản",
    detail: "Đã duyệt CTV",
  },
  {
    key: "2",
    tit: "Mã cộng tác viên",
    detail: "12577",
  },
  {
    key: "2",
    tit: "Mật khẩu",
    detail: "12345",
  },
  
];
const Tab1 = () => {
  return (
    <div style={{backgroundColor: "#FAFAFA", marginTop: -16}}>
      <ButtonMid />
      <Table className="tbTongquan" columns={columnstb1} dataSource={datatb1} bordered pagination={false} />
      <Table className="tbTongquan" columns={columnstb2} dataSource={datatb2} bordered pagination={false} />
      <Table className="tbTongquan" columns={columnstb3} dataSource={datatb3} bordered pagination={false} />
    </div>
  );
};
export default Tab1;
