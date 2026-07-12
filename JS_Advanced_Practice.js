/**
 * 🚀 SENIOR JAVASCRIPT PRACTICE
 * 
 * CHALLENGE 1: The Event Loop
 * Predict the output, then run the code.
 */
function challenge1() {
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    Promise.resolve().then(() => console.log('C'));
    console.log('D');
}

// challenge1(); // Uncomment to test

/**
 * CHALLENGE 2: Custom Extensibility
 * Create a CustomArray that adds a multi-sum feature.
 */
class CustomArray extends Array {
    sum() {
        return this.reduce((acc, current) => acc + (typeof current === 'number' ? current : 0), 0);
    }
}

/**
 * CHALLENGE 3: Proxy-based Reactivity
 * Implement a basic observer pattern using Proxy.
 */
function createReactive(obj) {
    // Your implementation here...
}
