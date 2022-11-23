import { Button, Space } from "antd";
import './Button.css'
const ThreeBtn = () => {
    return(
        <div>
            <Space>
                <Button className="btn" type="primary">Duyệt</Button>
                <Button className="btn lock" type="primary">Khoá</Button>
                <Button className="btn spam" type="primary">Spam</Button>
              </Space>
        </div>
    )
}
export default ThreeBtn;