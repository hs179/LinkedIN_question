Filename	What to do (Input → Output)
Array_Flatten_Arbitrary_Depth.js	Input: nested array + depth [1,[2,[3,[4]]]], 2 → Output: [1,2,3,[4]]. Flatten only up to given depth, no flat().
Array_Longest_Consecutive_Sequence.js	Input: [100,4,200,1,3,2] → Output: 4 (sequence 1,2,3,4). Find longest run of consecutive numbers, order doesn't matter in input.
Array_Merge_Overlapping_Intervals.js	Input: [[1,3],[2,6],[8,10]] → Output: [[1,6],[8,10]]. Merge intervals that overlap.
Array_Three_Sum_Zero.js	Input: [-1,0,1,2,-1,-4] → Output: [[-1,-1,2],[-1,0,1]]. All unique triplets summing to 0.
Array_Rotate_Matrix_90.js	Input: [[1,2],[3,4]] → Output: [[3,1],[4,2]]. Rotate 2D matrix clockwise in-place.
Array_Kth_Largest_Smallest.js	Input: [3,2,1,5,6,4], k=2 → Output: 5. Find k-th largest without full sort (heap/quickselect approach).
Array_Partition_Even_Odd.js	Input: [3,1,2,4] → Output: [2,4,3,1] (evens first, stable order). Rearrange in-place.
Array_Equilibrium_Index.js	Input: [-7,1,5,2,-4,3,0] → Output: 3 (index where left sum = right sum).
Array_FlatMap_Polyfill.js	Input: [1,2,3], fn x => [x, x*2] → Output: [1,2,2,4,3,6]. Implement flatMap manually.
Array_Shuffle_Fisher_Yates.js	Input: [1,2,3,4,5] → Output: same elements, randomized order. Implement Fisher-Yates algorithm.
Array_Common_Elements_N_Arrays.js	Input: [[1,2,3],[2,3,4],[2,3,5]] → Output: [2,3]. Common elements across all given arrays.
Array_Remove_Duplicates_Sorted_InPlace.js	Input: [1,1,2,2,3] → Output: [1,2,3] (in-place, return new length).
Array_Max_Product_Two_Numbers.js	Input: [1,5,3,9,2] → Output: 45 (9*5). Max product of any two elements.
Array_Pagination_Logic.js	Input: array, pageSize=3, pageNum=2 → Output: items 4–6. Chunk + fetch specific page.
Array_Find_Peak_Element.js	Input: [1,3,20,4,1,0] → Output: 20 (or its index). Element greater than both neighbors.
Array_Merge_Objects_By_Key_SQLJoin.js	Input: two arrays of objects with common id → Output: merged array combining matching objects.
Array_Custom_Sort_Implementation.js	Input: [5,3,8,1] → Output: [1,3,5,8]. Implement comparison-based sort (bubble/merge/quick) manually.
Array_Find_Missing_And_Duplicate.js	Input: [1,2,2,4] (should be 1-4) → Output: {missing: 3, duplicate: 2}. One pass.
String
Filename	What to do (Input → Output)
String_Longest_Common_Prefix.js	Input: ["flower","flow","flight"] → Output: "fl".
String_Can_Rearrange_Palindrome.js	Input: "carrace" → Output: true (can be rearranged into a palindrome — at most 1 odd char count).
String_Template_Parser.js	Input: "Hello {name}", {name:"Raj"} → Output: "Hello Raj". Replace placeholders with data values.
String_Word_Frequency_Counter.js	Input: "the cat sat on the mat" → Output: {the:2, cat:1, sat:1, on:1, mat:1}.
String_CamelCase_SnakeCase_Convert.js	Input: "helloWorld" → Output: "hello_world" and reverse "hello_world" → "helloWorld".
String_First_Repeating_Character.js	Input: "swiss" → Output: "s" (first char that repeats, scanning left to right).
String_Balanced_Multiple_Brackets.js	Input: "{[()]}" → Output: true; Input: "{[(])}" → Output: false.
String_Trim_Polyfill.js	Input: " hello " → Output: "hello". Implement .trim() manually.
String_Run_Length_Encode_Decode.js	Input: "aaabb" → Output: "a3b2", and decode back "a3b2" → "aaabb".
String_Minimum_Window_Substring.js	Input: s="ADOBECODEBANC", t="ABC" → Output: "BANC". Smallest substring containing all chars of t.
String_One_Edit_Distance_Apart.js	Input: "cat", "cats" → Output: true (one insert away).
String_Number_To_Words.js	Input: 123 → Output: "one hundred twenty three".
String_Mask_Sensitive_Data.js	Input: "1234567812345678" → Output: "************5678". Mask all but last 4 chars.
String_Calculator_Without_Eval.js	Input: "3+5*2" → Output: 13. Parse and evaluate expression manually (respecting precedence).
Object
Filename	What to do (Input → Output)
Object_Dotted_Keys_To_Nested.js	Input: {"a.b.c": 1} → Output: {a:{b:{c:1}}}.
Object_Deep_Freeze_Recursive.js	Input: nested object → Output: same object, fully frozen (nested too), mutations silently fail/throw in strict mode.
Object_Pick_Omit_Keys.js	Input: {a:1,b:2,c:3}, ["a","c"] → pick Output: {a:1,c:3}; omit Output: {b:2}.
Object_Entries_FromEntries_Manual.js	Input: {a:1,b:2} → Output: [["a",1],["b",2]] and reverse conversion, without built-ins.
Object_Find_Circular_Reference.js	Input: object with a self-referencing property → Output: true/false if circular reference exists.
Object_Reactive_Observable_GetSet.js	Input: plain object → Output: wrapped object where setting a property triggers a callback (mini Vue/Angular-style reactivity).
Object_Deep_Diff_With_Path.js	Input: two nested objects → Output: [{path:"a.b.c", old:1, new:2}]. List of changed paths.
Object_Sort_Keys_Alphabetically_Nested.js	Input: {c:1,a:{d:2,b:3}} → Output: {a:{b:3,d:2},c:1}.
Object_To_CSV_Flat_Array.js	Input: [{name:"A",age:20},{name:"B",age:25}] → Output: CSV string or flat rows array.
Object_StructuredClone_Polyfill.js	Input: nested object (with dates, arrays, etc.) → Output: deep-cloned copy, no shared references.
Map / Set / Mixed
Filename	What to do (Input → Output)
Set_Find_Duplicate_Values.js	Input: [1,2,2,3,4,4] → Output: [2,4] using Set.
Map_LRU_Cache_Implementation.js	Input: capacity=2, then put/get calls → Output: evicts least recently used item when capacity exceeded.
String_Group_Anagrams_Together.js	Input: ["eat","tea","tan","ate","nat","bat"] → Output: [["eat","tea","ate"],["tan","nat"],["bat"]].
Set_Array_Difference_A_Not_B.js	Input: A=[1,2,3], B=[2,3,4] → Output: A-B=[1], B-A=[4] using Set.
Map_Frequency_Counter_Most_Frequent.js	Input: [1,2,2,3,3,3] → Output: 3 (most frequent), using Map.
Map_Cache_With_TTL_Expiry.js	Input: set(key, val, ttl) → Output: get(key) returns undefined after ttl expires.
Map_Object_Interconversion.js	Input: Map{a:1,b:2} → Output: {a:1,b:2} object, and reverse.
Map_First_Unique_Element.js	Input: [2,3,4,2,3,5] → Output: 4 (first non-repeating, order preserved via Map).
Mixed / Real-world
Filename	What to do (Input → Output)
JS_Debounce_Throttle_Combined_Utility.js	Input: fn + options {type:'debounce'/'throttle', delay} → Output: single utility function handling both modes.
Array_Deep_Compare_Objects_Diff.js	Input: two arrays of objects → Output: array of objects that differ between them.
JS_PubSub_EventDriven_Implementation.js	Input: subscribe(topic, fn), publish(topic, data) → Output: all subscribed functions for that topic get called with data.
Array_Transactions_Running_Balance.js	Input: [{amt:100},{amt:-50},{amt:200}] → Output: [100,50,250] (running balance array).
Array_Pagination_Search_Sort_Combined.js	Input: array of objects + {search, sortKey, page, pageSize} → Output: filtered, sorted, paginated result set (mini data-table).
Object_Tree_Flatten_With_Parent_Ref.js	Input: {id:1, children:[{id:2, children:[{id:3}]}]} → Output: [{id:1,parent:null},{id:2,parent:1},{id:3,parent:2}].
Object_GroupBy_SumBy_Combo.js	Input: [{cat:"A",amt:10},{cat:"A",amt:20},{cat:"B",amt:5}] → Output: {A:30, B:5} (grouped and summed).