import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const ArticlesList = ({articles}) => {
  return (
    <>
        {
            articles.map(article => 
                 (
                    <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                        <h3>{article.title}</h3>
                        <p>{article.content[0].slice(0,150)}...</p>
                    </Link>
                )
            )
        }
    </>
  )
}
ArticlesList.propTypes = {
    articles : PropTypes.array.isRequired,
}
export default ArticlesList
