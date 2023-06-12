import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import useUser from "../../Hooks/useUser";

const ArticlePage = () => {
  const { id } = useParams();
  const [articleinfo, setArticleInfo] = useState({
    upvotes: 0,
    comment: [],
    canUpvote: false,
  });
  const { canUpvote } = articleinfo;
  const { user, isLoading } = useUser();
  // console.log(user);
  useEffect(() => {
    const fetcharticleinfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      // console.log(user);
      const newarticleinfo = await axios.get(
        `http://localhost:8000/api/articles/${id}`,
        {
          headers,
        }
      );
      console.log(newarticleinfo.data);
      setArticleInfo(newarticleinfo.data);
    };
    if (!isLoading) {
      fetcharticleinfo();
    }
  }, [isLoading, user]);
  const article = articles.find((item) => item.name === id);
  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const reesponce = await axios.put(
      `http://localhost:8000/api/articles/${id}/upvote`,
      null,
      {
        headers,
      }
    );
    setArticleInfo(reesponce.data);
  };
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvote-section">
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Already Upvoted"}
          </button>
        ) : (
          <button>Login to upvote the article.</button>
        )}
        <p>{`The Following Article have ${articleinfo.upvotes} upvote(s).`}</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleinfo.comment} />
      {user ? (
        <AddComment
          articleId={id}
          onArticleChange={(Articledata) => setArticleInfo(Articledata)}
        />
      ) : (
        <button>Login to add comment to the article</button>
      )}
    </>
  );
};

export default ArticlePage;
