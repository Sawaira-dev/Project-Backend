// import React, { useEffect, useState } from 'react'
// import UserCards from '../Components/UserCards'
// import axios from 'axios'

// export default function Category() {
//     const [category, setCategory] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:1234/api/get-all-category').then(json => setCategory(json.data.category)).catch(err => alert(err.message))
//     }, [])


//     return (
//         <div className="container my-5">
//             <div className="text-center">
//                 <h2>Categories</h2>
//                 <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
//             </div>

//             <div className="row my-5">
//                 {
//                     category?.map((val, key) => <UserCards key={key} image={val.categoryImage} name={val.categoryName} url={`/brands/${val.categoryName}`}/>)
//                 }

//             </div>
//         </div>
//     )
// }



import React from 'react'
import UserCards from '../Components/UserCards'

export default function Category() {
    const data = [
        {
            "_id": "64de4e775bd7eca248724100",
            "categoryName": "Makeup",
            "categoryImage": "https://icon-library.com/images/makeup-icon-png/makeup-icon-png-0.jpg",
            "__v": 0
        },
        {
            "_id": "64de4e775bd7eca248724100",
            "categoryName": "Jwellery",
            "categoryImage": "https://www.shutterstock.com/image-vector/jewelry-necklace-icon-600w-1059497141.jpg",
            "__v": 0
        },
        {
            "_id": "64de4e775bd7eca248724100",
            "categoryName": "Mobile",
            "categoryImage": "https://c8.alamy.com/comp/2J2P93F/hand-smartphone-icon-hand-holding-phone-smartphone-symbol-icon-for-website-design-mobile-app-ui-2J2P93F.jpg",
            "__v": 0
        },
        {
            "_id": "64de4e775bd7eca248724100",
            "categoryName": "Grocery",
            "categoryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo8rYjmtZPGcMfSl4OC342_uonbuHocoh-Q&usqp=CAU",
            "__v": 0
        },
        {
            "_id": "64de4e775bd7eca248724100",
            "categoryName": "Dresses",
            "categoryImage": "data:image/png;base64,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",
            "__v": 0
        },
        // {
        //     "_id": "64de4e775bd7eca248724100",
        //     "categoryName": "Jwellery",
        //     "categoryImage": "https://www.shutterstock.com/image-vector/jewelry-necklace-icon-600w-1059497141.jpg",
        //     "__v": 0
        // },
    ]

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5 gap-5 col-md-12">
                {
                    data.map((val, key) => <UserCards key={key} image={val.categoryImage} name={val.categoryName} />)
                }

            </div>
        </div>
    )
}