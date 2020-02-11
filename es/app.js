// lib
import objectFit from 'object-fit-images';

// other
import TestClass from './TestClass';

(() => {
    objectFit();

    const loaded = true;
    if (loaded) {
        console.log('Hello world');

        let test = new TestClass();

        test.normalMethod('This is');

        TestClass.staticMethod();
    }
})();
