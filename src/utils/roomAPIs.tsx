import axios from "axios"

const URL = "http://localhost:6589/api/v1/room"

export const createRoom = async (data: any) =>{
    try {
        
        return await axios.post(`${URL}/create`, data).then((res)=>{
            return res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}

// export const signUser = async (data : any) =>{
//     try {
        
//         return await axios.post(`${URL}/sign-in`, data).then((res)=>{
//             return res.data.data
//         })

//     } catch (error) {
//         console.log(error);
        
//     }
// }