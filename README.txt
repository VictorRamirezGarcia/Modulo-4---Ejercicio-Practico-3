
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza ReactJS para crear un sitio con un sistema de navegaci�n. El proyecto incluye p�ginas como "Inicio", "Servicios" y "Contacto".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

ReactJS: Para la estructuraciond e la pagina y cada uno de los componentes de la misma. Ademas de la renderizacion de los datos, flujo de informacion y creacion de los formularios para el manejo de la interaccion del usuario.
CSS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.


Estructura del Proyecto

index.html: Es el archivo HTML principal que funciona como punto de entrada de la aplicación.
index.css: Archvio con los estilos css de la pagina index
main.jsx: Es el segundo archivo que se llama desde el index.html definiendo la extructura mas general de la pagina en ReactJS.
App.jsx: Es el tercer archivo que se llamada desde el main.jsx y define lo que el avegador presenta en el DOM.
App.css: Archivo con los estilos css de la pagina App.

views: Contiene todos los archivos con las distitnas vistas generales de la pagina del hospital.
components: Contiene todos los distintos componentes que utiliza la pagina del hospital.
HOC: Contiene todos los Componente de Orden Superior (HOC) que utiliza la pagina del hospital.

Dentro de la carpeta "views" tenemos las siguientes vistas:
home: Pagina con el Componente ReactJs, que lista los servicios médicos disponibles en el hospital.
medical-team: Pagina con el Componente ReactJs, que muestra la información de un doctor (nombre, especialidad, años de experiencia).
contact: Pagina con el Componente ReactJs, que muestra uUn formulario para que los usuarios agenden una cita con un doctor del hospital por la pagina.


Instalaci�n

Clona este repositorio:

git clone https://github.com/VictorRamirezGarcia/Modulo-4---Discusion-y-Analisis-de-Casos.git
cd tu-repo


Instruciones para visualizacion:

Primero debes tener instalado Node.js, para ello en tu consola debes ejecutar el siguiente comando

nvm install node

Luego en tu carpeta donde tengas tu proyecto debes ejecutar los siguientes comandos

cd tu-repo
npm run dev

Luego ingresar en el link indicado por la consola para ingresar a la pagina de inicio de tu aplicacion web con ReactJs.

Ejemplo de como se visualizaria en tu consola:

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help



Actualizaciones README especificar Modulo 4 - Ejercicio Practico 3

Ejercicio Práctico: Integración Completa del Sistema del Hospital con ReactJS

Contexto:
En este ejercicio práctico, los estudiantes aplicarán todo lo aprendido sobre ReactJS para crear
un sistema completo para el hospital. Implementarán componentes reutilizables, optimizarán
el rendimiento, y manejarán interacciones complejas con datos a través de APIs. Todas las
vistas del sistema del hospital (Home, Servicios, Equipo Médico, Citas) deberán integrar
componentes avanzados y técnicas de optimización de ReactJS.



Requisitos:
1. Implementación de Vistas Complejas con ReactJS (1.5 puntos)
- Crea y estructura tres vistas principales del sistema del hospital usando componentes avanzados:
- Vista Principal (Home): Incluye una lista de servicios destacados y una sección con información del hospital.
- Vista del Equipo Médico: Muestra los perfiles de doctores utilizando componentes DoctorCard para cada miembro del equipo, permitiendo filtrar por especialidad.
- Vista de Citas: Implementa un formulario para agendar citas con validaciones y uso de Hooks (useState, useEffect).

Respuesta:
Se han creado tres vistas complejas para representar las tres grandes secciones de la pagina del hospital, las cuales son las siguientes:

Home: la cual incluye el listado de lo servicios medicos que entrega el hospital y una seccion de saludos inicial con informacion del hospital.
Medical Team: la cual muestra el listado de doctores del hospital y ademas permite filtrar a los doctores por su especialidad.
Contact: la cual incluye un formulario para hacer el agendamiento de citas pudiendo ingresar el nombre del paciente, seleccionar el medico y la fecha de la cita.



2. Optimización del DOM Virtual y Uso de Fragmentos (1 punto)
- Usa el DOM Virtual para gestionar eficientemente la actualización de datos en las diferentes vistas, asegurando que solo los elementos necesarios se actualicen.
- Implementa Fragmentos (<React.Fragment>) para evitar añadir nodos innecesarios en el DOM y mejorar la estructura del código en las diferentes secciones del sistema.

Respuesta:
En las vistas de "home" y "medical team" se actualizan eficientemente el DOM Virtual de los servicos medicos y los doctores respectivamente. Ademas en la pagina "home" y sy componente que utiliza hemos utilizando los Fragmentos para evitar añadir nodos innecesarios.



3. Uso de Referencias y Callbacks (1.5 puntos)
- Implementa referencias para interactuar con los elementos del DOM en una de las vistas, como:
- Enfocar automáticamente en un campo de entrada cuando el usuario ingresa a la vista de Citas.
- Usar referencias de callback para gestionar el desplazamiento a diferentes secciones de la vista Home.

Respuesta:
En la vista llamada "Contact" y el componente que llama "AppointmentForm" se usa referencia para crear una constante que referencia el campo del nombre del paciente y luego con dicha referencia se enfoca dicho campo al entrar en la pagina de "Contact".
Tambien se agregaron referencias que apuntan a la seccion del listado de los Doctores desde la pagina de "home". al cual se puede llegar haciendo clic en el boton que dice "Ir a Doctores" desde el home.



4. Manejo de Datos con API REST Simulada (1.5 puntos)
- Simula la obtención de datos del equipo médico y servicios a través de una API REST utilizando fetch y maneja las respuestas de manera asíncrona con async/await.
- Carga los datos en la vista correspondiente (Equipo Médico, Servicios) al montar el componente, utilizando Hooks como useEffect.

Respuesta:
En el componente llamado "ServiceList" se estan cargando los datos de los servicios desde un JSON a traves de un fetch y manejando las respuesta de manera asincrona con async/await



5. Optimización de Rendimiento y Uso de Profiler (1 punto)
- Usa Profiler para identificar posibles problemas de rendimiento y optimiza la renderización de componentes que manejan grandes volúmenes de datos, como la lista de doctores o servicios.

Respuesta:
Se ha utilizado "Profiler" dentro de la pagina "App.jsx" para poder mostrar por consola los tiempos de carga de los distintos componentes de la pagina del hospital. Como se muestra a continuacion:

  const handleRender = (id, phase, actualDuration) => {
    console.log(`${id} render phase: ${phase}, duration: ${actualDuration}`);
  };



6. Comprobación de Tipos con PropTypes (0.5 puntos)
- Implementa PropTypes en todos los componentes para verificar los tipos de datos y asegurar que los valores pasados como props son válidos, evitando errores en la aplicación.

Respuesta: 
Se han implementado PropTypes en todos los componentes para verificar los tidpos de datos y asegurar que los valores pasados sean validos.



Creditos:
Imagenes sacada de buscador Google.