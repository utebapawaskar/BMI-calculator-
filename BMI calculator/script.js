 function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerText = "Please enter valid weight and height.";
    return;
  }

  var heightInMeters = height / 100;
  var bmi = weight / (heightInMeters * heightInMeters);
  var bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  document.getElementById("result").innerText = `Your BMI: ${bmi.toFixed(2)} - ${bmiCategory}`;
}
