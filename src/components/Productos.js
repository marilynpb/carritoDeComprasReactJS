import { Component } from "react";
import Producto from './Producto';

const styles={
    productos: {
        display: 'flex',
        flexDirection: 'row', //que se muestre de izq a Derech, no en lista
        justifyContent: 'space-between' //para que se separen de forma equitativa

    }
}

class Productos extends Component{
    render(){
        const {productos, agregarAlCarro}= this.props
    return(
      <div style={styles.productos}>
          {productos.map(producto=>
          <Producto 
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />)}
      </div>
    )
    }

}

export default Productos