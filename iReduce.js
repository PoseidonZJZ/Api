Array.prototype.iReduce = function iReduce(fn, initial=0) {    //递归

    const arr=this

    arr[0] = initial ? initial : this[0]
  
    return helper(fn,initial,arr)

  }

  function helper(fn,result,Array){

    if (Array.length === 0){
        return result
    } 
    const [head, ...ary] = Array
    return helper(fn, fn(result, head), ary)
  }

function sum(a,b){
    return  a+b
 }

//   Array.prototype.iReduce = function iReduce(fn, initial) {     //非递归

//     let result = initial ? initial : this[0]
  
//     let start = initial ? 0 : 1
  
//     for (let i = start; i < this.length; i++) {
  
//       result = fn(result, this[i], i, this)
  
//     }
  
//     return result
  
//   }
var a=[1,2,3]

console.log(a.iReduce(sum));
