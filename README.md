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
  <br><br>
  
  
- `partials/piechart_example.json`<br>- **Json base** para definir los valores que mostrará la visualización, se debe respetar la **estructura** y los **nombres** o `keys` de los valores.<br><br>

- `js/piechart.js`<br>- Javascript que contiene las funcionalidades **necesarias** para dibujar la visualización.