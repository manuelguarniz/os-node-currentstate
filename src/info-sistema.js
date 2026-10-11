// Información general del sistema operativo
const os = require('os');
const { formatearTiempo, titulo } = require('./utils');

function infoSistema() {
  titulo('INFORMACIÓN DEL SISTEMA');

  const usuario = os.userInfo();

  console.table({
    'Plataforma': os.platform(),          // win32, linux, darwin
    'Tipo de SO': os.type(),              // Windows_NT, Linux, Darwin
    'Versión': os.release(),
    'Arquitectura': os.arch(),            // x64, arm64
    'Nombre del equipo': os.hostname(),
    'Usuario': usuario.username,
    'Carpeta personal': os.homedir(),
    'Carpeta temporal': os.tmpdir(),
    'Tiempo encendido': formatearTiempo(os.uptime()),
    'Fin de línea (EOL)': JSON.stringify(os.EOL),
  });
}

if (require.main === module) infoSistema();

module.exports = infoSistema;
