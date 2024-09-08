const BASE_URL = window.env.BASE_URL

export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            }
        })  
        
        const data = await response.json()
        return data
    }
    catch (error) {     
        return error
    }
}

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${BASE_URL}/products/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify(product)
        })  
        
        const data = await response.json()
        return data
    }
    catch (error) {     
        return error
    }
}

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            }
        })  
        
        const data = await response.json()
        return data
    }
    catch (error) {     
        return error
    }
}

export const updateProduct = async (product) => {
    try {
        const response = await fetch(`${BASE_URL}/products/update/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify(product)
        })  
        
        const data = await response.json()
        return data
    }
    catch (error) {     
        return error
    }
}