import React from "react";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

const Arrow = (props: any) => {
    return(
        <>
        {React.createElement(
            props.conlao ? CaretRightOutlined : CaretLeftOutlined,
            {
              className: "trigger",
              onClick: () => props.conlai(!props.conlao),
            }
          )}
          </>
    )
}
export default Arrow;