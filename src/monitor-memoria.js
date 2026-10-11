// Monitor de memoria RAM en tiempo real
const os = require('os');
const { formatearBytes, titulo } = require('./utils');

function leerMemoria() {
  const total = os.totalmem();
  const libre = os.freemem();
  const usada = total - libre;
  const porcentaje = ((usada / total) * 100).toFixed(1);
  return { total, libre, usada, porcentaje };
}

function barra(porcentaje, ancho = 30) {
  const lleno = Math.round((porcentaje / 100) * ancho);
  return '█'.repeat(lleno) + '░'.repeat(ancho - lleno);
}

function mostrarMemoria() {
  const m = leerMemoria();
  titulo('MEMORIA RAM');
  console.log(`Total : ${formatearBytes(m.total)}`);
  console.log(`Usada : ${formatearBytes(m.usada)}`);
  console.log(`Libre : ${formatearBytes(m.libre)}`);
  console.log(`[${barra(m.porcentaje)}] ${m.porcentaje}%`);
}

// Si se ejecuta directamente: monitorea cada 2 segundos, 5 veces
if (require.main === module) {
  let veces = 0;
  const intervalo = setInterval(() => {
    console.clear();
    mostrarMemoria();
    veces++;
    console.log(`\nLectura ${veces}/5 (Ctrl+C para salir)`);
    if (veces === 5) clearInterval(intervalo);
  }, 2000);
}

module.exports = { leerMemoria, mostrarMemoria };
