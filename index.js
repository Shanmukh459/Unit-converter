/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")
convertBtn.addEventListener("click", function() {
    const value = document.getElementById("input-val").value
    
    lenEl.className += "fadeIn"
    lenEl.textContent = getConversion(value, "len")
    volEl.textContent = getConversion(value, "vol")
    massEl.textContent = getConversion(value, "mass")
    
})

function getConversion(val, type) {
    let ans = ""
    if (type === "len") {
        const ft = (val * 3.281).toFixed(3)
        const mt = (val * 0.305).toFixed(3)
        ans += `${val} meters = ${ft} feet | ${val} feet = ${mt} meters`
    } else if (type === "vol") {
        const gal = (val * 0.264).toFixed(3)
        const lt = (val * (3.788)).toFixed(3)
        ans += `${val} liters = ${gal} gallons | ${val} gallons = ${lt} liters`
    } else {
        const pd = (val * 2.204).toFixed(3)
        const kg = (val * (0.454)).toFixed(3)
        ans += `${val} kilos = ${pd} pounds | ${val} pounds = ${kg} kilos`
    }
    return ans
    
}