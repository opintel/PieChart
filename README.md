# PieChart

Plantilla de visualización tipo Pie.<br>
Descripción de archivos principales:

- `piechart.html` <br>- Archivo html en el que se importan principalmente:
  * Librería de la visualización
  * Archivo `js` con diversas funcionalidades (`js/piechart.js`)
  * **Contendor para la gráfica**, que en este caso se debe definir en el html como: `<div id="pie-chart"></div>`
  * **Contenedor para leyendas**, que debe tener la siguiente estrucutra html:<br>
  ```
  <div class="svgLegend4">
      <div class="legend4"></div>
  </div>
  ```
  
- `partials/piechart_example.json`<br>- **Json base** para definir los valores que mostrará la visualización.<br><br>

- `js/piechart.js`<br>- Javascript que contiene las funcionalidades **necesarias** para dibujar la visualización.

##Json base

El Json que consumirá la visualización debe estar en todo momento dentro del folder `partials` y debe tener asignado el nombre `piechart_example.json`<br>

La **estructura** debe ser igual a la del archivo `piechart_example.json`, si exisite alguna diferencia, por mínima que sea, la gráfica no se visualizará en el navegador.

Además los **nombres** o `keys` de los valores deben ser iguales a los dej Json de ejemplo para que estos se puedan mostrar en la visualización.

**Estructura**

```
[
  {"label": "Alpha", "value": 20},
  {"label": "Beta", "value": 15},
  {"label": "Gamma", "value": 70},
  {"label": "Delta", "value": 40},
  {"label": "Epsilon", "value": 50}
]
```
//Cada objeto del Json es un área del Pie chart

- "label" //Es la etiqueta que se muestra en el tooltip y en las leyendas por cada color
- "value" //Es el valor con que se dibuja cada área del Pie, en el tooltip se muestra como porcentaje
