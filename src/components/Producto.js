import { Component } from "react";
import Button from './Button';

const styles={
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',  //que las imagenes ocupen 30% del espacio
        padding: '10px 15px', //Para que el contenido se aleje de los bordes
        borderRadius: '15px' //que las esquinas queden redondeadas
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        const {producto, agregarAlCarro}= this.props
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=>agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
            </div>
        )

    }
}

export default Producto