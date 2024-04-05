import React from 'react'
import { Breadcrumb, CreateUserProfile,} from "./sub-component";

const CreateUser = () => {
  return (
    <>
<div className="main-wrapper">
       <div className="card usr-crd card-main">
       <Breadcrumb />
        <CreateUserProfile />
       </div>
      </div>
    </>
  )
}

export default CreateUser
