/**
 * 🚀 JAVASCRIPT ASYNCHRONOUS PRACTICE QUESTIONS
 *
 * Topics Covered:
 * - Async/Await Error Handling
 * - Promise.all & Promise.allSettled
 * - Custom Promises
 * - Practical Logic: Retry Mechanism
 */

// =============================================================================
// QUESTION 1: The Robust Fetcher (try/catch)
// -----------------------------------------------------------------------------
// Write an async function `safeFetch(url)` that:
// 1. Attempts to fetch data using a mock fetch (provided below).
// 2. Uses try/catch to handle errors.
// 3. If an error occurs, logs "Error fetching [url]: [error message]" and returns null.
// 4. If successful, logs "Data received" and returns the data.

// const mockFetch = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url.includes("error")) reject("Network Failure");
//             else resolve({ id: 1, data: "Success" });
//         }, 1000);
//     });
// };

// Your solution here...

// function safeFetch(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     reject(new Error(`HTTP error! Status: ${response.status}`));
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("data received")
//                 resolve(data)
//             })
//             .catch(error => {
//                 console.log("error while fetching data", error)
//                 resove(null)
//             })
//     })
// }




// safeFetch("https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log(data));


// =============================================================================
// QUESTION 2: Parallel Performance (Promise.all)
// -----------------------------------------------------------------------------
// You have 3 APIs to call. To save time, you want to call them in parallel.
// Write a function `fetchAllData(urls)` that:
// 1. Takes an array of 3 URLs.
// 2. Uses Promise.all to fetch them simultaneously.
// 3. Logs the total time taken (it should be ~1s, not 3s).
// 4. Returns an array of results.

// Your solution here...

// function fetchAllData(urls) {
//     const promise = urls.map(url =>
//         fetch(url).then(res => {
//             if (!res.ok) {
//                 throw new Error("api failed")
//             }
//             return res.json()
//         })
//     )
//     const result = Promise.all(promise);
//     return result;
// }

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/comments"
// ];

// fetchAllData(urls)
//     .then(data => console.log(data))
//     .catch(err => console.error("Error:", err.message));




// =============================================================================
// QUESTION 3: The "Wait for Everyone" (Promise.allSettled)
// -----------------------------------------------------------------------------
// Sometimes some APIs fail, but you still want the results of the ones that worked.
// Write a function `fetchWhatWebCan(urls)` that:
// 1. Takes an array of 3 URLs (where one contains "error").
// 2. Uses Promise.allSettled.
// 3. Filters and returns only the values of the successful promises.

// Your solution here...

// function fetchWhatWebCan(urls) {
//     const promise = urls.map(url => fetch(url).then(res => {
//         if (!res.ok) {
//             throw new Error("failed")
//         }
//         return res.json()
//     }))

//     const result = Promise.allSettled(promise)
//     return result;
// }

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/commentsdsds"
// ];

// fetchWhatWebCan(urls).then(res => {
//     console.log(res[0].value[0]);
//     console.log(res[1].value[0]);
//     console.log(res[2].value[0]);
// }).catch(err => console.log(err))


// =============================================================================
// QUESTION 4: Promisify a Callback (Custom Promise)
// -----------------------------------------------------------------------------
// JavaScript's `setTimeout` uses a callback. Convert it into a Promise-based
// delay function called `wait(ms)`.
// Usage should look like: `await wait(2000); console.log("Done");`

// Your solution here...


// =============================================================================
// QUESTION 5: The "Fetch with Retry" (Logic Challenge)
// -----------------------------------------------------------------------------
// Implement `fetchWithRetry(url, retries)`.
// 1. It should try to call `mockFetch(url)`.
// 2. If it fails, it should decrement `retries` and try again.
// 3. It should stay inside a loop/recursion until it either succeeds or runs out of retries.
// 4. If it runs out of retries, it should throw a final error: "Max retries reached".

// Your solution here...

async function fetchWithRetry(url, retries) {
    try {
        return await mockFetch(url);
    } catch (error) {
        if (retries === 0) {
            throw new Error("Max retries reached");
        }
        return fetchWithRetry(url, retries - 1);
    }
}

function mockFetch(url) {
    return fetch(url).then(res => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
    });
}

fetchWithRetry("https://jsonplaceholder.typicode.com/postsdd", 3)
    .then(data => console.log("Success:", data))
    .catch(err => console.error(err.message));
