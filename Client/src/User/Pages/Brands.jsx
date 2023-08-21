import React from 'react'
import UserCards from '../Components/UserCards'

export default function Brand() {
    const data = [
        {
            "_id": "64b9220ffd82e7fc615b134a",
            "BrandName": "Makeup City",
            "BrandImage": "https://www.makeupcityshop.com/cdn/shop/files/MUC-Logo-new-01-footer.png?v=1624558798",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Sana Safinaz",
            "BrandImage": "https://www.sanasafinaz.com/static/version1688385473/frontend/RLTSquare/SanaSafinaz/en_US/images/S-SBlack.png",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Pandora",
            "BrandImage": "https://1000logos.net/wp-content/uploads/2018/08/Pandora-Jewelry-logo.jpg",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Spaghettios",
            "BrandImage": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Spaghettios_brand_logo.png",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Realme",
            "BrandImage": "data:image/png;base64,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",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Kalyan",
            "BrandImage": "https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/https://brandyuva.in/wp-content/uploads/2017/09/kalyan-jewellery-logo.jpg",
            "__v": 0
        },
        
    ]

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5 gap-5 col-md-12">
                {
                    data.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}

// import React, { useEffect, useState } from 'react'
// import UserCards from '../Components/UserCards'
// import axios from 'axios'

// export default function Brands() {
//     const [brands, setBrands] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:1234/api/get-all-brands').then(json => setBrands(json.data.brands)).catch(err => alert(err.message))
//     }, [])


//     return (
//         <div className="container my-5">
//             <div className="text-center">
//                 <h2>Brands</h2>
//                 <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
//             </div>

//             <div className="row my-5">
//                 {
//                     brands?.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} url={`/brands/${val.BrandName}`}/>)
//                 }

//             </div>
//         </div>
//     )
// }