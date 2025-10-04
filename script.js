let num = 10;
console.log(num);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.PI);

console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.round(2.5));
console.log(Math.round(2.51));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.abs(2));
console.log(Math.abs(-2));

// primitive string
let firstName = "Rishabh";

// reference/object string
let lastName = new String ("Chaturvedi");

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(firstName.length);
console.log(lastName.length);

console.log(firstName.startsWith('Ri'));
console.log(firstName.startsWith('ri'));
console.log(firstName.endsWith('sh'));
console.log(firstName.endsWith('bh'));
console.log(lastName.includes('ab'));
console.log(firstName.includes('ab'));
console.log(firstName.indexOf('a'));
console.log(firstName.indexOf('b'));
console.log(firstName.toLowerCase());
console.log(firstName.replace("Rish","wish"));

let nameWithExtraSpace = "  rishabh   chatur  ";
console.log(nameWithExtraSpace.trim());

let message = "This is my first message";
let words = message.split(' ');
console.log(message.split(' '));

let email = 'hello \n ji \n kya \' haal \n h';
console.log(email);

let application = 
`hello
ji kya
haal hai?
`;
console.log(application);

let date1 = new Date();
console.log(date1);

let date2 = new Date('2013 jul 1:2 12');
console.log(date2);

let date3 = new Date (2012, 2, 23, 7, 4, 32, 45);
console.log(date3);

console.log(date3.getFullYear());
console.log(date3.getMilliseconds());

date3.setFullYear(2050);
console.log(date3);

let nums = [1,2,3,4,'rishabh','sush',true, false];
console.log(nums);
console.log(nums[0]);
console.log(nums[4]);
// push end
nums.push(100);
console.log(nums);
// unshift begining
nums.unshift(200);
console.log(nums);
// middle splice
nums.splice(3,0,'a','b','c');
console.log(nums);
console.log(nums.indexOf(0));
console.log(nums.indexOf(1));
console.log(nums.indexOf(10));
console.log(nums.indexOf(1, 5));
console.log(nums.includes(10));
console.log(nums.includes(1));

let courses = [
    {no : 1, name :'Rishabh'},
    {no : 2, name : 'Mahak'}
];
console.log(courses);
let course = courses.find(function(course){
    return course.name === 'Rishabh';
})

console.log(course);

let course2 = courses.find(course2 => course2.name === 'Mahak');
console.log(course2);

// end pop remove
nums = [1,2,3,4,5,6,7];
nums.pop();
console.log(nums);
// start shift remove
nums.shift();
console.log(nums);
// middle remove splice
nums.splice(2,1);
console.log(nums);

// empty
let nums1 = [1,2,3,4,5,6];
let nums2 = nums1;

nums1 = [];
console.log(nums1);
console.log(nums2);

let nums3 = [1,2,3];
let nums4 = nums3;
nums3.length = 0;
console.log(nums3);
console.log(nums4);

let nums5 = [4,5,6];
let nums6 = nums5;
nums6.splice(0, nums6.length);
console.log(nums5);
console.log(nums6);

let nums7 = [7,8,9];
console.log(nums7);
while(nums7.length > 0){
    nums7.pop();
}
console.log(nums7);

// combine
let first = [1,2,3,4];
let second = [5,6,7,8];
let combined = first.concat(second);
console.log(combined);

// slice
let sliced = combined.slice(2,5);
console.log(sliced);
let sliced2 = combined.slice(4);
console.log(sliced2);
let sliced3 = combined.slice();
console.log(sliced3);

// combine using spread
let combined2 = [...first, 'a', true, ...second, 'b', false];
console.log(combined2);

let combined3 = [...combined2];
console.log(combined3);

// iterating array
// for of loop
for(let value of combined){
    console.log(value);
}
// for each loop
combined.forEach(function(value){
    console.log(value);
});

// sort array
let arr = [5,2,3,6,1,4];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

// filter array
let filtered = arr.filter(function(value){
    return value >= 2;
});
console.log(filtered);

let filtered2 = arr.filter(value => value >= 2);
console.log(filtered2);

// maping
let mapped = arr.map(function(value){
    return 'student_number_' + value;
});
console.log(arr, mapped);
let mapped2 = arr.map(value => 'student_number_' + value);
console.log(arr, mapped2);

// map with objects
let filtered3 = arr.filter(value => value >= 2);
let mapped3 = filtered3.map(function(num){
    return {value:num};
});
console.log(mapped3);

let mapped4 = filtered3.map(num => {value: num});
console.log(mapped4);

let mapped5 = arr.filter(value => value >= 2).map(num => {value: num});
console.log(mapped5);