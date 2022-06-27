const calories = document.querySelector(".bmr-calculator .result .calories");
const calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
const age = document.querySelector(".bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const err = document.querySelector(".error-message");

// BMR = 10*weight + 6.25*height - 5*age + 5 (For Male)
// BMR = 10*weight + 6.25*height - 5*age - 161 (For Female)

const calculateBMR = (weight, height, age, gender) =>{
    if(gender == "male"){
        return 10*weight + 6.25*height - 5*age + 5;
    }
    else{
        return 10*weight + 6.25*height - 5*age - 161;
    }
};

calculateBtn.addEventListener('click' , ()=>{
    if(age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")){
        err.classList.add("active");
    }

    let genderValue = document.querySelector(".bmr-calculator form input[name = 'gender']:checked").value;
    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);
    calories.innerHTML = BMR;
});

// Input validation

age.addEventListener('input', (e)=>{
    let ageValue = e.target.value;

    if(!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100){
        age.classList.add("invalid");
    }
    else{
        age.classList.remove("invalid");
    }

});


height.addEventListener('input', (e)=>{
    let heightValue = e.target.value;

    if(!heightValue || isNaN(heightValue) || heightValue < 0){
        height.classList.add("invalid");
    }
    else{
        height.classList.remove("invalid");
    }

});


weight.addEventListener('input', (e)=>{
    let weightValue = e.target.value;

    if(!weightValue || isNaN(ageValue) || weightValue < 0){
        weight.classList.add("invalid");
    }
    else{
        weight.classList.remove("invalid");
    }

});