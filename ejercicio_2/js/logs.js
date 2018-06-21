  // processing the data from log APIs


  // This example is the most basic usage of pivotUI()
    $(function(){
        var tpl = $.pivotUtilities.aggregatorTemplates;
        var renderers = $.pivotUtilities.renderers;

       //var renderers = $.pivotUtilities.c3_renderers;
       //var renderers = $.pivotUtilities.renderers.Table;
           //$.extend($.pivotUtilities.renderers,
            //$.pivotUtilities.c3_renderers);


        $("#output").pivotUI(
            data,
            {
                rows: ["category"],
                cols: ["date"],

                aggregators: {
                    "Values": function() { return tpl.sum()(["value"])}
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
