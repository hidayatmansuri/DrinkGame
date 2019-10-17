describe('whatCanIDrink', function() {
	beforeEach(function() {
		age = new whatCanIDrink;
	});

	describe('Age calculation', function() {
		it('should exist', function() {
			expect(whatCanIDrink).toBeDefined();
		});
		it("should return a Message", function() {
			age.add(13);
			expect(age.value).toBe('Sorry. I can’t tell what drink because that age is incorrect!');
		});
		it("should return a Message", function() {
			age.add(17);
			expect(age.value).toBe('Drink Toddy');
		});
		it('Should return a Message;. function() {
			age.add(20);
			expect(age.value).toBe('Drink Beer');
		});
		it('should return a Mwssage', function() {
			age.add(30);
			expect(age.value).toBe('Drink Whisky');
		});
	{);
});