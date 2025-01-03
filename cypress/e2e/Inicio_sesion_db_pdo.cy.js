/// <reference types ="cypress" />
import pantalla from "../selectores/pantalla";

describe('inicio de sesión', () => {
  let midata;

  beforeEach(() => {
    cy.fixture('./usuarios2').then(test => {
      midata = test; 
    });
  });

  it('Visita página web inicio de sesión y agrega usuarios', () => {
    midata.forEach((data) => {
      cy.log('Data cargada:', JSON.stringify(data));
      cy.visit('http://localhost/inventario-main/index.php?vista=login');
      /* Ingreso al sistema */
      cy.get(pantalla.login.usuario_login).type('Administrador');
      cy.get(pantalla.login.clave).type('Administrador');
      cy.miclick(pantalla.login.iniciar_sesion);

      /*Ingreso de usuario */
      cy.miclick(pantalla.menu_burguer.burguer);
      cy.miclick(pantalla.menu_burguer.burguer_click);
      cy.escribir(pantalla.add_user.nombres, data.nombres);      
      cy.escribir(pantalla.add_user.apellidos, data.apellidos);      
      cy.escribir(pantalla.add_user.usuario, data.usuario);      
      cy.escribir(pantalla.add_user.email, data.email);      
      cy.escribir(pantalla.add_user.clave, data.clave);
      cy.escribir(pantalla.add_user.repetirclave, data.repetir_clave);
      cy.miclick(pantalla.add_user.guardar_buton);

      cy.miclick(pantalla.menu_burguer.burguer);
      cy.miclick(pantalla.menu_burguer.salir);
      });
    });
   });
 