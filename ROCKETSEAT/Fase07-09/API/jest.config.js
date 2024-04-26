module.exports = {
  bail: true,//se um teste falhar, ele nao termina de executar
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"//expressão regular para dizer existe um arquivo dentro de qualquer pasta, com qualquer nome que a extensão dele vai ser .spec.js. o inicio serve pra ignorar o node_modules
  ],
  
}