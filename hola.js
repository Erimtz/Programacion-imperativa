function palabraSecreta(aprobe) {
    let palabrasecreta = "hola";
        if (palabrasecreta == aprobe){
            return "Contraseña correcta, pase por favor";
        }else{
            return "Contraseña incorrecta, verifique y vuelva a intentar mas tarde";
        }
    }

    console.log(palabraSecreta("hola"));