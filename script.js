const currenyEl_one = document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one')

const currenyEl_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')



//fetch new currency rates whenever an even is fired inside the DOM

const calculate = () => {

    const currency_one = currenyEl_one.value;
    const currency_two = currenyEl_two.value;
    const amount_one = amountEl_one.value;

    fetch(`https://v6.exchangerate-api.com/v6/e98c6ef88fae484fea0b00a1/latest/${currency_one}`)
        .then(res => res.json())
        .then(res => {
            let rate = res.conversion_rates[currency_two]
            console.log(rate);
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            amountEl_two.value = +amount_one * rate
        })
        .catch(
            console.log('error')
        )
}

currenyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)


currenyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)
