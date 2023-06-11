import PropTypes from "prop-types"
const CommentsList = ({comments}) => {
  return (
    <>
        <h3>Comments:</h3>
        {comments.map((comment,index)=>{
            return (<div className="comment" key={index}>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>)
        })}
    </>
  )
}
CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList
