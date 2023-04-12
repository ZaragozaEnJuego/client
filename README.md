# Cliente de Zaragoza en juego

## Empezar el desarrollo
### Prepara el entorno de desarrollo.

Este repositorio cuenta con una configuración de devcontainer, esto nos permite trabajar a todos con el mismo
sistema operativo y configuración de este, por lo que se evitan problemas de versiones y arquitectura. Además de ello, también evita instalar nada 
en la máquina local y tener todas las herramientas ya configuradas y listas para empezar el desarrollo. Si aún así prefieres trabajar en local, 
pasa directamente a la siguiente sección.

Para trabajar con dev containers es necesario configurar dos elementos:
 - Runtime de contenedores: Puedes descargar docker o podman, asegúrate de que estén en ejecución siempre que se quiera utilizar el dev container.
 - Editor de texto: Proponemos Vs code con la extensión [Dev containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
 
 Tras tener esto descargado, únicamente es necesario descargar o clonar el repositorio y abrirlo con el editor. En caso de ser Vs code y tenerlo bien configurado,
 nos preguntará si queremos abrirlo en un contenedor, aceptaremos y empezará a construirlo. La primera vez que lo usemos tardará en torno a 2 minutos en 
 iniciarse, debido a que docker esta creando la imagen. Las siguientes veces que vayamos a utilizar esto será de forma instantanea.
 
 Como recomendación, se propone utilizar git bajo ssh en vez de http, ya que de esta forma no habrá que crear un token de acceso único para cada devcontainer, 
 sino que tomará nuestras claves del ordenador local en sistemas Unix(~/.ssh/). Si se quiere hacer lo mismo para Windows, se puede modificar el 
 archivo `.devcontainer/devcontainer.json`.
 
 ### Preparar el proyecto
 
 Si se ha utlizado el dev container, con únicamente el siguiente comando debería configurarse todo lo necesario:
 ```bash
 yarn install
 ```
 De esta forma, se descargarán todas las librerias necesarias.
 Con el siguiente comando se lanza la aplicación en modo desarrollo, abriendose una ventana en el navegador. En caso de no abrirse en la ventana de la 
 terminal, hay una tab que indica puertos. Desde ella podremos acceder a nuestra web.
  ```bash
 yarn vite
 ```

 El proyecto cuenta con el formateador prettier, recomendamos configurar vscode para que lo ejecute cada vez que se guarda un archivo. En caso contrario, 
 se debe ejuctar manualmente antes de realizar un commit.
 
 ### Mapa
 
 - Se ha creado un componente `Mapa` que muestra un mapa interactivo de `OpenStreetMap` utilizando la biblioteca `react-leaflet`.
 - El componente `Mapa` acepta una lista de propiedades como una prop llamada `propiedades`.
 - Se han agregado marcadores al mapa para cada propiedad en la lista de propiedades.
 - Se ha agregado un `Popup` a cada marcador que muestra información detallada sobre la propiedad, incluyendo su nombre, dirección, precio y tipo.

### Errores

 - A la hora de meter los marcadores, se pretendía recorrer una lista (similar a la lista de edificios) y poner un marcador por cada propiedad. Esta llamada (renderMarkers) no funciona correctamente por lo que en el commit se ha dejado que ponga un marcador puntual para demostrar el correcto funcionamiento de lo que se persigue conseguir.
