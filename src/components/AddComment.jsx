import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import useUser from "../../Hooks/useUser";
const AddComment = ({ articleId, onArticleChange }) => {
  const initialdata = {
    text: "",
  };
  const [formdata, setformdata] = useState(initialdata);
  const { user } = useUser();
  const handleChange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    console.log(headers);
    const responce = await axios.post(
      `http://localhost:8000/api/articles/${articleId}/comment`,
      {
        ...formdata,
      },
      {
        headers,
      }
    );
    console.log(responce.data);
    onArticleChange(responce.data);
    setformdata(initialdata);
  };
  return (
    <div id="add-comment-form">
      <textarea
        placeholder="Write Your Comment..."
        name="text"
        value={formdata.text}
        onChange={(e) => handleChange(e)}
        type="text"
        rows={3}
        cols={30}
      />

      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};
AddComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  onArticleChange: PropTypes.func.isRequired,
};
export default AddComment;
