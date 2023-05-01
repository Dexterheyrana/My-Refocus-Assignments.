var weight, height, measure, bmi, error ;

function calculate() {
	weight =60;
	height =168;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		console.log("Your BMI is " + bmi + " which means " + "you are Underweight");
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		console.log( "Your BMI is " + bmi + " which means " + "You are Normal" );
	} else if (bmi >= 25 && bmi <= 29.9) {
		console.log("Your BMI is " + bmi + " which means " + "You are Overweight");
	} else if (bmi >= 30) {
		console.log("Your BMI is " + bmi + " which means " + "You are Obese");
	}
	

	
}

calculate();