//Ejercicio 1
const readline = require('readline');
const fs = require('fs');
const data = '';

fs.writeFile('ejercicio.txt', data, (err) => { 
  if (err) throw err; 
  //console.log('Archivo creado correctamente \n'); 
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduzca el contenido: \n', (contenido) => {
  // Guardamos el contenido en una variable
  const texto = contenido;

  fs.writeFile('ejercicio.txt', texto, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Archivo escrito correctamente!');
  });

  // Cerramos la interfaz readline
  rl.close();
});

//Ejercicio 2

const fs = require('fs'); 
fs.readFile('ejercicio.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});

//Ejercicio 3

const fs = require('fs');
fs.mkdir('CarpetaJuan', (err) => {
  if (err) throw err; 
  console.log('Directorio creado correctamente');
  fs.copyFileSync('ejercicio.txt', 'CarpetaJuan/archivo-copiado.txt');
});

