 var _ = require('lodash');

//Task 1
let list1 = [1,2,5,-6,7,8.3,-9]
let list2 = [3]
//Native
function diff (arr){
    if ( arr.length<=1){
        return 0 
    }else{
        arr.sort((i,j)=>i-j)
        return arr.reduce((i,j)=> (i>j)?i:j)-arr.reduce((i,j)=> (i<j)?i:j)
    }
}
//console.log(diff(list1))

//Lodash
function lodDiff(arr){
    if ( arr.length<=1){
        return 0 
    }else{return _.max(arr)-_.min(arr)}
}
//console.log(lodDiff(list2))


//Task2
let sentence="The weather is good for picnic"
//Native
function getWords(str1, n1){
    return str1.split(' ').filter(i=>i.length>n1)
}
//console.log(getWords(sentence,6))

//Lodash
function lodGetWords(str1, n1){
    return _.filter(_.words(str1), i=>i.length>n1)
}
//console.log(lodGetWords(sentence,2))

//Task 3
//Native1
function solution1 (str1, str2){
    return str1.endsWith(str2)
}
//Native2
function solution2 (str1, str2){
    for(let i=str1.length-1, j=str2.length-1; j>=0; i--, j--){
        if(str2.charAt(j)===str1.charAt(i)) continue;
        else return false;
    }
    return true;
}
//console.log(solution1('sentence', 'c'))

//Lodash
function lodSolution1 (str1, str2){
    return _.endsWith(str1,str2)
}
//console.log(lodSolution1('sentence', 'c'))

//Task4
arr2=[2,-2,2,-2,2,2]
//Native1
function averages(arr1){
    let arr2=[];
    for(let i =0; i<arr1.length-1; i++){
        arr2[i]=(arr1[i]+arr1[i+1])/2
    }
    return arr2
}
//console.log(averages(arr2))

//Native2
function averages2(arr1){
   return arr1.map((el,i,arr) => { 
    if(i<arr.length-1) return (arr[i]+arr[i+1])/2}
    ).slice(0,-1)
}
//console.log(averages2(arr2))

//Lodash
function lodAverages(arr1){
    return _.dropRight(_.map(arr1, function (el, i, arr){return (arr[i]+arr[i+1])/2}))
}
//console.log(lodAverages(arr2))

//Task 5
let sentence2="AThe weather is good for picnic"
function numbOfVowels(str1){
    return str1.match(/[a,e,i,o,u,y,A,E,I,O,U,Y]/g).length
}
//console.log(numbOfVowels(sentence2))

//Task 5.2
function removeABC(str1){
    if (str1.match(/[a,b,c]/g)){
        return str1.split('').filter(el => el!=='a').filter(el => el!=='b').filter(el => el!=='c').join('')
    }else{
        return null
    }

}
//console.log(removeABC("This might be a bit hard"))

//Task 6
//Native
function difference(arr1,arr2){
    let arr = arr1.concat(arr2)
    for(let i =0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]) arr[j]="-"
        }
    }
    return arr.filter(el=>el!="-").sort((a,b)=>a-b)
}
//console.log(difference([1,2,3],[100,2,1,10]))

//Lodash
function lodDifference(arr1, arr2){
   return _.sortBy(_.uniq(_.concat(arr1,arr2)))
}
//console.log(lodDifference([1,2,3],[100,2,1,10]))

//Task 7
let ob = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
function reverseObject(o){
    let names=Object.getOwnPropertyNames(o)
    let values=Object.values(o)
    let o2= new Object;
    for( let i =0; i<names.length; i++){
        o2[`${values[i]}`]=names[i]
    }
    return o2;    
}
//console.log(reverseObject(ob))

//Task 8
function calculateDifference(o, n){
    if(Object.values(o).length!=0){
        if(n<Object.values(o).reduce((i,j)=>i+j)){
            return Object.values(o).reduce((i,j)=>i+j)-n
        }else{
            return "Error 2"
        }
    }else{
        return "Erorr 1"
    }
   
}
//console.log(calculateDifference({skate: 200, painting:1 , shoes:200 },400))

//Task 9 
function doesBrickFit (a,b,c,w,h){
    if(a<=w && b<=h || a<=h && b<=w){return true}
    if(a<=w && c<=h || a<=h && c<=w){return true}
    if(b<=w && c<=h || b<=h && c<=w){return true}
    else return false
}
//console.log(doesBrickFit(2,1,2,1,3))

