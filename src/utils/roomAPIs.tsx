import axios from "axios"

const URL = "https://perfectroom.onrender.com/api/v1/room"

export const createRoom = async (data: any) =>{
    try {
        const config: any = {
            "content-type" : "multiport/form-data"
        }
        return await axios.post(`${URL}/create`, data, config).then((res)=>{
            return res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const readRoom = async (data : any, id: string) =>{
    try {
        
        return await axios.post(`${URL}/${id}/read-one`, data).then((res)=>{
            return res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}
export const readRooms = async () =>{
    try {
        
        return await axios.post(`${URL}/read`).then((res)=>{
            return res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}