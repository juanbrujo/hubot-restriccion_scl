# Hubot-Restricción SCL

**Muestra la restricción vehicular en Santiago y si hay alerta ambiental, pre-emergencia ó emergencia**

[![npm version](https://badge.fury.io/js/hubot-restriccion_scl.svg)](https://badge.fury.io/js/hubot-restriccion_scl)

**[NPM package](https://www.npmjs.com/package/hubot-restriccion_scl)**

### Instalación:

````
$ npm install hubot-restriccion_scl --save
````

Agregar en `external-scripts.json`:

````
[
  ..
  "hubot-restriccion_scl"
]
````

### Uso:

````
hubot> restricción
````

**Ejemplo:**

````
hubot> hubot restricción

hubot> Hoy jueves 1 junio 2017: Alerta Ambiental
 - Dígitos sin sello verde: 7-8-9-0 
 - Dígitos con sello verde: No Aplica
Mañana viernes 2 junio 2017: Restricción Vehicular
 - Dígitos sin sello verde: 1-2-3-4
 - Dígitos con sello verde: -
````

### Licencia:
[MIT](https://opensource.org/licenses/MIT)
