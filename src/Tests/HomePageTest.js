describe('Homepage end-to-end test', function() {
    browser.get('http://localhost:8080/');

    it('should have a title', function() {
      browser.get('http://localhost:8080/');
      expect(browser.getTitle()).toEqual('Welcome');
    });

    it('should display Hello World Directive', function() {      
      browser.get('http://localhost:8080/');
      expect(element(by.className('HelloWorldDirective')).isPresent());
    });

    it('should display message from scope', function() {
      browser.get('http://localhost:8080/');
      var myElement = element(by.className('scopeVariableExample'));
      expect(myElement.getText()).toBe('This is an example of scope variable');
    });
});