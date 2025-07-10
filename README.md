# Proyecto Final - SamuraiShop

## Descripción

SamuraiShop es una SPA de e-commerce desarrollada con React y Firebase (Firestore) para la gestión de productos y compras. El proyecto fue diseñado para cumplir con los objetivos del curso, implementando buenas prácticas de desarrollo web, experiencia de usuario cuidada y un estilo visual inspirado en una estética samurái-tecnológica, con colores violeta oscuro y neón.

---

## Funcionalidades principales

- **Listado y detalle de productos:**  
  Los productos se cargan dinámicamente desde Firestore y se muestran en categorías. Cada producto tiene su detalle con opción para seleccionar cantidad y agregar al carrito.

- **Carrito de compras:**  
  Estado global gestionado con React Context. Permite agregar, modificar cantidades, eliminar productos y mostrar el total. Incluye navegación fluida a la página de checkout.

- **Checkout:**  
  Formulario para finalizar la compra, que genera un documento en Firestore con los datos de la orden y muestra el ID de la compra al usuario.

- **Navegación SPA:**  
  Utiliza React Router para evitar recargas completas y mantener una experiencia fluida entre categorías, productos, carrito y checkout.

- **Carga condicional y loaders:**  
  Muestra animaciones tipo terminal durante la carga de datos, con mensajes claros en caso de carrito vacío o productos no encontrados.

- **Estilado:**  
  CSS personalizado con inspiración samurái-tech, predominando violetas oscuros y neones verdes y azules para darle identidad visual fuerte y moderna.

---

## Tecnologías

- React (Hooks, Context, Router)  
- Firebase Firestore (Base de datos en la nube)  
- JavaScript ES6+  
- CSS modularizado con estilos específicos para cada componente

---

## Cómo usar el proyecto

1. Clonar el repositorio  
2. Instalar dependencias con `npm install`  
3. Configurar las variables de entorno con las credenciales de Firebase (`.env`)  
4. Ejecutar con `npm run dev` para levantar el servidor localmente  
5. Navegar por el catálogo, agregar productos al carrito y probar el flujo de compra  

---

## Estructura del proyecto

- `/src/components` - Componentes UI reutilizables (ItemList, CartItem, NavBar, etc.)  
- `/src/containers` - Componentes contenedores que manejan lógica y datos (ItemListContainer, ItemDetailContainer)  
- `/src/context` - Contexto global para el carrito de compras  
- `/src/pages` - Páginas del sitio (Home, Category, CartPage, Checkout)  
- `/src/firebase` - Configuración y conexión con Firebase  
- `/src/styles` - Archivos CSS para estilado modular

---

## Aclaraciones

- El proyecto respeta el modelo SPA para evitar recargas completas y mejorar la UX.  
- Se aplicaron buenas prácticas de código y modularización para facilitar escalabilidad.  
- El diseño visual busca una identidad única con una paleta de colores oscuros y neón.  

---

## Contacto

Este proyecto fue desarrollado por Emanuel Ybalo. Para consultas o feedback, podés contactarme por GitHub o LinkedIn.

---

¡Gracias por revisar SamuraiShop! 🚀⚔️
