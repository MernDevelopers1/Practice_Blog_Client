import axios from "axios";
import { useState } from "react";
import PropTypes from 'prop-types';
const AddComment = ({articleId, onArticleChange}) => {
    const initialdata ={
        postedBy:"",
        text:""
    } ;
    const [formdata,setformdata] = useState(initialdata); 
    const handleChange = (e)=>{
        setformdata(prev => ({...prev,[e.target.name]:e.target.value}));
    }
    const addComment = async () =>{
        const responce = await axios.post( `http://localhost:8000/api/articles/${articleId}/comment`,{
            ...formdata
        });

        onArticleChange(responce.data);
        setformdata(initialdata);
    }
  return (
    <div id="add-comment-form">
    <label >
        Name:
        
        <input name="postedBy" value={formdata.postedBy} onChange={(e)=>handleChange(e)} type="text" />
    </label>,
    <label>
        Comment:
        <textarea name="text" value={formdata.text} onChange={(e)=>handleChange(e)} type="text" rows={3} cols={30} />
    </label>

    <button onClick={addComment}>Add Comment</button>
      
    </div>
  );
};
AddComment.propTypes = {
    articleId: PropTypes.string.isRequired,
    onArticleChange:PropTypes.func.isRequired,
}
export default AddComment
