# Proyecto: Explorando el módulo `os` de Node.js

Práctica para conocer el módulo nativo `os` (no requiere instalar nada).

## Requisitos
- Node.js 18 o superior (`node -v`)
- Visual Studio Code

## Cómo usarlo
1. Descomprime la carpeta y ábrela en VS Code (**Archivo → Abrir carpeta**).
2. Abre la terminal (**Ctrl + ñ** o **Ctrl + `**).
3. Ejecuta:

| Comando            | Qué hace                                  |
|--------------------|-------------------------------------------|
| `npm start`        | Menú interactivo con todas las opciones   |
| `npm run sistema`  | Datos del SO, usuario, uptime             |
| `npm run memoria`  | Monitor de RAM (5 lecturas cada 2 s)      |
| `npm run cpu`      | Modelo, núcleos y uso por núcleo          |
| `npm run red`      | Interfaces de red e IP local              |
| `npm run reporte`  | Guarda un JSON en `reportes/`             |

También puedes presionar **F5** para depurar con las configuraciones de `.vscode/launch.json`.

## Estructura
```
proyecto-os-node/
├── .vscode/launch.json
├── src/
│   ├── index.js            → menú principal
│   ├── info-sistema.js     → os.platform, os.type, os.userInfo, os.uptime...
│   ├── monitor-memoria.js  → os.totalmem, os.freemem
│   ├── info-cpu.js         → os.cpus, os.loadavg
│   ├── info-red.js         → os.networkInterfaces
│   ├── reporte.js          → combina os + fs + path
│   └── utils.js            → formateo de bytes y tiempo
└── package.json
```

## Retos para los estudiantes
1. Agrega una opción que muestre una alerta si la RAM usada supera el 80 %.
2. Calcula el uso real de CPU comparando dos lecturas de `os.cpus()` con 1 s de diferencia.
3. Exporta el reporte también en formato `.txt` usando `os.EOL`.
4. Muestra `os.constants.signals` y explica para qué sirven.
