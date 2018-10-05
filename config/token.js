function validarCabecalho(header){
    const token = 'a2djgkr84r5r48fr59e84fw5fag2g16r';
    let   valido= false;
    if((header) && (header===token)){        
        valido = true;
    }

    return valido;    
}

module.exports = validarCabecalho;

