let portfolio = Object.create(Object.prototype, {
  company: { writable: true, enumerable: true, value: "Poopy's"
  },
  specialty: {writable: true, enumerable: true, value: "poop"
  },
   name: {enumerable: true, value: "daddy"},
   portfolio: {enumerable: false, 
    value:[{
        name: "SRC",
        shares: 12,
        valuation: 1200,
    }],
  
},  worth: {
    enumerable: false,
   value: function () {
      let netWorth = this.portfolio;
      let dollarAmount = 0;
      netWorth.forEach(object => {
          dollarAmount += object.valuation
      })
         
      return dollarAmount  

}
},
    purchase: {
    enumerable: false,
    value:  function (ticker, shareAmount, price) {
      portfolio.portfolio.push( 
        {
            name: ticker,
            shares: shareAmount,
            valuation: price,
            sold: false,
        }
      )
 },
    },
    sell: {
        enumerable: false,
       value: function (ticker, shareAmount, price) {
         portfolio.portfolio.push(
             {
                 name: ticker,
                 shares: shareAmount,
                 valuation: price,
                 sold: true
             }
         )
        }
    }  


})
console.log(portfolio.sell("POOP", 4, 3400))
console.log(portfolio.portfolio)
console.log(portfolio.worth())