import React from "react";
import { Layout } from "antd";
import "../assets/styles/landing.css";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#404040",
  height: "15%",
  backgroundColor: "#F5F5F5",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  width: "50%",
  color: "#fff",
  backgroundColor: "#108ee9",
  margin: "10px",
  borderRadius: "10px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: "50%",
  color: "#fff",
  backgroundColor: "#7dbcea",
  margin: "10px",
  borderRadius: "10px",
};

const containerStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
};

const outerContainerStyle: React.CSSProperties = {
  height: "150vh",
  color: "#fff",
  backgroundColor: "#fff",
};

const LandingPage: React.FC<{}> = () => {
  return (
    <div className="px-3 py-4" style={outerContainerStyle}>
      <Layout style={outerContainerStyle}>
        <Header style={headerStyle}>
          <div className="p-3 d-flex flex-column">
            <h3>Welcome to FRESHBRIEF!</h3>
            <h2>
              Unlock Knowledge, Fuel Curiosity, and Dive into Infinite Worlds –
              Your Gateway to Thought-Provoking Articles.
            </h2>
            <h2>
              Explore, Learn, and Be Inspired as We Navigate the Realm of Ideas.
            </h2>
          </div>
        </Header>
        <Layout style={containerStyle}>
          <Content style={contentStyle}>Content</Content>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
};

export default LandingPage;
