var sumStore=[]
localStorage.setItem('SumStore', JSON.stringify(sumStore));
var sumStore = JSON.parse(localStorage.getItem('SumStore'));
console.log(sumStore)
console.log(2)
sumStore.push({"test1":"aha", "test2":"bsh", "test3":"wdew"})
console.log(sumStore)
console.log(3)
