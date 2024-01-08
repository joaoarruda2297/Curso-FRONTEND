import './utils.js' // importando o arquivo utils.js ja faz com que ele seja executado

//eu posso tbm importar uma variável por meio de:
import qualquerNome from './utils.js' // qualquerNome é o nome que eu quero dar para a variável que eu estou importando
alert(qualquerNome) // 10

//exemplo de exportação de função
/*export dafault function () {
    return 'alo'
}
só não se esqueça de na hora de chamar ela na main precisa ser qualquerNome() ESTRITAMENTE COM OS PARENTESES*/

/* se precisar mandar duas variáveis voce pode usar:
export {valor1, valor 2}
e na hora de importar:
import {valor1, valor2} from './utils.js'
A ORDEM NAO IMPORTA, POIS SERA CONFERIDO PELO NOME*/

/* mas se eu ainda quiser fazer varios export, é possivel por meio de:
export const today = Date.now()
e para importar:
import {today} from './utils.js'
*/

//se eu tenho varios export em um arquivo, eu posso fazer um import no outro arquivo dessa forma:
//import * as utils from './utils.js'