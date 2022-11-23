import { Table, Badge } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./Table.css";

// interface DataType {
//   id: number;
//   name: string;
//   mail: string;
//   sdt: string;
//   sex: string;
//   date: string;

//   createDate: string;
//   registrationDate: string;
//   approvalDate: string;
// }
// const data: DataType[] = [
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
//   {
//     id: 12577,
//     name: "Nguyễn Thanh Tùng",
//     mail: "ntung.it312@gmail.com",
//     sdt: "0972714199",
//     sex: "Nam",
//     date: "03/12/1999",
//     createDate: "17/10/2022",
//     registrationDate: "31/10/2022",
//     approvalDate: "15/11/2022",
//   },
// ];

// const columns: ColumnsType<DataType> = [
//   {
//     title: "Mã CTV",
//     dataIndex: "id",
//     width: 90,
//     key: "id",
//     fixed: "left",
//   },
//   {
//     title: "Họ và tên",
//     dataIndex: "name",
//     width: 160,
//     key: "name",
//     fixed: "left",
//   },
//   {
//     title: "Email",
//     width: 180,
//     dataIndex: "mail",
//     key: "mail",
//   },
//   {
//     title: "Số điện thoại",
//     width: 120,
//     dataIndex: "sdt",
//     key: "sdt",
//   },
//   {
//     title: "Giới tính",
//     width: 90,
//     dataIndex: "sex",
//     key: "sex",
//   },
//   {
//     title: "Ngày sinh",
//     width: 110,
//     dataIndex: "date",
//     key: "date",
//   },
//   {
//     title: "Trạng thái",
//     dataIndex: "status",
//     key: "status",
//     render: () => (
//       <span>
//         Chờ duyệt CTV <Badge status="success" />
//       </span>
//     ),
//   },
//   {
//     title: "Ngày tạo tài khoản",
//     dataIndex: "createDate",
//     key: "createDate",
//   },
//   {
//     title: "Ngày đăng ký CTV",
//     dataIndex: "registrationDate",
//     key: "registrationDate",
//   },
//   {
//     title: "Ngày duyệt CTV",
//     dataIndex: "approvalDate",
//     key: "approvalDate",
//   },
// ];
// const TbDoctorList = () => {
//   return (
//     <Table
//       className="tbDoctorList"
//       dataSource={data}
//       columns={columns}
//       pagination={false}
//       scroll={{ x: 1400 }}
//     />
//   );
// };
// export default TbDoctorList;

import { Button, Space, Input, Modal } from "antd";
import { Form } from "antd";
import { Divider, List, Typography } from "antd";
import { useState, useEffect } from "react";
import ModalEditName from "./ModalEditName";
// import Addarr from "./Addarr";

const name: string[] = [
  "Nguyễn Thanh Tùng",
  "Nguyễn Đức An",
  "Nguyễn Quốc Anh",
  "Hoàng Xuân Huy",
];

const TableTest = () => {
  const [todolist, setTodolist] = useState<string[]>(name);
  const [forminput, setForminput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [editInput, setEditInput] = useState("");

  const handleEdit = (index: number) => {
    setSelectedIndex(index);
    setEditInput(todolist[index]);
    showModal();
  }

  // khi dùng các hàm sử lý cho các thuộc tính bắt đầu bằng ON, vd: Onclick, onChange,... nên đặt tên hàm bắt đầu với chứ handle
  // trường hợp hàm sử dụng từ khoá this thì không nên sử dụng () =>
  const handleAdd = () => {
    todolist.push(forminput);
    console.log(todolist);
    //React chỉ nhận diện được sự thay đổi của mảng khi trạng thái là 1 mảng mới
    setTodolist([...todolist]);
  };

  const handleDel = (index: number) => {
    todolist.splice(index, 1);
    setTodolist([...todolist]);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    todolist[selectedIndex] = editInput;
    setTodolist([...todolist]);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h1>Tạo danh sách tên</h1>
      {/* cho phép người dùng cập nhật trạng thái, muốn cập nhập trạng thái bắt buộc phải có thuộc tính onChange củta input  */}
      <Input
        id="todoInput"
        type="text"
        placeholder="Nhập tên..."
        value={forminput}
        onChange={(e) => {
          setForminput(e.target.value);
        }}
      />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
      
      <Modal
        title="Edit Name"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={true}
      >
        <Input type="text" value={editInput} onChange={(e) => {
          setEditInput(e.target.value);
        }}/>
      </Modal>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={todolist}
        renderItem={(item, index) => (
          <List.Item className="list">
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
            <Button onClick={() => {handleEdit(index)}}>Edit</Button>
            <Button
              onClick={(e) => {
                handleDel(index);
              }}
            >
              Delete
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};
export default TableTest;
