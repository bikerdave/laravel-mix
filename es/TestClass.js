export default class TestClass {

    constructor() {
        console.log('class loaded');
        self.property = 'a property';
    }

    normalMethod(prefix) {
        console.log(prefix + ' ' + self.property);
    }

    static staticMethod() {
        console.log('class method ran');
    }

}
