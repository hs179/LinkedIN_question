function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const debouncedLog = debounce((msg) => {
    console.log("Logged:", msg);
}, 1000);

debouncedLog("First");
debouncedLog("Second");
debouncedLog("Third");

// After 1 second → Logged: Third


const search = debounce((query) => {
    console.log("Search for:", query);
}, 300);

search("java");
search("javascript");
search("javascript typing");

// After 300ms → Search for: javascript typing

const alertOnce = debounce(() => {
    console.log("Alert!");
}, 2000);

alertOnce();
alertOnce();
alertOnce();

// After 2 seconds → Alert!



