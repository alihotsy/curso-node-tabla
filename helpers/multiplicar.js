const colors = require('colors');
const fs = require('fs');
const crearArchivo = async({base = 5, l,hasta=10}) => {
    try {
        let salida,consola = ""

        for(let i=1;i<=hasta;i++){
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${colors.blue(base)} x ${colors.red(i)} = ${base*i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(l === 'false'){
            return;
        }
        console.log(consola)
        return `Tabla del ${base} creada`;
    } catch (error) {
        throw error
    }
}
module.exports = {
    crearArchivo
}
