# PieChart Responsive

Plantilla de visualización tipo Pie.<br>
Descripción de archivos principales:

- `piechart.html` <br>- Archivo html en el que se importan principalmente:
  * Librería de la visualización
  * Archivo `js` con diversas funcionalidades (`js/piechart.js`)
  * **Contendor para la gráfica**, que en este caso se debe definir en el html como: `<div id="viz"></div>`
  
- `partials/piechart_example.json`<br>- **Json base** para definir los valores que mostrará la visualización.<br><br>

- `js/piechart.js`<br>- Javascript que contiene las funcionalidades **necesarias** para dibujar la visualización.

##Json base

El Json que consumirá la visualización debe estar en todo momento dentro del folder `partials` y debe tener asignado el nombre `piechart_example.json`<br>

La **estructura** debe ser igual a la del archivo `piechart_example.json`, si exisite alguna diferencia, por mínima que sea, la gráfica no se visualizará en el navegador.

Además los **nombres** o `keys` de los valores deben ser iguales a los del Json de ejemplo para que estos se puedan mostrar en la visualización.

**Estructura**

```
{
  "unidad": "Especies",
  "ancho": 480,
  "valores": [
    {"label": "zorro", "value": 81326},
    {"label": "Gato", "value": 96326},
    {"label": "Perro", "value": 88326},
    {"label": "Raton", "value": 18326},
    {"label": "Cobra", "value": 68326},
    {"label": "Leon", "value": 23326},
    {"label": "Tigre", "value": 21326},
    {"label": "Cuervo", "value": 74326},
    {"label": "Elefante", "value": 71326},
    {"label": "Mono", "value": 17326}
  ]
}
```
//Cada objeto dentro de valores del Json es un área del Pie chart

- "unidada" //Etiqueta que se muestra en la información del Tooltip, por ejemplo: personas, autos, índice, valor, pesos, gramos.
- "ancho" //Se puede definir el ancho en pixeles para la gráfica, por default queda en 480.
- "label" //Es la etiqueta que se muestra en el tooltip y en las leyendas por cada color
- "value" //Es el valor con que se dibuja cada área del Pie, en el tooltip se muestra como porcentaje
