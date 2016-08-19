  
  var jsonPiechart;
  var total = 0;

  $.ajax({
    type: "GET",
    url: "partials/piechart_example.json",
    async: false,
    success: function(data){
      if (validaJsonPieChart(data)){
          jsonPiechart = data;
          jsonPiechart.forEach(function(d) {
            total = total + d.value;
          });
      }
    }
  });

	//Escala de colores
  var categoryDatos = [
    "#00cc99",
    "#ff6666",
    "#663399",
    "#474747",
    "#ff9900",
    "#0099ff",
    "#333399",
    "#000000",
    "#006666",
    "#ff6699",
    "#666699",
    "#999999"
  ];

  var percentageFormat = d3.format("%");

  var w = "100%";
  var h = 400;
  var r = h/2;
  var color = d3.scale.ordinal()
  .range(categoryDatos);

  var data = jsonPiechart;


  var vis = d3.select('#pie-chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
  var pie = d3.layout.pie().value(function(d){return d.value;});

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
  arcs.append("svg:path")
      .attr("fill", function(d, i){
          return color(i);
      })
      .attr("d", function (d) {
          // log the result of the arc generator to show how cool it is :)
          return arc(d);
      });

  var divTooltip = d3.select("#pie-chart").append("div").attr("class", "toolTip");

  arcs.on("mousemove", function(d){
    divTooltip.style("left", d3.event.pageX-100+"px");
    divTooltip.style("top", d3.event.pageY-140+"px");
    divTooltip.style("display", "inline-block");
    var x = d3.event.pageX, y = d3.event.pageY
    var elements = document.querySelectorAll(':hover');
    l = elements.length
    l = l-1
    elementData = elements[l].__data__.data;
    var result = (elementData.value / total) * 100;
    divTooltip.html("<span class='title-pop'>"+elementData.label+": </span><span>"+result.toFixed(2)+"%</span>");
  })

  arcs.on("mouseout", function () {
    divTooltip.style("display", "none");
  });

  //////////////////// Horizontal Legend ////////////////
  var dataset = [];

  jsonPiechart.forEach(function(value) {
    dataset.push(value.label);
  });

      var svgLegned4 = d3.select(".svgLegend4").append("svg")
      .attr("width", w)
      .attr("height", h)

      var dataL = 0;
      var offset = 100;

      var legend4 = svgLegned4.selectAll('.legend4')
      .data(dataset)
      .enter().append('g')
      .attr("class", "legend4")
      .attr("transform", function (d, i) {
        if (i === 0) {
          dataL = d.length + offset 
          return "translate(0,0)"
        } else { 
          var newdataL = dataL
          dataL +=  d.length + offset
          return "translate(" + (newdataL) + ",0)"
        }
      })

      legend4.append('rect')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 20)
      .attr("height", 20)
      .style("fill", color);
      legend4.append('text')
      .attr("x", 25)
      .attr("y", 15)
      //.attr("dy", ".35em")
      .text(function(d) { return d; })
      .attr("class", "textselected")
      .style("text-anchor", "start")
      .style("font-size", 15)

      // Validacion de Json
      function validaJsonPieChart(json){
          var json_fields = ['label', 'value'],
              json_types = {'label': 'string', 'value': 'number'};

          for(var elemento in json){
              var llaves_elemento = Object.keys(json[elemento]);
              for(var k in llaves_elemento ){
                  if(!json_fields.some(elem => elem === llaves_elemento[k])){
                      alert("Error en la estructura del JSON: Campo invalido: " + llaves_elemento[k]);
                      return false;
                  }

                  if(typeof json[elemento][llaves_elemento[k]] !== json_types[llaves_elemento[k]]){
                      alert("Error en la estructura del JSON: El campo " + llaves_elemento[k] + " debe ser de tipo " + json_types[llaves_elemento[k]]);
                      return false;   
                  }
              }
          }
          return true;
      }

