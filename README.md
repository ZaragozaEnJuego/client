# Cliente de Zaragoza en juego

## Empezar el desarrollo
### Prepara el entorno de desarrollo.

Este repositorio cuenta con una configuración de devcontainer, esto nos permite traajar a todos con el mismo
sistema operativo y configuración de este, por lo que se evitan problemas de versiones y arquitectura. Además de ello también evita instalar nada 
en la máquina local y tener todas las herramientas ya configuradas y listas para empezar el desarrollo. Si auún así prefieres trabajar en local 
pasa directamente a li siguiente sección.

Para trabajar con dev containers es necesario configurar dos elementos:
 - Runtime de contendores: Puedes descargar docker o podman, asegurate que estén en ejecución siempre que se quira utilizar el dev container.
 - Editor de texto: proponemos Vs code con la extension [Dev containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
 
 Tras tener esto descargado únicamente es necesario descargar o clonar el repositorio y abrirlo con el editor. En cas de ser Vs code y tener bien configurado
 nos proguntará si queremos abrirlo en un contenedor, aceptaremos y empezará a construirlo. La primera vez que lo usemos tardará en torno a 2 minutos en 
 iniciarse debido a que docker esta creando la imagen, las siguientes veces que vayamos a utilizar esto será de forma instantanea.
 
 Como recomendación se propone utilizar git bajo ssh en vez de http, ya que de esta fomrma no habrá que crear un token de acceso unico para cada devcontainer, 
 sino que tomará nuestras claves del ordenador local en sistemas Unix(~/.ssh/) si se quiere hacer lo mismo para windows se pede modificar el 
 archivo `.devcontainer/devcontainer.json`.
 
 ### Preparar el proyecto
 
 Si se ha utlizado el dev container con unicamente el siguiente comando debería configurarse todo lo necesario:
 ```bash
 yarn install
 ```
 De esta forma se descargarán todas las librerias necesarias.
 Con el siguiente comando se lanza la aplicación en modo desarrollo, abriendose una ventana en el navegador, en caso de no abrirse en la ventana de la 
 terminal hay una tab que indica puertos, desde ella podremos acceder a nuestra web.
  ```bash
 yarn vite
 ```

 El proyecto cuenta con el formatteador prettier, recomendamos configurar vscode para que lo ejecute cada vez que se guarda un archivo. En caso contrario 
 se debe ejuctar manualmente antes de realizar un commit.
