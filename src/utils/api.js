
export const getProductos = async () => {
    const resp = await fetch('http://localhost:4001/productos')
    return resp.json()
}

export const getDetalleProducto = async () => {
    const resp = await fetch(`http://localhost:4001/productos?id=1`)
    const data = resp.json()
    return data;
}