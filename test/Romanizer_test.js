should = require( "should" );

Romanizer = require( "../src/Romanizer" );


describe( "Romanizer Class", function(){
    it( "Should exist", function(){
        Romanizer.should.be.an.instanceOf( Function );
    } );

    describe("#romanize", function() {

        beforeEach(function() {
            this.RomanNumeralConversionMachine = new Romanizer();
        });

        it("should return I when given 1", function(){
            this.RomanNumeralConversionMachine.romanize(1).should.be.eql("I");
        });

        it("should return II when given 2", function(){
            this.RomanNumeralConversionMachine.romanize(2).should.be.eql("II");
        });

        it("should return III when given 3", function(){
            this.RomanNumeralConversionMachine.romanize(3).should.be.eql("III");
        });

        it("should return IV when given 4", function(){
            this.RomanNumeralConversionMachine.romanize(4).should.be.eql("IV");
        });

        it("should return V when given 5", function(){
            this.RomanNumeralConversionMachine.romanize(5).should.be.eql("V");
        });

        it("should return VI when given 6", function(){
            this.RomanNumeralConversionMachine.romanize(6).should.be.eql("VI");
        });

        it("should return IX when given 9", function(){
            this.RomanNumeralConversionMachine.romanize(9).should.be.eql("IX");
        });

        it("should return X when given 10", function(){
            this.RomanNumeralConversionMachine.romanize(10).should.be.eql("X");
        });

        it("should return L when given 50", function(){
            this.RomanNumeralConversionMachine.romanize(50).should.be.eql("L");
        });

        it("should return C when given 100", function(){
            this.RomanNumeralConversionMachine.romanize(100).should.be.eql("C");
        });

        it("should return D when given 500", function(){
            this.RomanNumeralConversionMachine.romanize(500).should.be.eql("D");
        });

        it("should return M when given 1000", function(){
            this.RomanNumeralConversionMachine.romanize(1000).should.be.eql("M");
        });

        it("should return XC when given 90", function(){
            this.RomanNumeralConversionMachine.romanize(90).should.be.eql("XC");
        });

        it("should return XL when given 40", function(){
            this.RomanNumeralConversionMachine.romanize(40).should.be.eql("XL");
        });

        it("should return CD when given 400", function(){
            this.RomanNumeralConversionMachine.romanize(400).should.be.eql("CD");
        });

        it("should return CM when given 900", function(){
            this.RomanNumeralConversionMachine.romanize(900).should.be.eql("CM");
        });

        it("should return CXCVIII when given 198", function(){
            this.RomanNumeralConversionMachine.romanize(198).should.be.eql("CXCVIII");
        });

        it("should return CLXXXVIII when given 188", function(){
            this.RomanNumeralConversionMachine.romanize(188).should.be.eql("CLXXXVIII");
        });
    });
});