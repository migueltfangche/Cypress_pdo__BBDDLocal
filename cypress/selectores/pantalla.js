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
        burguer_click_producto_nuevo:'[href="index.php?vista=product_new"]',
    }

    categorias = {
            categoria_producto:'',
            ubicacion:'',
    }
    
    productos = {
            codigo_de_barra:':nth-child(1) > :nth-child(1) > .control > .input',
            nombre_producto:':nth-child(1) > :nth-child(2) > .control > .input',
            precio:':nth-child(2) > :nth-child(1) > .control > .input',
            stock:':nth-child(2) > :nth-child(2) > .control > .input',
            categoria:'select',


    }


}

export default new pantalla();