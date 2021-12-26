import React ,{useContext}from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import githubContext from '../../context/github/githubContext'
 const Users =()=> {
  const GithubContext=useContext(githubContext)

const {loading,users}=GithubContext

   if(loading){
return <Spinner />

   }else{
        return (
            
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3, 1fr)',
                gridGap:'1rem'
            }}>
                {users.map(user=>{
                   return(
              <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url} />
                   )
                })}
            </div>
        )
            }
    
}

export default Users
