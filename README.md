# Ecommerce de NFT (Curso de React Js - CoderHouse)

[Link al proyecto](https://axelmullins.github.io/Cryptoart-Axel-Mullins/)

- Se trata de un proyecto tipo tienda online, en donde al ingresar en la Home se muestran todos los items/productos disponibles, los mismos están conectados por Firebase.
- Al hacer navegar con el menú, se puede filtrar por categorías de productos (posee 2)
- Si se le hace click a cualquier card, se dirige al detalle particular, en donde se pueden visualizar todas las características, definir la cantidad y agregar al carrito.
- En la parte superior, se ubica el CartWidget, el cual se va actualizando al incorporar/borrar un producto al carrito de la misma categoría.
- Al ingresar al carrito de compras, nos encontramos con una lista de todos los productos agregados al mismo y la información del precio total. Aquí podemos borrar un producto en particular, borrar todos los productos o proceder con la compra.
- El formulario de compra toma los datos del comprador (nombre - teléfono - email) los cuales son campos requeridos, y luego se le pide validar el "captcha" al usuario. En caso de estar todo correcto se habilita el botón
 de "Enviar". El formulario esta vinculado con la API de WhatsApp, en donde se están tomando todos los datos ingresados por el usuario más los datos de su pedido (carrito) y se incorporan mediante una función al link de la API, de este modo se abre WhatsApp Web (o directamente WhatsApp en caso de estar desde un celular) con un mensaje automático.
- Al finalizar la compra, se borra el carrito, se le da las gracias al usuario y se le brinda el nro de orden.

## Hooks:
- useState
- useEffect
- useParams
- useContext

## Routing:
- BrowserRouter
- Switch
- Route

## Librerías:
- [Bootstrap 5](https://getbootstrap.com/) (framework)
- [Fontawesome](https://fontawesome.com/) (iconos)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) (navegación).
- [React-toastify](https://www.npmjs.com/package/react-toastify) (notificaciones).
- [React-spinners](https://www.npmjs.com/package/react-spinners) (loaders)
- [React-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha) (captcha de Google)
- [Gh-pages](https://www.npmjs.com/package/gh-pages) (Github pages)

![image](https://github.com/AxelMullins/Cryptoart-Axel-Mullins/blob/master/src/assets/gif/CryptoArt.gif)

## Comandos disponibles

Al tener el proyecto en tu directorio, podes utilizar los siguientes comandos:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhosst:3000](http://localhost:3000) para verla en el navegador.
### `npm run build`

Crea la aplicación para producción en la carpeta `build`
