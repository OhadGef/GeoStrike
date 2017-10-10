// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: 'localhost:3000',
  movement: {
    runningSpeed: 0.3,
    walkingSpeed: 0.15,
  },
  createPathMode: false,
  loadTerrain: false,
  terrain: {
    url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
    // url : 'https://assets.agi.com/stk-terrain/v1/tilesets/PAMAP/tiles',
    requestWaterMask: true,
    requestVertexNormals: true
  }
};
