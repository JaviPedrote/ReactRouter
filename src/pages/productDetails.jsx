
import { useParams } from 'react-router-dom'
import { data } from '../data/db'




export const ProductDetails = () => {

    const productos = data

    const { id } = useParams()
    console.log(id)

    console.log(productos)







    return (
        <div>
            <h1>Nombre del producto</h1>
            {productos
                .filter(producto => producto.id === Number(id))
                .map(producto => (
                    <>
                        <h1 key={producto.id}>{producto.name}</h1>
                        <h2>{producto.detalle}</h2>
                    </>

                ))
            }
            {productos.every(producto => producto.id !== Number(id)) && (
                <div>PRODUCTO NO ENCONTRADO</div>
            )}
        </div>
    )
}
