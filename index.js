// Description:
//   Muestra la restricción vehicular en Santiago y si hay alerta ambiental, pre-emergencia ó emergencia.
//
// Dependencies:
//   moment
//
// Configuration:
//   None
//
// Commands:
//   hubot restriccion|restricción
//
// Author:
//   @juanbrujo

var moment  = require('moment');
var url     = 'http://www.uoct.cl/historial/ultimos-eventos/json/';

module.exports = function(robot) {
  robot.respond(/restricci(o|ó)n/i, function(res) {

    robot.http(url).get()(function (error, response, body) {

      if (!error && response.statusCode == 200) {

        var data = JSON.parse(body);
        var restriccion = data.restriccion;
  
        res.send('Hoy ' + moment(restriccion.hoy.fecha).format('dddd D MMMM YYYY') + ': ' + restriccion.hoy.tipo + '\n - Dígitos sin sello verde: ' + restriccion.hoy.digitos_sin_sello + '\n - Dígitos con sello verde: ' + restriccion.hoy.digitos_con_sello);
        res.send('Mañana ' + moment(restriccion.manana.fecha).format('dddd D MMMM YYYY') + ': ' + restriccion.manana.tipo + '\n - Dígitos sin sello verde: ' + restriccion.manana.digitos_sin_sello + '\n - Dígitos con sello verde: ' + restriccion.manana.digitos_con_sello);
      } else {
        res.send("Error: ", error);
      }

    });
  });
};
