$(function() {
   $( "#consumo" ).change(function() {
      const consumo = $('#consumo').val();
      const result = $('#result');
      const calBotellaS = $('#calBotellaS');
      const calBotellaM = $('#calBotellaM');
      const calBotellaA = $('#calBotellaA');
      const calBotellaFiltranteS = $('#calBotellaFiltranteS');
      const calBotellaFiltranteM = $('#calBotellaFiltranteM');
      const calBotellaFiltranteA = $('#calBotellaFiltranteA');
      const calFiltrosRWS = $('#calFiltrosRWS');
      const calFiltrosRWM = $('#calFiltrosRWM');
      const calFiltrosRWA = $('#calFiltrosRWA');
      
      result.removeClass('d-none');

      const precioGalon = 3;
      const precioBotellaF = 1.6;
      const precioFiltro = 0.8;

      var calculo = function(precioG, valorConsumo, tipoCalculo = null) {
         const options2 = { style: 'currency', currency: 'USD' };
         const numberFormat = new Intl.NumberFormat('en-US', options2);

         switch(tipoCalculo){
            case "m":
               var result = numberFormat.format( (precioG * valorConsumo) * 4 );
            break;
            case "a":
               var result = numberFormat.format( (precioG * valorConsumo) * 48 );
            break;
            default: 
               var result = numberFormat.format( precioG * valorConsumo );
            break;
         }

         return result;
      };

      calBotellaS.text(calculo(precioGalon,consumo));
      calBotellaM.text(calculo(precioGalon,consumo,"m"));
      calBotellaA.text(calculo(precioGalon,consumo,"a"));
      
      calBotellaFiltranteS.text(calculo(precioBotellaF,consumo));
      calBotellaFiltranteM.text(calculo(precioBotellaF,consumo,"m"));
      calBotellaFiltranteA.text(calculo(precioBotellaF,consumo,"a"));
      
      calFiltrosRWS.text(calculo(precioFiltro,consumo));
      calFiltrosRWM.text(calculo(precioFiltro,consumo,"m"));
      calFiltrosRWA.text(calculo(precioFiltro,consumo,"a"));
   });
});