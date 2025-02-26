# Crear proyecto react
https://create-react-app.dev/

https://github.com/Klerith/react-intro-javascript/blob/master/src/bases/07-deses-arr.js

# Comandos
Crear:
 npx create-react-app my-app 
Crear con Vite y doc:
https://vitejs.dev/

npm create vite
npm run dev
# NOTAS 
BUSCAR SIEMPRE CON RESPECTO A !NOTA


# Snippets 
rafc crear componente
usf crear state
# Imports
import PropTypes from 'prop-types'

# Components events
https://es.react.dev/reference/react-dom/components/common#react-event-object

# Hooks
https://es.react.dev/reference/react/hooks
--useState para enviar y refrescar
Los hooks funcionan basado en posiciones, como un array, el primero se guarda en la posicion 1, 2, 3
Es recomendable NO, NO guardar states en condiciones para evitar que se pierda la referencia o choquen los states, no es recomendable

# Seccion 5
Temas puntuales de la sección
¿Qué veremos en esta sección?

Introducción a las pruebas

AAA

Arrange - Arreglar

Act - Actuar

Assert - Afirmar

Primeras pruebas

Jest

Expect

toBe

Enzyme

Comandos útiles en la terminal para pruebas

Revisar elementos renderizados en el componente

Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.
# Fin Seccion 5 NOTAS




# Seccion 6
Structuring projects and naming components
https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76


Estructura de archivos
¿Hay una forma recomendada de estructurar los proyectos React?
https://es.legacy.reactjs.org/docs/faq-structure.html


https://legacy.reactjs.org/docs/strict-mode.html
# Fin Seccion 6 NOTAS

# seccion 9
Temas puntuales de la sección
¿Qué veremos en esta sección?

Profundizar en el tema de los Hooks

Crear otros customHooks

useState

useCounter - Personalizado

useEffect y sus precauciones

useRef

useFetch - Personalizado + optimizaciones

useLayoutEffect

Memo

useMemo

useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.

Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.

### para actualizar dentro de un objeto
<!-- <button className='btn btn-info' onClick={() => setCounter({
                    ...state,
                    ["counter1"]: state.counter1 + 1
                    })}>+1</button> -->

# Fin Seccion 9 NOTAS

# Use Effect --> para invocar efectos secundarios 
## utilizar el effect por cada cambio que ocupe, no es necesario uno para todos, se invoca cada vez que ocupe, es mejor tenerlo separado
<!-- useEffect(() => {
   first código que se ejecuta


    la segunda parte es para saber cuando se limpia o no carga un componente, para limpiar o destruir
    return () =>{

        second
    }

}, dependencia(lo que mandamos a llamar o disparar, si lo mando [], no se invoca el useEffect, solo la primera vez que se monta) ) -->