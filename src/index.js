// Menú principal interactivo
const readline = require('readline');
const infoSistema = require('./info-sistema');
const { mostrarMemoria } = require('./monitor-memoria');
const infoCPU = require('./info-cpu');
const infoRed = require('./info-red');
const generarReporte = require('./reporte');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
  console.log(`
===== EXPLORADOR DEL MÓDULO OS =====
 1. Información del sistema
 2. Memoria RAM
 3. Procesador (CPU)
 4. Red
 5. Generar reporte JSON
 0. Salir`);
  rl.question('Elige una opción: ', (op) => {
    switch (op.trim()) {
      case '1': infoSistema(); break;
      case '2': mostrarMemoria(); break;
      case '3': infoCPU(); break;
      case '4': infoRed(); break;
      case '5': generarReporte(); break;
      case '0': console.log('¡Hasta luego!'); return rl.close();
      default: console.log('Opción no válida');
    }
    menu();
  });
}

menu();
