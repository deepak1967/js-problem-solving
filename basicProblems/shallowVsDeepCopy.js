//  Shallow Copy: Copies top-level only; not nested objects.
let house1 = { rooms: 1, closet: { box: "documents" } };
let house2 = { ...house1 };

house2.rooms = 2;
house2.closet.box = "toys"; // not work on nested object

console.log(house1);
console.log(house2);

// Deep Copy: Copies everything; nested objects are also cloned.
let house3 = { rooms: 3, closet: { box: "documents" } };
let house4 = JSON.parse(JSON.stringify(house3));
house4.rooms = 4;
house4.closet.box = "photos";

console.log(house3);
console.log(house4); 
