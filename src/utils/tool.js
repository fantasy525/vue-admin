export function deepCopy(target){
  var result
  if(typeof target==='object'){
    if(target.constructor===Array){
      result=[]
    }else{
      result={}
    }
    for(var k in target){
      if(target.hasOwnProperty(k)){
        if(typeof target[k]!=='object'){
          result[k]=target[k]
        }else{
          result[k]=deepCopy(target[k])
        }
      }
    }
  }else{
    result=target
  }
  return result
}