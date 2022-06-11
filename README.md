#Zono!

## Descripción

El sitio web encontrado en este repositorio fue realizado durante el curso de `React JS` de` Coderhouse`.
Este sitio web es un Ecommerce donde se pueden visualizar productos pudiendo filtrar por categorías a través de la barra de navegación o en su defecto visualizar todos los productos disponibles en el inicio.

Para acceder al sitio debemos entrar en: https://react-bulaich.web.app/

##Tecnologías utilizadas

- [ReactJS](https://es.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

##Instalación
El proyecto puede descargarse a través del .zip o bien crear una carpeta, abrir una consola de comandos dentro e ingresar lo siguiente:

    git clone https://github.com/emilianobulaich/react-bulaich.git

##Ejecución
_Antes de poder visualizar el proyecto se deben instalar las dependencias, para ello ingresaremos a la carpeta del proyecto (react-bulaich) y ejecutaremos el siguiente comando:_

    npm install

####Requerimientos

Para poder dar uso de este Ecommerce se necesita crear una base de datos en Firebase la cual debe incluir 2 colecciones: `products` y `categories`

Adicionalmente a estas 2 colecciones se creará (al momento de realizarse una orden ) una colección más llamada `orders`, la cual contendrá cada orden realizada.

**Puede usar los siguientes ejemplos para crear sus productos y categorías**

    product = {
      category: "procesador",
      description: ["Marca : AMD", "Modelo : 5500","GPU integrado : No","Cantidad de núcleos de CPU : 6"],
      pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/Procesador-Amd-Ryzen-5-5500_42560_1.jpeg",
      price: 24549,
      stock: 78,
      title: "Procesador Amd Ryzen 5 5500 4.2 Ghz - AM4 Sin Gpu",
    }

---

    category = {
       name: "PROCESADOR",
       section: "procesador"
    }

---

_Una vez instaladas las dependencias, y creada la base de datos en `Firebase` con sus respectivas **colecciones** ejecutaremos el proyecto con:_

    npm start

##Información adicional

####MaterialUI
Este proyecto fue realizado utilizando la librería `MaterialUI` para el diseño del mismo.

Elegí `MaterialUI` porque era una librería que yo no conocía y por lo tanto nunca había implementado, con el fin de salir de mi zona de confort me puse a prueba implementando esta librería _nueva_ para mi en ese momento y los resultados fueron excelentes.

####Firebase
A través de `Firebase` se logró guardar la información de las colecciones anteriormente mencionadas:
`products` ,`categories` y `orders` de forma muy sencilla.

####LocalStorage
Para complementar con la base de datos en Firebase, utilicé el `LocalStorage` propio del navegador para guardar los productos almacenados en el **carrito**, la **cantidad total** y el **precio total** a pagar y de esta forma no perder la información al reiniciar o cerrar la pestaña.
