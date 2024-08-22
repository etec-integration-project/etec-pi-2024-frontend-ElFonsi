-------------------------TUTORIAL PARA INICIAR EL PROYECTO------ALFONSO MAGALLANES------------------

1_ Clonaremos el proyecto de git hub con el siguiente commando

git clone https://github.com/etec-integration-project/etec-pi-2024-backend-ElFonsi.git // o // git@github.com:etec-integration-project/etec-pi-2024-backend-ElFonsi.git

2_ Para levantar la aplicacion primer nos dirigiremos a la terminal y nos colocaremos en la carpeta donde se 
encuentra nuestro proyecto(el proyecto lo encontraremos en la carpeta de donde lo clonamos)

cd [direccion de la carpeta del proyecto]

3_Estando posicionados sobre la carpeta etec-pi-2024-backend-ElFonsi vamos a clonar el frontend con el siguiente commando

git clone https://github.com/etec-integration-project/etec-pi-2024-frontend-ElFonsi.git // o // git@github.com:etec-integration-project/etec-pi-2024-frontend-ElFonsi.git

4_ Ahora ejecutaremos el commando para levantar la aplicacion

docker compose up --build -d

4- Listo, si la aplicacion se levanto como corresponde nos dirigiremos al buscador y entraremos a esta pagina http://localhost:8080/productos , http://localhost:3000/ , si podemos apreciar los productos de la base de datos y podemos ver el inicio de la pagina es porque la base de datos esta activa y el frontend levantado.

----------------------------------------------------------SPRINT 5 DOCUMENTACIÓN-----------------------------------------
Para este sprint lo que hice fue organizar un poco el estilo de la pagina, ya que tenia un lio debido a no tenerlo correctamente organizado.

Lo que se me ocurrio fue que para cada archivo .jsx hay un archivo css con su respectivo estilo.

![image](https://github.com/user-attachments/assets/986d26d3-70cf-4295-a75f-b705aaa3c1c5)
En esta imagen se muestra el como quedo el resultado de los estilos organizados.
