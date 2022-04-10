108-9na
Para la clase de hoy y el lunes haremos una web completa en React utilizando todo lo visto hasta ahora:

Componentes
Props
useState
Arrays de objectos con map y key
Elementos de formulario
useEffect con fetch
A elección: Material UI o Sass
Tu web puede tener diseño y tema a elección, pero si querés un ejemplo podés usar la sección de "personajes" de la web de Rick y Morty

Tu web debe tener los siguientes elementos:

Una barra de navegación (que por ahora no tendrá links: los agregaremos en el próximo módulo!)
Una sección principal
Un footer con tu nombre y links a tus redes sociales
Los tres deben ser componentes en App.js

La sección principal debe

hacer un fetch a un endpoint general para traer todos los recursos de determinado tipo. (Si tu API elegida no permite este tipo de busqueda, por ejemplo la API de Mercado Libre o la de maquillajes, debe traer una busqueda predeterminada)
Recibir esos recursos y recorrerlos con un map, retornando un nuevo componente Card que detalle cada recurso.
Una vez finalizada esa sección, agregaremos un componente Busqueda a la sección principal. En Busqueda debe haber un input.

Al buscar algo en el input, debe hacerse un nuevo fetch y actualizarse las tarjetas.
Esta busqueda puede ser al escribir cada caracter o al apretar "enviar", dependiendo de lo que quede mejor con tu API elegida.
El estilado debe hacerse o bien con Sass, o bien con Material UI (u otra librería de React si querés usarla). No uses CSS puro.

El trabajo puede hacerse en grupo, pero tomá en cuenta que esta es la primera oportunidad de practicar React en profundidad por tu cuenta: no pierdas la oportunidad de aprender las cosas que aún no tenés en claro.