var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
let i = 0; let j=0; let k =0;
let resultado = '';
let ext = ''

function accion(){
    
    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                const element = pronoun[i] + adj[j] + noun[k]; 
               //console.log('https://www.' + element + '.com') ;
               ext = document.getElementsByName("inputoptiene")[0].value;
               resultado += 'www.' + element + '.' + ext + '<br />' 
            } 
        }
    }
   
    document.querySelector("#respuesta").innerHTML = resultado;
}



