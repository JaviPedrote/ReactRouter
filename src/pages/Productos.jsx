
import { Link, useNavigate, } from 'react-router-dom'
import { data } from '../data/db'


export const Productos = () => {

    const productos = data
    const navigate =useNavigate()


    console.log(productos)
    function productNavigate(id){
        navigate(`/productos/${id}`)

    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            {productos.map(product => (
                <div key={product.id}>
                    <button onClick={() => productNavigate(product.id)}>
                        {product.name}
                    </button>
                </div>
            )
            )}
        </div>
    )
}
