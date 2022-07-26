const alicia = [12, 38, 55];
const bob = [22, 3, 45];

/*Si a[i] > b[i], entonces, Alicia recibe 1 punto.
Si a[i] < b[i], entonces, Bob recibe 1 punto.
Si a[i] = b[i], ninguna persona recibe un punto.*/

function encontrarGanador(a, b) {
    let participante1 = 0;
    let participante2 = 0;
    for (let i = 0; i < alicia.length; i++) {
        if (a[i]>b[i]) {
            participante1++ 
            
        }else (a[i]<b[i]) {
            participante2++;

        }
        
        
    }

}