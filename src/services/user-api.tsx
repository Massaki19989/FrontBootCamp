import api from "./api"

async function getUser(){
    try{
        const response = await api.get('/user', {withCredentials: true})
        return response
    }catch(err: any){
        throw err.response ? err.response.data : new Error('Usuario não definido!')
    }
}

export default getUser