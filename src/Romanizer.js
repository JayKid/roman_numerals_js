var Romanizer = function() {
    var symbols = [];
    symbols.push({number:'1000', symbol:'M'});
    symbols.push({number:'900', symbol:'CM'});
    symbols.push({number:'500', symbol:'D'});
    symbols.push({number:'400', symbol:'CD'});
    symbols.push({number:'100', symbol:'C'});
    symbols.push({number:'90', symbol:'XC'});
    symbols.push({number:'50', symbol:'L'});
    symbols.push({number:'40', symbol:'XL'});
    symbols.push({number:'10', symbol:'X'});
    symbols.push({number:'9', symbol:'IX'});
    symbols.push({number:'5', symbol:'V'});
    symbols.push({number:'4', symbol:'IV'});
    symbols.push({number:'1', symbol:'I'});
    Romanizer.prototype.symbols = symbols;

};

Romanizer.prototype.romanize = function(arabic_number) {

    var isGreaterThanZero = function(number){
        return number > 0;
    }

    var isStillSubstractable = function(arabic_number, symbol_value){
        return arabic_number - symbol_value >= 0;
    }

    var romanized_number = '';
    while (isGreaterThanZero(arabic_number)) 
    {
        for(index in this.symbols)
        {
            var symbol_value = this.symbols[index].number;
            var symbol = this.symbols[index].symbol;
            while(isStillSubstractable(arabic_number,symbol_value))
            {
                arabic_number -= symbol_value;
                romanized_number += symbol;
            }
        }
    }
    return romanized_number;
}

module.exports = Romanizer;

/* Concerns

1. Cleaner way of storing/iterating through the hash?

2. The for itself, the 'index' variable :(

3. Decreasing the 'arabic_number' (possible wrapping?)/Adding a 'symbol' to the resulting output (possible wrapping/object/property?)

*/