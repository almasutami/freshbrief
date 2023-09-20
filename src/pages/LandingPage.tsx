import React, { useState, useEffect } from "react";
import { Layout, Image, Button, Tooltip, Skeleton } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/styles/landing.css";
import dateFormat from "../utils/dateFormat";
import ArticleCard from "../components/ArticleCard";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const API_URL =
  "https://newsapi.org/v2/everything?q=car&from=2023-17-03&sortBy=publishedAt&apiKey=411f9903f002408aae8814d8f7635d9c";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000000",
  height: "12%",
  backgroundColor: "#f3f3f3",
  margin: "10px",
  borderRadius: "5px",
  // boxShadow: "2px 4px 10px 2px rgba(0,0,0,0.2)",
};

const imageContentStyle: React.CSSProperties = {
  textAlign: "center",
  width: "50%",
  height: "50%",
  color: "#fff",
  backgroundColor: "#fff",
  margin: "10px",
  padding: "10px 30px",
  borderRadius: "10px",
};

const imageStyle: React.CSSProperties = {
  borderRadius: "10px",
  maxHeight: "25rem",
  maxWidth: "30rem",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  width: "40%",
  height: "50%",
  padding: "10px",
  color: "#404040",
  backgroundColor: "#fff",
  margin: "10px",
  borderRadius: "10px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: "5%",
  color: "#000000",
  backgroundColor: "#fff",
  margin: "10px",
  borderRadius: "10px",
};

const containerStyle: React.CSSProperties = {
  height: "50%",
  color: "#fff",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  margin: "20px 0px",
  padding: "0px 12px",
  alignItems: "start",
};

const displayedArticleStyle: React.CSSProperties = {
  height: "75%",
  color: "#404040",
  backgroundColor: "#4A4A4A",
  padding: "20px 30px",
  borderRadius: "5px",
};

const cardContainerStyle: React.CSSProperties = {
  color: "#404040",
  backgroundColor: "inherit",
  fontFamily: "sans-serif",
  fontWeight: "bold",
};

const outerContainerStyle: React.CSSProperties = {
  height: "200vh",
  color: "#fff",
  backgroundColor: "#fff",
};

const blankSpace: React.CSSProperties = {
  width: "10%",
  color: "#fff",
  backgroundColor: "#fff",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "left",
  fontWeight: "900",
};

const cardStyle: React.CSSProperties = {
  width: "300px",
  height: "450px",
};

const buttonStyle: React.CSSProperties = {
  background: "#75767B",
};

const LandingPage: React.FC<{}> = () => {
  interface ArticleData {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  interface Article {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setArticleData(response.data);
    });
  }, []);

  //get newest article
  const newestArticle = articleData?.articles[0];

  //get some next articles
  const displayedArticles = [
    articleData?.articles[1],
    articleData?.articles[2],
    articleData?.articles[3],
    articleData?.articles[4],
  ];

  const renderContent = () => {
    if (!articleData) {
      return (
        <Layout style={containerStyle}>
          <Content>
            <Skeleton />
          </Content>
        </Layout>
      );
    } else {
      return (
        <Layout style={containerStyle}>
          <Content style={imageContentStyle}>
            <Image.PreviewGroup items={[newestArticle?.urlToImage || ""]}>
              <Image
                style={imageStyle}
                src={
                  newestArticle && newestArticle?.urlToImage
                    ? newestArticle?.urlToImage
                    : ""
                }
              />
            </Image.PreviewGroup>
          </Content>
          <Content style={contentStyle}>
            <div
              className="d-flex flex-row justify-content-between py-2"
              style={{ alignItems: "center" }}
            >
              <div style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                <h3>
                  {newestArticle && newestArticle?.author
                    ? newestArticle?.author.slice(0, 30)
                    : ""}{" "}
                  {newestArticle &&
                  newestArticle?.author &&
                  newestArticle?.author.length > 30
                    ? "..."
                    : ""}
                </h3>
              </div>
              <div style={{ fontFamily: "sans-serif", fontWeight: "light" }}>
                <h4>
                  {newestArticle && newestArticle?.publishedAt
                    ? dateFormat(newestArticle?.publishedAt)
                    : ""}
                </h4>
              </div>
            </div>
            <div className="py-1" style={titleStyle}>
              <h2>
                {newestArticle && newestArticle?.title
                  ? newestArticle?.title.slice(0, 75)
                  : ""}{" "}
                {newestArticle &&
                newestArticle?.title &&
                newestArticle?.title.length > 75
                  ? "..."
                  : ""}
              </h2>
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "light",
                  letterSpacing: "0.1em",
                  lineHeight: "1.5em",
                }}
              >
                {newestArticle && newestArticle?.content
                  ? newestArticle?.content
                    ? newestArticle?.content.slice(0, 150)
                    : ""
                  : ""}
                ...{" "}
                <p className="text-decoration-italic">
                  <Link
                    to={`${newestArticle?.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#404040",
                      textDecorationColor: "#404040",
                    }}
                  >
                    (Read More)
                  </Link>
                </p>
              </h4>
            </div>
          </Content>
          <Content style={blankSpace}></Content>
        </Layout>
      );
    }
  };

  return (
    <div className="px-3 py-4" style={outerContainerStyle}>
      <Layout style={outerContainerStyle}>
        <Header style={headerStyle}>
          <div className="px-3 py-4 d-flex flex-column gap-4">
            <h4
              style={{
                fontFamily: "helvetica",
                letterSpacing: "0.3em",
                fontWeight: "lighter",
              }}
            >
              WELCOME TO FRESHBRIEF
            </h4>
            <div className="d-flex flex-column gap-2">
              <h3
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Unlock knowledge, fuel curiosity, and dive into infinite worlds!
              </h3>
              <h3
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Explore, learn, and be inspired as we navigate the realm of
                ideas.
              </h3>
            </div>
          </div>
        </Header>
        {renderContent()}
        <Layout style={displayedArticleStyle}>
          <Content>
            <h3
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "#fff",
              }}
              className="mb-3"
            >
              Latest Articles
            </h3>
            <div style={cardContainerStyle}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <ArticleCard
                  article={displayedArticles[0] || null}
                  style={cardStyle}
                />
                <ArticleCard
                  article={displayedArticles[1] || null}
                  style={cardStyle}
                />
                <ArticleCard
                  article={displayedArticles[2] || null}
                  style={cardStyle}
                />
                <ArticleCard
                  article={displayedArticles[3] || null}
                  style={cardStyle}
                />
                <Link to="/articlelist" className="text-decoration-none">
                  <Tooltip title="Explore more">
                    <Button
                      style={buttonStyle}
                      type="primary"
                      shape="circle"
                      icon={<ArrowRightOutlined />}
                    />
                  </Tooltip>
                </Link>
              </div>
            </div>
          </Content>
        </Layout>
        <Footer style={footerStyle}>made by Almas Utami 2023</Footer>
      </Layout>
    </div>
  );
};

export default LandingPage;
