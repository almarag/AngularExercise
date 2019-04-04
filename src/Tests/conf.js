exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'HomePageTest.js',
        'AboutPageTest.js',
        'DirectivesPageTest.js',
        'ServicesPageTest.js'
    ]
};
