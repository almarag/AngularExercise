describe('Services Page Test', function() {
    it('should visualize JSON data in table', function() {
        browser.get('http://localhost:8080/services');

        $$('.messageLine').then(function(items) {                
                expect(items.length).toBe(3);
        });
    });
});