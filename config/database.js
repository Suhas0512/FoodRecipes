const mongoose=require('mongoose')

const setupDB=()=>{
    //db config
    mongoose.connect('mongodb://localhost:27017/myProject')
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err))
}
module.exports=setupDB