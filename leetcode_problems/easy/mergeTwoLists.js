let list1 = [1, 2, 4],
  list2 = [1, 3, 4];

// Not work on leetcode

var mergeTwoLists = function (list1, list2) {
  // Merge Array
  // const list = [...list1, ...list2]
  // OR
  // const list = list1.concat(list2)
  // OR
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
  }
  const sortedList = list1.sort((a, b) => a - b);

  return sortedList;
};

console.log(mergeTwoLists(list1, list2));
