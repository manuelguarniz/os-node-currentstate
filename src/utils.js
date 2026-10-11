// Funciones auxiliares reutilizables

/**
 * Convierte bytes a una unidad legible (KB, MB, GB...).
 */
function formatearBytes(bytes, decimales = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const unidades = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(decimales)} ${unidades[i]}`;
}

/**
 * Convierte segundos a "Xd Xh Xm Xs".
 */
function formatearTiempo(segundos) {
  const d = Math.floor(segundos / 86400);
  const h = Math.floor((segundos % 86400) / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = Math.floor(segundos % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

/**
 * Imprime un título decorado en consola.
 */
function titulo(texto) {
  const linea = '='.repeat(texto.length + 4);
  console.log(`\n${linea}\n  ${texto}\n${linea}`);
}

module.exports = { formatearBytes, formatearTiempo, titulo };
