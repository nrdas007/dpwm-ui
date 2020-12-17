// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'dev',
  api: {},
  sso: {
    validate: true,
    tenant: 'bd5c6713-7399-4b31-be79-78f2d078e543',
    clientId: 'fc0b3a75-2632-4c4f-997d-172db753a8c4'
  }
};
