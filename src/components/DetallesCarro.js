import { Component } from "react";
//import deleteIMG from '../../public/productos/deleteIMG.svg'

const styles={
    detallesCarro:{ 
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '0',

    },

    ul:{
        margin: 0,
        padding: 0,
    },

    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 25px',
        borderBottom: 'solid 1px #aaa',
    },

    buttonRestar:{
        backgroundColor: '#FFD54F',
        border: 'none',
        borderRadius: '2px',
    },

    buttonClose: {
        backgroundColor: 'tomato',
        border: 'none',
    }
}

class DetallesCarro extends Component{
    render(){
        const {carro}= this.props
        console.log(carro)
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>  
                    <li style={styles.producto} key={x.name}>
                    <img alt= {x.name} src={x.img} width= '50' height= '32' />
                    {x.name} <span>{x.cantidad}</span>
                    <button style={styles.buttonRestar}>+</button>
                    <button style={styles.buttonRestar}>-</button>
                    <button style={styles.buttonClose}>x</button>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro