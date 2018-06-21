// This example is the most basic usage of pivotUI()

    $(function(){

      var data = [
                {color: "amarillo", figura: "circulo",total:25},
                {color: "azul", figura: "circulo",total:300},
                {color: "azul", figura: "circulo",total:90},
                {color: "rojo", figura: "triangulo",total:140},
                {color: "rojo", figura: "circulo",total:50},
                {color: "verde", figura: "circulo",total:25},
                {color: "amarillo", figura: "triangulo",total:20},
                {color: "amarillo", figura: "triangulo",total:420},
                {color: "rojo", figura: "rectangulo",total:10},
                {color: "rojo", figura: "circulo",total:0},
                {color: "rojo", figura: "triangulo",total:45},
                {color: "azul", figura: "rectangulo",total:90}
            ];
        var tpl = $.pivotUtilities.aggregatorTemplates;


       var renderers = $.pivotUtilities.renderers;
       //var renderers = $.pivotUtilities.c3_renderers;
       //var renderers = $.pivotUtilities.renderers.Table;
           //$.extend($.pivotUtilities.renderers,
            //$.pivotUtilities.c3_renderers);

        $("#output").pivotUI(
            data,
            {
                rows: ["color"],
                cols: ["figura"],
                aggregators: {
                    "Contar": function() { return tpl.count()() },
                    "Suma": function() { return tpl.sum()(["total"])}
                },
               //Configurar los Renders especificos, en $.pivotUtilities.renderers, se encuentra
               //todos los renders disponibles, se puede agregar
               //otros renders personalizados chart, export, ect..
               //Ver renders extras: https://github.com/nicolaskruchten/pivottable/wiki/Optional-Extra-Renderers
               renderers: {
                    "Tabla": $.pivotUtilities.renderers['Table'],
                    "Tabla con Barras": $.pivotUtilities.renderers['Table Barchart'],
                    "Heatmap": $.pivotUtilities.renderers['Heatmap']
               },
               aggregatorName:"Suma",
               rendererName: "Tabla"
            },
          false,
          "es"
        );
     });
