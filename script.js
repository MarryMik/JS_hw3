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



//Task 17
//Native
//12345 -> 13542
let arr3= [1,2,3,4,5]
let arr4=[]
let length=arr3.length;
for(let j=0; j<length; j++){
        if(j%2==0){
            arr4.unshift(arr3.reduce((x,y)=>(x>y)?x:y))
            arr3=arr3.filter(x=>x!=arr3.reduce((x,y)=>(x>y)?x:y))
        }
        else{
            arr4.push(arr3.reduce((x,y)=>(x>y)?x:y))
            arr3=arr3.filter(x=>x!=arr3.reduce((x,y)=>(x>y)?x:y))
        }
}
//console.log(arr4)

//Lodash
function newArray(arr3){
    let arr4=[]
    let length1=arr3.length;
    for(let j=0; j<length1; j++){
        let maxV=_.max(arr3)
        if(j%2==0){
            arr4.unshift(maxV)
            arr3=arr3.filter(x=>x!=maxV)
        }
        else{
            arr4.push(maxV)
            arr3=arr3.filter(x=>x!=maxV)
        }
    }
    return arr4
}
let arr5=[1,2,3,4,5]
//console.log(newArray(arr5))

//Task16

function newPassw(){
    let length = Math.floor(Math.random() * 15) + 6;
    let pasw =''
    let randChar= function(pasw){
        if(pasw.match(/[0-9]/g)==null || pasw.match(/[0-9]/g).length<5){
            if(pasw.search("_")!==0){
                if(pasw.charCodeAt(pasw.length-1)<10 && pasw.charCodeAt(pasw.length-1)>=0){
                    let code = Math.floor(Math.random()*58)+17;
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);}
                    else return String.fromCharCode(65);
                }else{
                    let code = Math.floor(Math.random()*74);
                    if(code<10 && code>=0) {return code;}
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);}
                    else return String.fromCharCode(65);
                }
            }else{
                if(pasw.charCodeAt(pasw.length-1)<10 && pasw.charCodeAt(pasw.length-1)>=0){
                    let code = Math.floor(Math.random()*58)+17;
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);}
                    if (code==47) {return String.fromCharCode(code + 48);}
                    else return String.fromCharCode(65);
                }else{
                    let code = Math.floor(Math.random()*74);
                    if(code<10 && code>=0) {return code;}
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);}
                    if (code==47) {return String.fromCharCode(code + 48);}
                    else return String.fromCharCode(65);
                }
            }
        }else{
            if(pasw.search("_")!==0){
                    let code = Math.floor(Math.random()*58)+17;
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);} 
                    else return String.fromCharCode(65);
            }else{
                    let code = Math.floor(Math.random()*58)+17;
                    if (code<=42 && code>=17) {return String.fromCharCode(code + 48);}
                    if (code<=74 && code>=49) {return String.fromCharCode(code + 48);}
                    if (code==47) {return String.fromCharCode(code + 48);}
                    else return String.fromCharCode(65);
            }
        }
    }
    while(pasw.length < length) pasw+=randChar(pasw);
    if(pasw.match(/[A-Z]/g).length<2){
        let ind1 = Math.floor(Math.random()*length);
        let ind2 = Math.floor(Math.random()*length);
        let code = Math.floor(Math.random()*26)+17;
        pasw=pasw.replace(pasw[ind1],String.fromCharCode(code+48));
        pasw=pasw.replace(pasw[ind2],String.fromCharCode(code+48));
    }
    if(pasw.match(/[_]/g)==null){
        let ind1 = Math.floor(Math.random()*length);
        pasw=pasw.replace(pasw[ind1], String.fromCharCode(95));
    }
    return pasw;
}
//console.log(newPassw())

//Task 10
let str3='c:\\WebServers\\home\\testsite\\www\\myfile.txt';
function findFileName(str3){
    let arr =  str3.split(/[\\]/)
    arr = arr[arr.length-1].split('.')
    return arr[0]
}
//console.log(findFileName(str3))


//Task11
let str1 = 'sometext'
let str2 = 'textforsome'
//Native
function cyclicDisp(str1,str2){
    let arrStr2 =[]
    while (!str2.includes(str1)){
        arrStr2 = str2.split('')
        arrStr2.unshift(arrStr2.pop())
        str2=arrStr2.join('')
    }
    console.log(str2)
}
//cyclicDisp(str1,str2)

//Lodash
function lodCyclicDisp(str1,str2){
    let arrStr2 =[]
    while (!_.includes(str2,str1)){
        arrStr2 = _.split(str2,'')
        arrStr2.unshift(arrStr2.pop())
        str2=_.join(arrStr2,'')
    }
    console.log(str2)
}
//lodCyclicDisp(str1,str2)


//Task12
let a =[1,2,6,4,9,7];
//Native
function divideArrs(a){
    let b=[];
    let c=[];
    if(a.length%2==0){
    while(a.length>1){
        let arr =[]
        for(let j =1, k=0; j<a.length; j++,k++){
            if( a[j]>a[0]) arr[k]=a[j]-a[0]
            else arr[k]=a[0]-a[j]
        }
        let ind=arr.indexOf(Math.min(...arr))
        let min = Math.min(a[0],a[ind+1]);
        let max = Math.max(a[0],a[ind+1])
        b.push(min)
        c.push(max)
        delete a[ind+1]
        a=a.filter(el=>el!=undefined)
        a.shift()
    }
    }else{
        console.log("у масиві має бути парна кількість елементів!")
    }
    console.log(b)
    console.log(c)
}
//divideArrs(a)

//Lodash
function lodDivideArrs(a){
    let b=[];
    let c=[];
    if(a.length%2==0){
    while(a.length>1){
        let arr =[]
        for(let j =1, k=0; j<a.length; j++,k++){
            if( a[j]>a[0]) arr[k]=a[j]-a[0]
            else arr[k]=a[0]-a[j]
        }
        let ind=_.indexOf(arr,_.min(arr))
        let min = _.min([a[0],a[ind+1]]);
        let max = _.max([a[0],a[ind+1]]);
        b.push(min)
        c.push(max)
        _.pullAt(a, [ind+1, 0])
    }
    }else{
        console.log("у масиві має бути парна кількість елементів!")
    }
    console.log(b)
    console.log(c)
}
//lodDivideArrs(a)