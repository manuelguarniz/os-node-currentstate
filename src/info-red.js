// Interfaces de red del equipo
const os = require('os');
const { titulo } = require('./utils');

function infoRed() {
  titulo('INTERFACES DE RED');
  const interfaces = os.networkInterfaces();
  const filas = [];

  for (const [nombre, direcciones] of Object.entries(interfaces)) {
    for (const dir of direcciones) {
      filas.push({
        'Interfaz': nombre,
        'Familia': dir.family,     // IPv4 / IPv6
        'Dirección': dir.address,
        'MAC': dir.mac,
        'Interna': dir.internal ? 'Sí' : 'No',
      });
    }
  }
  console.table(filas);

  const ipLocal = filas.find(f => f.Familia === 'IPv4' && f.Interna === 'No');
  console.log(`IP local principal: ${ipLocal ? ipLocal['Dirección'] : 'No encontrada'}`);
}

if (require.main === module) infoRed();

module.exports = infoRed;
