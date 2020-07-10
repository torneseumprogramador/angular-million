// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiClientes:"https://service-clientes-stat.herokuapp.com",
  apiAcoes:"https://acoes-service-prod.herokuapp.com",
  apiFundo:"https://service-fundoimobiliario-stat.herokuapp.com",
  apiUsuario:"https://service-usuarios-stat.herokuapp.com",
  apiTesouro:"https://service-tesouromillion-stage.herokuapp.com",
  apiCDB:"http://localhost:3000",
  // apiCDB:"https://cdb-service.herokuapp.com",
  token:'123456',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
