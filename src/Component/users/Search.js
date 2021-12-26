import React, { useState ,useContext} from "react";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";
const Search= ()=>{
  const GithubContext =useContext(githubContext)
  const AlertContext = useContext(alertContext)
  const [text,setText]=useState('')


const onChange=(e)=>{
setText(e.target.value)
}

const onSubmit=(e)=>{
    e.preventDefault();
if(text === ''){
AlertContext.setAlerts('Please enter Something','Light')
}
else{
  GithubContext.searchUsers(text)

}
}

const clearUser=(e)=>{
    e.preventDefault();
    GithubContext.clearUsers()
    setText('')
}
 
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
        <input type="text" name='text' placeholder='Searh Users ...'
        value={text}
        onChange={onChange}
        ></input>
        <input type='submit'  value='Search' className='btn btn-dark btn-block'></input>
        </form>
        {GithubContext.users.length>0 &&  <button className='btn btn-light btn-block' onClick={clearUser}>Clear</button>}
       
      </div>
      
    );
  
}


export default Search;
