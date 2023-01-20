import { Component } from "react";

const styles={
    button: {
        backgroundColor: '#FFD54F',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer', //que aparesca la manito cuando paso el cursor por arriba del boton
      


    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
        
    }
}

export default Button