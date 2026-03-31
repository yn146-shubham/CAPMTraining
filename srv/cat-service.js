
module.exports = cds.service.impl(async function () {

// 

  this.on('READ', 'Products', async (req) => {
    const northwind = await cds.connect.to('metadata');
    return northwind.run(req.query);
  });

    this.after("READ", 'Customers', function (req) {

        req.forEach(function (customer) {
            console.log("hello");
            let cardNumber = "4";
            let length = 16;

            // Generate random digits except last check digit
            while (cardNumber.length < (length - 1)) {
                cardNumber += Math.floor(Math.random() * 10);
            }

            // Calculate Luhn Check Digit
            let sum = 0;
            let shouldDouble = true;

            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber[i]);

                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }

                sum += digit;
                shouldDouble = !shouldDouble;
            }

            let checkDigit = (10 - (sum % 10)) % 10;


            customer.creditCardNo = cardNumber + checkDigit;

        });
        return req;

    });

    this.on('readCreditCardNumber', async (req) => {

    try {

          const { Customers } = this.entities;
        const customerData = await SELECT.from(Customers)
      .where({ ID: req.data.Customer });

        return customerData[0].creditCardNo

    } catch (error) {

        console.error("Error reading comments:", error);

        return req.error({
            code: 'READ_COMMENTS_ERROR',
            message: error.message
        });

    }

});


});
