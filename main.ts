// BMI calculator (Body Mass Index)
// create function for calculateBMI 

function calculateBMI(weightKg: number , heightM: number): number{
    // BMI formula weight / height * height 
    return weightKg / (heightM * heightM);
}
// create another function for interpretiationBMI 
function interpretBMI(bmi : number): String {
    if (bmi < 18.5) {
        return "UnderWeight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "NormalWeight";
    } else if (bmi >= 25 && bmi < 30) {
        return "OverWeight";
    } else {
        return "Obese";
    } 
}

const weight = 65;
const height = 1.75;

// now we call our function 

const bmi = calculateBMI(weight , height);

const bmiCategory = interpretBMI(bmi);

console.log(`BMI value is : ${bmi} ${bmiCategory}`);