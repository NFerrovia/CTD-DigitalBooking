import { getAuthToken } from "../utils/LocalStorage";
import { url_base } from "./fetchLink";

export const fetchCreateProduct = async (product) => {
  try {
    const response = await fetch(`${url_base}/products/saveProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

// {
//     "name": "depto",
//     "description": "es grande",
//     "images": [
//         {
//             "title": "",
//             "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/24a05e1f-1b03-43bc-a2d5-c757e8dbdea1.jpeg?im_w=1440"
//         },
//         {
//             "title": "",
//             "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/24a05e1f-1b03-43bc-a2d5-c757e8dbdea1.jpeg?im_w=1440"
//         }
//     ],
//     "typeOfPolicyAddPoliciesDTOList":[{
//         "typeOfPolicyId": 1,
//         "listPolicies": [
//             {
//                 "description": "lala "
//             },
//             {
//                 "description": "hay seguridad"
//             },
//             {
//                 "description": "hay ambulancias"
//             }
//         ]
//     },
//     {
//         "typeOfPolicyId": 2,
//         "listPolicies": [
//             {
//                 "description": "lala "
//             },
//             {
//                 "description": "hay seguridad"
//             },
//             {
//                 "description": "hay ambulancias"
//             }
//         ]
//     }
//     ],
//     "city_id": 1,
//     "category_id": 1,
//     "features": [
//         {
//             "name": "wifi",
//             "icon": "https://cdn-icons-png.flaticon.com/512/1330/1330132.png"
//         },
//         {
//             "name": "cocina",
//             "icon": "https://cdn-icons-png.flaticon.com/512/1330/1330132.png"
//         }
//     ],
//     "latitude": "25",
//     "longitude": "30",
//     "address": "av siempre viva 1"
// }
