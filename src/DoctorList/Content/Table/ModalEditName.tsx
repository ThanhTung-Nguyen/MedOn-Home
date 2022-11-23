import { useState } from "react";
import { Button,Space, Input, Modal,List, Typography } from "antd";

const ModalEditName = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return(
        <>
        <List.Item className="list">
            {/* <Typography.Text mark>[ITEM]</Typography.Text> {item} */}
            <Button onClick={showModal}>Edit</Button>
            <Modal
              title="Edit Name"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              closable={true}
              
            >
              <Input type="text"/>
            </Modal>
            <Button
              onClick={(e) => {
                // handleDel(index);
              }}
            >
              Delete
            </Button>
          </List.Item>
        </>
    )
}
export default ModalEditName;