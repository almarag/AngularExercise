describe('Directive Page Test', function() {
    it('should display Hello World Directive', function() {      
        browser.get('http://localhost:8080/directives');
        expect(element(by.className('HelloWorldDirective')).isPresent());
    });
});