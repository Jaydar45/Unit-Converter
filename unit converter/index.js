let solution = document.getElementById("input-el")
solution.addEventListener("change",convert)
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


function convert(){
    let metersToFeet =  (Number(solution.value) * 3.28084).toFixed(3)
    let feetToMeters = (Number(solution.value) * 0.3048).toFixed(3) 
    let litersToGallons = (Number(solution.value) *  0.264172).toFixed(3) 
    let gallonsToLiters = (Number(solution.value) * 3.785411784).toFixed(3) 
    let kilosToPounds = (Number(solution.value) * 2.20462).toFixed(3)
    let poundsToKilos = (Number(solution.value) * 0.453592).toFixed(3)

lengthEl.textContent = solution.value + " meters = " + metersToFeet + " feet | " + solution.value + " feet =  " + feetToMeters + " meters"
volumeEl.textContent = solution.value + " liters = " + litersToGallons + " gallons | " + solution.value + " gallons = " + gallonsToLiters + " liters"
massEl.textContent = solution.value + " kilos = " + kilosToPounds + " pounds | " + solution.value + " pounds = " + poundsToKilos + " kilos"
}
