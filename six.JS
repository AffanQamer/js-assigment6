//Q1

var text = ("Hello world")
for (var i = 0; i < 5; i++) {
    //alert(text)
}

//Q2

var num = [1,2,3,4,5,6,7,8,9,10]
for(var i = 1; i <= 10; i++) {
    \\console.log(num[i])

}   

//Q3

var table = prompt('enter your digit')
var length = prompt('enter your table length')
for (let i = 1; i <= length; i++)
    {
        //alert(table + ' x ' + i + ' = ' + table*i)

    }

    //Q4

    var mobileNames = ['nokia', 'apple', 'sony', 'samsung', 'huawei']
for (var i = 0; i < mobileNames.length; i++) {
    //console.log(mobileNames[i])
}

//Q5

var fruits = ['apple', 'strawberry', 'banana', 'mango', 'orange']
for (let i = 0; i < fruits.length; i++)
    {
        //alert(fruits[i])
    }

   // var fruits = ['apple', 'strawberry', 'banana', 'mango', 'orange']
    for (let i = 0; i < fruits.length; i++)
        {
        //alert('Element at index ' + i + ' is ' + fruit[i])
    
        }
//Q6
var numItems = prompt('number of items')
var index0 = prompt('enter index 0')
var index1 = prompt('enter index 1')
var index2 = prompt('enter index 2')
var index3 = prompt('enter index 3')
for (var i = 0; i < numItems.length; i++) {
 //console.log('Number of items: ' + numItems + '\n' + 'items: \n' + index0 + '\n'  + index1 + '\n'  + index2 + '\n'  + index3)
}


//Q8

var cakes = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var userInput = prompt('Kia khana hai?')
var cakeFound = false

for (var i = 0; i < cakes.length; i++) {
    if (cakes[i] === userInput) {
       // alert('Yes your cake is found!')
        cakeFound = true

        break
    }
}

if (cakeFound === false) {
    //alert('Sorry! Kisi aur bakery se ja ker lelo!')
}

//Q9

var nums = [24, 53, 78, 91, 12]
var largeNumber = 0

for (var i = 0; i < nums.length; i++) {
    if (nums[i] > largeNumber) {
        largeNumber = nums[i]
    }
}

//alert(largeNumber)

//Q10


var nums = [24, 53, 78, 91, 12]
var smallestNumber = nums[0]

for (var i = 0; i < nums.length; i++) {
    debugger
    if (nums[i] < smallestNumber) {
        smallestNumber = nums[i]
    }
}

//alert(smallestNumber)


//Q12

var num = [5]
for (let i = 1; i <= 20; i++) {
    //console.log(num*i)
}