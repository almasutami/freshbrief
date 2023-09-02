import React, { useState } from "react";
import { Col, Row, Input, Button, Tooltip } from "antd";
import "../assets/styles/navbar.css";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const buttonStyle: React.CSSProperties = {
  background: "#75767B",
};

interface Props {
  name: string;
}

interface InputProps {
  style?: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}

const ThisInput = (props: InputProps) => {
  const { onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    onChange(inputValue);
    console.log(inputValue);
  };

  return (
    <Input {...props} onChange={handleChange} placeholder="Search article..." />
  );
};

const NavBar: React.FC<Props> = () => {
  const [value, setValue] = useState("");

  return (
    <div className="px-4 py-3 align-middle text-light bg-dark">
      <>
        <Row style={{ alignItems: "center" }}>
          <Col span={3}>
            <Link
              to="/"
              className="align-middle text-white text-decoration-none"
            >
              <h3 className="m-0">FRESHBRIEF</h3>
            </Link>
          </Col>
          <Col span={5}></Col>
          <Col span={8}>
            <div className="d-flex flex-row gap-2" style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <ThisInput onChange={setValue} value={value} />
              </div>
              <div>
                <Link to="/articlelist" className="text-decoration-none">
                  <Tooltip title="search">
                    <Button
                      style={buttonStyle}
                      type="primary"
                      shape="circle"
                      icon={<SearchOutlined />}
                    />
                  </Tooltip>
                </Link>
              </div>
            </div>
          </Col>
          <Col span={5}></Col>
          <Col span={3}></Col>
        </Row>
      </>
    </div>
  );
};

export default NavBar;
