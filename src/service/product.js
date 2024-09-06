import { Products } from "../entities/product"

const BASE_URL = 'http://localhost:3001/api'



export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        
        if (response.status === 200) {
            const data = await response.json()

            return data
        }

        return response
    }
    catch (error) {     
        if (error.response) {
            return error.response.data
        }
        return error
    }
}