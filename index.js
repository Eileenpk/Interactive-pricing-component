// global variables //
const silderPageviews = document.getElementById('slider-pageviews')
const pageviews = document.querySelector('h2')
const price = document.querySelector('h3')
const billingCycle = document.getElementById('month-or-year')
const monthOrYear = document.getElementById('billing-cycle')
let cost = 0

// toggle the year billing and adds discount//
const yearBilling = (baseCost) => {
   let billingValue = billingCycle.checked
   if(billingValue) {
    discount = baseCost / 4
    cost = (cost - discount) * 12
    monthOrYear.textContent = `/ year`
   }
   else if (!billingValue) {
    monthOrYear.textContent = `/ month`
   }
   
   return cost
}

// as each step in the slider increases adds the green color to the bar
const increaseSliderValue = () => {
    let sliderColorFill = silderPageviews.value * 25

    silderPageviews.style.background = `
        linear-gradient(to right,
        hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 
        ${sliderColorFill}%, hsl(224, 65%, 95%) ${sliderColorFill}%, hsl(224, 65%, 95%) 100%)`
   changePageviewText()
}

// Adds the number to the pageviews, and changes the price per month
const changePageviewText = () => {

    switch (silderPageviews.value) {
        case '0':
            pageviews.textContent = `10K PAGEVIEWS`
            cost = 8      
        break;

        case '1': 
            pageviews.textContent = `50K PAGEVIEWS`
            cost = 12
        break;

        case '2': 
            pageviews.textContent = '100K PAGEVIEWS'
            cost = 16
        break;

        case '3': 
            pageviews.textContent = '500K PAGEVIEWS'
            cost = 24
        break;

        case '4': 
            pageviews.textContent = '1M PAGEVIEWS'
            cost = 36
        default:
    } 
    price.textContent= `$${yearBilling(cost)}.00`
}


// Event Listeners //
silderPageviews.addEventListener('change', increaseSliderValue)
billingCycle.addEventListener('click', changePageviewText)



