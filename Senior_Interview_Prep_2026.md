# Senior Angular & JavaScript Interview Prep (5+ Years) - 2026

*Note: This file was generated to help you prepare for senior-level interviews.*

---

## ⚡ JavaScript (Advanced)

### 1. The Event Loop & Concurrency
- **Hands-on Question**: What is the output order and why?
```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise 1'))
       .then(() => console.log('Promise 2'));
console.log('End');
```

### 2. Prototypes & OOP
- **Hands-on Question**: Implement a `CustomArray` class that extends `Array` and adds a `sum()` method.

<!-- class CustomArray extends Array{
    sum(){
        let total = 0;
        for(let i =0; i < this.length; i++){
            total += this[i]
        }
        return total;
    }
}

const arr = new CustomArray(1,2,3)
console.log(arr.sum()) -->

### 3. Proxies & Reactivity
- **Hands-on Question**: Create a reactive object using `Proxy` that logs when properties are modified.

---

## 🅰️ Angular (v17/v18/v19)

### 1. Signals (Core Reactivity)
- **Hands-on Question**: Migrate a `BehaviorSubject` based service to use `signal()`, `computed()`, and `effect()`.

### 2. Deferrable Views (`@defer`)
- **Hands-on Question**: Implement a component that lazy loads a "Heavy Dashboard" only when it scrolls into view using `@defer (on viewport)`.

### 3. Advanced Dependency Injection
- **Hands-on Question**: Use the `inject()` function to create a reusable `DestroyService` or to inject tokens like `DOCUMENT`.

---

## 🔗 Practice Files Created
- [JS_Advanced_Practice.js](file:///d:/javascript/JavaScriptProgram/JS_Advanced_Practice.js)
- [Angular_Signals_Practice.ts](file:///d:/javascript/JavaScriptProgram/Angular_Signals_Practice.ts) (Example Template)

---

## 🎯 Next Steps
1. Open [JS_Advanced_Practice.js](file:///d:/javascript/JavaScriptProgram/JS_Advanced_Practice.js) to start with JavaScript fundamentals.
2. Ask me to "Run a mock interview for Angular Signals" when you are ready.
