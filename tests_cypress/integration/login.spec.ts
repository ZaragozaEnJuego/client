describe('Inicio de sesión', () => {
  it('Log in con Google', () => {
    // Visita la URL especificada
    cy.visit('https://client-lyart-five.vercel.app/login');

    // Selecciona todos los elementos de botón en la página.
    // Filtra la selección para encontrar el botón que contiene "Iniciar sesión"
    // Hace click en el botón encontrado.
    cy.get('button').contains('Iniciar sesión').click();

    // Obtiene la URL actual del sitio web visitado.
    // Se asegura de que incluya URL que debe
    cy.url().should('include', 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount');

    // Verifica que hay vista visible en la página
    cy.get('#initialView').should('be.visible');

    // Busca el primer enlace dentro de la página de inicio de sesión
    // de Google y hace clic en la primera cuenta que aparece
    cy.get('#initialView a').first().click();

    cy.url().should(
      'include',
      'https://server-production-29b0.up.railway.app/api/auth/google/callback',
    );

    // Obtiene la URL actual del sitio web visitado.
    // Se asegura de que incluya URL que debe
    cy.url().should('include', 'https://client-lyart-five.vercel.app/home');

  });
});
