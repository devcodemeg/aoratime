import React from 'react'
import { Breadcrumb, CreateResidentArchiveList } from './sub-component'

const CreateResidentsArchiveMain = () => {
  return (
    <>
     <main>
     <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb />
        <CreateResidentArchiveList />
       </div>
      </div>
     </main>
    </>
  )
}

export default CreateResidentsArchiveMain