import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import { AppRoute } from '../../App'
import CategoryModal from '../components/CategoryModal'
// import { HiPencilSquare } from 'react-icons/Hi'

export default function Category() {

const [Category, setCategory] = useState([])

useEffect(() => {
  axios.get(`${AppRoute}api/get-all-category`)
  .then((json) => setCategory(json.data.categories))
  .catch((err) => console.log(err))

}, [])

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-iten-center bg-warning p-2 my-3 rounded">
            <span className='fs-4 fw-bold text-Warning'>Categories</span>
            <CategoryModal />
        </div>

<div className="container">
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Category Name</th>
      <th scope="col">Category Image</th>
      <th scope="col">Actions</th>
    
    </tr>
  </thead>
  <tbody>

  <tr>
      <th scope="row"></th>
      <td>Category Name</td>
      <td>Category Image</td>
      {/* <td><button className="btn"><HiPencilSquare /></button></td> */}
    
    </tr>
    {/* {
      Category.map((val, key) =>
      
    <tr key ={key}>
      <th scope="row">[val._id]</th>
      <td>{val.CategoryName}</td>
      <td><img scrc={val.CategoryImage} className='img-fluid' style={{height: '5vh', objectFit:'contain'}}/></td>
    
    </tr>
   )} */}
    
  </tbody>
</table>

</div>

    </div>
  )
}
