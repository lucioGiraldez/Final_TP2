# 🛠️ Final TP2 Lucio Ernesto Giraldez Hirschfeldt- API de Productos

Este proyecto es una API REST construida en Node.js como trabajo práctico final del segundo cuatrimestre. Permite realizar operaciones CRUD sobre productos con validaciones, modularización y arquitectura en capas.

## 📁 Estructura del Proyecto

final-TP2/
├── app.js
├── package.json
├── .gitignore
├── source/
│ ├── config/ # Configuración de puerto/host
│ ├── controller/ # Controladores HTTP
│ ├── db/ # Archivos de persistencia JSON
│ ├── model/ # Modelos de datos
│ ├── repository/ # Lógica de acceso a archivos
│ ├── routes/ # Rutas de la API
│ ├── service/ # Lógica de negocio
│ ├── use-cases/ # Validaciones de dominio
│ ├── utils/ # Utilidades como JSONHandler
│ └── test/ # Archivos .http para testing local

## 📦 Instalación

1. Clonar el repositorio:

git clone https://github.com/lucioGiraldez/Final_TP2.git
cd Final_TP2

Instalar dependencias:
npm install

Ejecutar el servidor:
node app.js
🔌 Endpoints disponibles
Método	Endpoint	Descripción
GET	/api/v1/productos	Obtener todos los productos
GET	/api/v1/productos/:id	Obtener un producto por ID
POST	/api/v1/productos	Crear un nuevo producto
PUT	/api/v1/productos/:id/updateStock	Actualizar el stock de un producto
DELETE	/api/v1/productos/:id	Eliminar un producto por ID
GET	/api/status	Verificar que el servidor esté vivo

✅ Validaciones
stock debe ser un número mayor o igual a 0
price debe ser un número mayor a 0
Las validaciones están implementadas en /use-cases/validation.js

🧪 Testing manual
El proyecto incluye archivos .http en la carpeta test/ para probar los endpoints con VS Code y la extensión "REST Client".
