import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

 const Users =({users,loading})=> {
  
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

Users.prototypes={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}
export default Users
