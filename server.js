 
  const fs= require('fs')
//  const http= require('http')

//   const server = http.createServer(function(req,res){
//      res.write("<h1>HELLO NODE</h1>")
//       res.end
//   })
//   server.listen(3000,(err)=>{
//      err?console.log(err):console.log('sucess')
//  })
 fs.writeFile('welcome.text','Hello Node',(err)=>{
    err? console.log(err):console.log("hello")
 })
 fs.readFile('welcome.text',(err,server)=>{
   err?console.log(err):console.log(server.toString())
 })
 