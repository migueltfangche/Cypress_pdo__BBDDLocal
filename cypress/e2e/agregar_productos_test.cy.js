/// <reference types ="cypress" />
import pantalla from "../selectores/pantalla";

describe('inicio de sesión', () => {
  let midata;

  beforeEach(() => {
    cy.fixture('./productos').then(test => {
      midata = test; 
    });
  });

  it('Visita página web inicio de sesión y agrega productos', () => {
    midata.forEach((data) => {
      cy.log('Data cargada:', JSON.stringify(data));
      cy.visit('http://localhost/inventario-main/index.php?vista=login');
      /* Ingreso al sistema */
      cy.get(pantalla.login.usuario_login).type('Administrador');
      cy.get(pantalla.login.clave).type('Administrador');
      cy.miclick(pantalla.login.iniciar_sesion);
      /* ==== Generated with Cypress Studio ==== */
      
      cy.miclick(pantalla.menu_burguer.burguer);
      cy.get(pantalla.menu_burguer.burguer_click_producto_nuevo).click();
      cy.escribir(pantalla.productos.codigo_de_barra, data.codigo);
      cy.escribir(pantalla.productos.nombre_producto, data.nombre);
      cy.escribir(pantalla.productos.precio, data.precio);
      cy.escribir(pantalla.productos.stock, data.stock);
      cy.get('select').select('1');
      cy.get('.has-text-centered > .button').click();
      /* ==== End Cypress Studio ==== */
    });
  });
   });