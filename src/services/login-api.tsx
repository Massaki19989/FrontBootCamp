import api from "./api";

const loginApi = async (email: string, password: string)=>{
    try{
        const response = await api.post('/auth/login', { email, password }, {withCredentials: true})
        return response.data;
    }catch(err: any){
        throw err.response ? err.response.data : new Error('Erro de rede')
    }
}

export default loginApi;
