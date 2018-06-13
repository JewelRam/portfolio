let portfolio = Object.create({
    company: {
        writable: true, enumerable: true, value: "Company Name"
    },
    specialty: {
        writable: true, enumerable: true, value: "The Specialty"
    },
    name: { enumerable: true, value: "Name" },
    portfolio: {
        enumerable: false,
        value: [{
            name: "SRC",
            shares: 12,
            valuation: 1200,
        }],

    }, worth: {
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
        value: function (ticker, shareAmount, price) {
            this.portfolio.push(
                {
                    name: ticker,
                    shares: shareAmount,
                    valuation: price,
                    sold: true,
                }
            )
        },
    },
    sell: {
        enumerable: false,
        value: function (ticker, shareAmount, price) {
            this.portfolio.push(
                {
                    name: ticker,
                    shares: shareAmount,
                    valuation: price,
                    sold: false
                }
            )
        }
    }


})
console.log(portfolio.sell("POOP", 4, 3400))
console.log(portfolio.portfolio)
console.log(portfolio.worth())

// challenge
const fragment = document.createDocumentFragment()
const articles = document.querySelector('#art')

for (let key in portfolio) {

    const section = document.createElement('section')
    section.textContent = `${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${portfolio[key]}`

    fragment.appendChild(section)
}