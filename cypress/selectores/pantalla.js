class pantalla {
    login = {
            usuario_login:':nth-child(2) > .control > .input',
            clave:':nth-child(3) > .control > .input',
            iniciar_sesion:'.button',
    }    

    add_user = {
            nombres:':nth-child(1) > :nth-child(1) > .control > .input',
            apellidos:':nth-child(1) > :nth-child(2) > .control > .input',
            usuario:':nth-child(2) > :nth-child(1) > .control > .input',
            email:':nth-child(2) > :nth-child(2) > .control > .input',
            clave:':nth-child(3) > :nth-child(1) > .control > .input',
            repetirclave:':nth-child(3) > :nth-child(2) > .control > .input',
            guardar_buton:'.has-text-centered > .button',
    }
    menu_burguer = {
        burguer:'.navbar-burger',
        burguer_click:'[href="index.php?vista=user_new"]',
        salir:'.is-link',
    }

    categorias = {
            categoria_producto:'',
            ubicacion:'',
    }
    
    productos = {
            codigo_de_barra:'',
            nombre_producto:'',
            precio:'',
            stock:'',


    }


}

export default new pantalla();