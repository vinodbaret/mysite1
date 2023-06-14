var sayhii = ()=>{
    return new Promise ((resolve,reject)=>{
        const err = false
        if(!err){
            resolve("i compalate my promise")
        }
        else{
            reject("i faild my promise")
        }
    })
}
//  var result = sayhii()
//  console.log (result)

// chaining

sayhii()
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)});