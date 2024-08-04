<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Intro</title>

    <!-- Cargat React para cargarlo-->
    <!-- ##### AS YOU ARE STARTING TO LEARN, USE THE NEWER VERSION (18) #######-->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>

    <div id="root">

    </div>
    <!-- Se debe poner el text/babel para que sea reconocido -->
    <script type="text/babel">
        /*!NOTA pUNTO Y COMA SIEMPRE*/
        const divRoot= document.querySelector("#root");
        const nombre = "Goku";
        const h1Tag = <h1>Hola soy {nombre}</h1>;

        ReactDOM.render(h1Tag, divRoot)
    </script>
</body>

</html>