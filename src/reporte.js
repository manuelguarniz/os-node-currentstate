// Genera un reporte JSON del sistema y lo guarda en /reportes
const os = require('os');
const fs = require('fs');
const path = require('path');
const { formatearBytes, formatearTiempo } = require('./utils');

function generarReporte() {
  const reporte = {
    fecha: new Date().toLocaleString('es-PE'),
    equipo: os.hostname(),
    usuario: os.userInfo().username,
    sistema: `${os.type()} ${os.release()} (${os.arch()})`,
    tiempoEncendido: formatearTiempo(os.uptime()),
    cpu: { modelo: os.cpus()[0].model, nucleos: os.cpus().length },
    memoria: {
      total: formatearBytes(os.totalmem()),
      libre: formatearBytes(os.freemem()),
    },
  };

  const carpeta = path.join(__dirname, '..', 'reportes');
  if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta);

  const archivo = path.join(carpeta, `reporte-${Date.now()}.json`);
  fs.writeFileSync(archivo, JSON.stringify(reporte, null, 2) + os.EOL);

  console.log('Reporte generado:', archivo);
  console.log(reporte);
}

if (require.main === module) generarReporte();

module.exports = generarReporte;
