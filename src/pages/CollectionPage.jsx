import React from 'react'
import CollectionCard from '../components/CollectionCard'
import NavbarForColleection from '../components/NavbarForColleection'
import { useSelector } from 'react-redux'
const CollectionPage = () => {
    const collection=useSelector(state=>state.collection.items)
  return (
    <div  className=''>
        <NavbarForColleection/>
         <div>
                
     <div className='flex flex-wrap'> {
        collection.map((item,idx)=>{
           return <div key={idx} >
            <CollectionCard item={item}/>
                </div>
        })
      }</div>
         </div>
    </div>
  )
}

export default CollectionPage
