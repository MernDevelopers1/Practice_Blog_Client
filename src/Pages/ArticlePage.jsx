import { useParams } from "react-router-dom"
import articles from "./article-content";

const ArticlePage = () => {
    const { id } = useParams();
    console.log(id);
    const article = articles.find(item=> item.name === id);
    console.log(article);
  return (
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,index) => <p key={index}>{paragraph}</p>)}
    </>
  )
}

export default ArticlePage