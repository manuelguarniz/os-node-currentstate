// Información de los procesadores (núcleos) y carga
const os = require('os');
const { titulo } = require('./utils');

function infoCPU() {
  const cpus = os.cpus();
  titulo('PROCESADOR (CPU)');

  console.log(`Modelo  : ${cpus[0].model}`);
  console.log(`Núcleos : ${cpus.length}`);
  console.log(`Paralelismo disponible: ${os.availableParallelism ? os.availableParallelism() : cpus.length}`);

  // Uso de cada núcleo desde que se encendió el equipo
  const tabla = cpus.map((cpu, i) => {
    const t = cpu.times;
    const total = t.user + t.nice + t.sys + t.idle + t.irq;
    const uso = (((total - t.idle) / total) * 100).toFixed(1);
    return { 'Núcleo': i, 'Velocidad (MHz)': cpu.speed, 'Uso %': uso };
  });
  console.table(tabla);

  // loadavg solo tiene valores reales en Linux/macOS (en Windows devuelve [0,0,0])
  const [c1, c5, c15] = os.loadavg();
  console.log(`Carga promedio (1, 5, 15 min): ${c1.toFixed(2)}, ${c5.toFixed(2)}, ${c15.toFixed(2)}`);
  if (os.platform() === 'win32') console.log('(En Windows, loadavg siempre devuelve 0)');
}

if (require.main === module) infoCPU();

module.exports = infoCPU;
