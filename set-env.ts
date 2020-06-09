const writeFile = require('fs').writeFile;

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

require('dotenv').config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   production: ${process.env.PRODUCTION},
   endpoint: '${process.env.ENDPOINT}'
}`;

console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});
