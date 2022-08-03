
export const getProductos = async () => {
    const resp = await fetch('http://localhost:4001/productos')
    return resp.json()
}

export const getDetalleProducto = async (id) => {
    const resp = await fetch(`http://localhost:4001/productos?id=${id}`)
    const data = resp.json()
    return data;
}


export const getCategoria = async () => {
    const resp = await fetch('http://localhost:4001/categorias')
    return resp.json()
}


export const getProductoCategoria = async (id)=>{
    const resp = await fetch(`http://localhost:4001/productos?categoria_id=${id}`)
    const data = await resp.json()
    return data;
}
