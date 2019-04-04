describe('Angular Demo App', function() {
    browser.get('http://localhost:8080/');

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Welcome');
    });

    it('should display Hello World Directive', function() {
      expect(element(by.className('HelloWorldDirective')).isPresent());
    });

    it('should display message from scope', function() {
      var myElement = element(by.className('scopeVariableExample'));
      expect(myElement.getText()).toBe('This is an example of scope variable');
    });
});