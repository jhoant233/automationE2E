Descripción:
Este proyecto implementa pruebas E2E utilizando Cypress.io, 
generación de datos aleatorios con la librería @faker-js/faker, 
y generación de reportes con mochawesome-reporter. 
Está estructurado siguiendo el patrón de diseño Page Object Model (POM), 
el cual permite la separación de la lógica de las pruebas y la estructura de la página, 
facilitando el mantenimiento y la escalabilidad de las pruebas.

Requisitos:
Node.js (versión 12 o superior)
Cypress.io (versión 10 o superior)

Instalación:
1.Clona este repositorio: git clone https://github.com/jhoant233/automationE2E.git
2.Navega a la carpeta del proyecto
3.Instala las dependencias con el comando: npm install

Ejecución de Pruebas:
Para ejecutar las pruebas desde la interfaz de Cypress, utiliza el comando: npx cypress open
Para ejecutar las pruebas desde la consola, utiliza el comando: npx cypress run
También se puede usar el siguiente comando personalizado para correr las pruebas de la consola: npx cypress run test-terminal

Ver reporte de pruebas:

Para generar y visualizar el reporte de pruebas, ejecuta el siguiente comando después de correr las pruebas: 
npx mochawesome-report-generator <ruta_del_reporte.json>. Luego, ubica el reporte en la carpeta "reports"
con la extensión .html :

cypress
  -mochawesome-report
    -cypress
      -reports


Patrón Page Object Model (POM):

En el directorio cypress/e2e/Utilities encontrarás las siguientes clases:

ParentPage.js: Contiene la estructura básica y propiedades generales que se utilizan en las pruebas.
Assertions.js: Contiene las verificaciones que se realizan en cada prueba
Utilities.js: Métodos utilitarios para ejecutar las pruebas.

En el directorio cypress/e2e/pages encontrarás cada página representada en una clase con sus selectores y métodos.

En el directorio cypress/e2e/Features encontrarás cada uno de los tests E2E a ejecutar.


