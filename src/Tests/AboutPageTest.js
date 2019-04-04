describe('About Page Test', function() {
    it('should display scope variables for about page', function() {
        browser.get('http://localhost:8080/about');
        var author = element(by.id('author'));
        expect(author.getText()).toBe('Alejandro Martinez Aguirre');
        var email = element(by.id('email'));
        expect(email.getText()).toBe('alejandro.martinez@unosquare.com');
    });
});