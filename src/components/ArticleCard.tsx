import React from "react";
import { Card, Image, Layout, Skeleton } from "antd";
import "../assets/styles/card.css";
import dateFormat from "../utils/dateFormat";
import { Link } from "react-router-dom";
const { Content } = Layout;

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

const imageStyle: React.CSSProperties = {
  borderRadius: "10px",
  maxHeight: "10rem",
  maxWidth: "15rem",
};

const articleHoverStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "left",
  fontWeight: "light",
  letterSpacing: "0.1em",
  lineHeight: "1.5em",
  color: "#404040",
};

interface Props {
  article: Article | null;
  style: React.CSSProperties;
}

const ArticleCard: React.FC<Props> = ({ article, style }) => {
  const renderArticleLink = (article: Article) => {
    if (!article?.url) {
      return <p>(No link found)</p>;
    } else {
      return (
        <Link
          to={`${article?.url}`}
          target="_blank"
          rel="noopener noreferrer"
          style={articleHoverStyle}
          className="link-underline-dark"
        >
          <p>
            {article && article?.content
              ? article?.content
                ? article?.content.slice(0, 150)
                : ""
              : ""}
            ...
          </p>
        </Link>
      );
    }
  };

  const renderArticle = () => {
    if (article === null) {
      return <Skeleton />;
    } else {
      return (
        <Card title={article?.title} bordered={false} style={style}>
          <Layout style={{ backgroundColor: "#fff", alignItems: "center" }}>
            <Content
              style={{
                backgroundColor: "#fff",
                height: "10rem",
                width: "15rem",
              }}
            >
              <Image
                style={imageStyle}
                src={article && article?.urlToImage ? article?.urlToImage : ""}
              />
            </Content>
            <Content
              style={{
                backgroundColor: "#fff",
                height: "8rem",
                marginTop: "30px",
              }}
            >
              {renderArticleLink(article)}
            </Content>
            <Content
              style={{
                backgroundColor: "#fff",
                height: "2rem",
                marginTop: "20px",
                fontFamily: "helvetica",
                fontWeight: "light",
              }}
            >
              <div className="d-flex flex-row gap-2">
                <div>
                  <p>
                    {" "}
                    {article && article?.author
                      ? article?.author.slice(0, 20)
                      : ""}{" "}
                    {article && article?.author && article?.author.length > 20
                      ? "..."
                      : ""}
                  </p>
                </div>
                <div>
                  <p>
                    {article && article?.publishedAt
                      ? `on ${dateFormat(article?.publishedAt)}`
                      : ""}
                  </p>
                </div>
              </div>
            </Content>
          </Layout>
        </Card>
      );
    }
  };

  return <div>{renderArticle()}</div>;
};

export default ArticleCard;
