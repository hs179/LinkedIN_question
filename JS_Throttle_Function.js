function throttle(fn,delay){
    let lastcall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastcall > delay){
            lastcall = now
            fn(...args)
        }
    }
}

function sayHello(msg){
    console.log('Hello', msg)
}

const throttleMsg = throttle(sayHello, 1000)
throttleMsg("harry")
throttleMsg('himanshu')





// import 'zone.js';
// import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { Subject } from 'rxjs';
// import { throttleTime } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Hello from {{ name }}!</h1>

//     <button (click)="sendMessage('harry')">Send Harry</button>
//     <button (click)="sendMessage('himanshu')">Send Himanshu</button>
//   `,
// })
// export class App {
//   name = 'Angular';

//   subject = new Subject<string>();

//   constructor() {
//     // 🔹 Throttle: max 1 emission per second
//     this.subject
//       .pipe(throttleTime(4000))
//       .subscribe(msg => {
//         console.log('Hello', msg);
//       });
//   }

//   sendMessage(msg: string) {
//     this.subject.next(msg);
//   }
// }

// bootstrapApplication(App);
