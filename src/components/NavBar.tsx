import React from "react";
import { Col, Row, Input, Button, Tooltip } from "antd";
import "../assets/styles/navbar.css";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchArticle } from "../redux/actions/user";
const buttonStyle: React.CSSProperties = {
  background: "#75767B",
};

interface MyProps {
  searchArticle: any;
}
interface MyState {
  searchArticle: string;
}

class NavBar extends React.Component<MyProps, MyState> {
  state = {
    searchArticle: "",
  };

  inputHandler = (event: any) => {
    const value = event.target.value as string;

    this.setState(() => ({
      searchArticle: value,
    }));
  };

  searchProductHandler = () => {
    console.log("search clicked", this.state.searchArticle);
    this.props.searchArticle(this.state);
  };

  render() {
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
                  <Input
                    onChange={this.inputHandler}
                    placeholder="Search article..."
                  />
                </div>
                <div>
                  <Link to="/articlelist" className="text-decoration-none">
                    <Tooltip title="search">
                      <Button
                        onClick={this.searchProductHandler}
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
  }
}

const mapStateToProps = (state: any) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  searchArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
