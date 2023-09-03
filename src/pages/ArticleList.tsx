import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Skeleton } from "antd";
import "../assets/styles/landing.css";
import ArticleCard from "../components/ArticleCard";
import { connect } from "react-redux";

const { Content } = Layout;

const displayedArticleStyle: React.CSSProperties = {
  height: "75%",
  color: "#404040",
  backgroundColor: "#fff",
  padding: "20px 30px",
  borderRadius: "5px",
};

const cardContainerStyle: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "inherit",
  fontFamily: "sans-serif",
  fontWeight: "bold",
};

const cardStyle: React.CSSProperties = {
  width: "300px",
  height: "450px",
  border: "1px solid #E8E8E8",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const ArticleList: React.FC<{ userGlobal: any }> = ({ userGlobal }) => {
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
  const keyword = userGlobal.searchArticle || "car";

  const API_URL = `https://newsapi.org/v2/everything?q=${keyword}&from=2023-08-03&sortBy=publishedAt&apiKey=e3be7690e20446209f8694c3b7c791b7`;

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setArticleData(response.data);
    });
  }, [API_URL]);

  const renderArticle = () => {
    if (articleData === null) {
      return <Skeleton />;
    }

    return articleData.articles.map((article, index) => {
      return <ArticleCard article={article} style={cardStyle} key={index} />;
    });
  };

  return (
    <div>
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
            Article list
          </h3>
          <div style={cardContainerStyle}>
            <div className="d-flex flex-wrap justify-content-between gap-4 align-items-center">
              {renderArticle()}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

function mapStateToProps(state: any) {
  return { userGlobal: state.user };
}

export default connect(mapStateToProps)(ArticleList);
