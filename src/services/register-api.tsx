import api from "./api";

async function RegisterApi(name: string, cpf: string, email: string, password: string){
    try{
        const response = await api.post('/auth/register', {name, cpf, email, password})
        return response
    }catch(err: any){
        throw err.response ? err.response.data : new Error('Erro de rede')
    }
}

export default RegisterApi