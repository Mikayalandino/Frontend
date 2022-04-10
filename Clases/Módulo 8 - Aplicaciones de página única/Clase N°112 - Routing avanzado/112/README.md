Para deployar
O una o la otra, no se pueden hacer ambas

Con Github Pages
crear repo en github y hacer push

npm install gh-pages

modificar package .json:

"homepage": "https://NOMBRE-DE-USUARIO.github.io/NOMBRE-DEL-REPO",
"predeploy": "npm run build", "deploy": "gh-pages -d build"
hacer un git push

npm run build

npm run deploy

Ojo con las rutas! Debemos modificarlas para que comiencen con nuestro repo. Eso no pasa en netlify.

Con Netlify
Crear repo en github y hacer push. El proyecto no debe tener warnings en la consola.
Ir a netlify.com
Ir a "sites"
Ir a "add new site" y elegir "import an existing project"
Elegir github
Elegir nuestro repo
Hacer click en "deploy site" al final
Para cambiar la url: hacer click en "domain settings", luego en "options" y ahi modificar la url.
Esperar un rato y si no anda chequear "deploy". En verde, salio bien. En rojo, salio mal.