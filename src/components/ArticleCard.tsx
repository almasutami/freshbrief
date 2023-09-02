import React from "react";
import { Card, Image, Layout } from "antd";
import "../assets/styles/card.css";
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
};

interface Props {
  article: Article;
  style: React.CSSProperties;
}

const ArticleCard: React.FC<Props> = ({ article, style }) => {
  return (
    <div>
      <Card title={article.title} bordered={false} style={style}>
        <Layout style={{ alignItems: "flex-end" }}>
          <Content style={{ backgroundColor: "#fff", height: "50%" }}>
            <Image
              style={imageStyle}
              src={article && article.urlToImage ? article.urlToImage : ""}
            />
          </Content>
          <Content
            style={{
              backgroundColor: "#fff",
              height: "50%",
              marginTop: "30px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                textAlign: "left",
                fontWeight: "light",
                letterSpacing: "0.1em",
                lineHeight: "1.5em",
              }}
            >
              {article && article.content
                ? article.content
                  ? article.content.slice(0, 150)
                  : ""
                : ""}
              ...
            </p>
          </Content>
        </Layout>
      </Card>
    </div>
  );
};

export default ArticleCard;
