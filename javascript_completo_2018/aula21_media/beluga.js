var blg = (function(){
    var beluga = {};
    
    beluga.$ = document.querySelector.bind(document);
    beluga.$$ = document.querySelectorAll.bind(document);
    
   Array.prototype.getMedia = function(){
        console.log(this);
        //o this é o próprio array
        //return _calcularMedia.apply(this, this);
        /*apply = passar os parâmetros do array. Cada índice do arrray será 
        passado na função como parâmetros.*/
        return _calcularMedia(...this);
        /*com spread versão ES6: o this é um array
        e cada ínsndice do array é passado como argumento para a função

        exemplo:

        console.log(..."mayara");
        >>m a y a r a*/
    };
    
    function _calcularMedia(){        
        let _arr = Array.prototype.map.apply(arguments, (n) => parseFloat(n) );
        let hasNaN = _arr.some( (n) => isNaN(n) ); 
        if(hasNaN) throw new Error('somente números');       
        
        let total = (_arr.reduce(function(total, atual, i){
            return total + atual;
        }) ) / _arr.length;
        return total;
    }
    
    beluga.calcularMedia = _calcularMedia;
    
    function _each(selector, fn){//fn: function
        var _sel = this.$$(selector);//this é o beluga. pega os elementos do DOM
        Array.prototype.forEach.call(_sel, fn);
    }

    beluga.each = _each;
    
    return beluga;
})()