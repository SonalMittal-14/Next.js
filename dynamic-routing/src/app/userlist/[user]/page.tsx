import React from 'react'

const User = async ({params} : {params : {user : string}}) => {
    // console.log(props);
    // console.log(params);
    const {user}  = await params;
    console.log(user);

  return (
    <div>
        <h1>Info About : {user}</h1>
    </div>
  )
}

export default User