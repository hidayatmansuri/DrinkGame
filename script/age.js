whatCanIDrink = function(age) {
	if (typeof(age) == 'number' && age <= 0 && age >= 130) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	} else if (typeof(age) == 'number' && age > 0 && age < 14) {
		return "Drink Toddy";
	} else if (typeof(age) == 'number' && age >= 14 && age < 18) {
		return "Drink Coke";
	} else if (typeof(age) == 'number' && age >= 18 && age < 21) {
		 return "Drink Beer";
	} else {
		return "Drink Whisky";
	}
};