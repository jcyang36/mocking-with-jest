const fs=require('fs')

const request=(url)=> Promise((resolve,reject)=>{
    //Get userID from supplied url string
    const lastSlash=url.lastIndexOf('/')
    const userID=url.substring(lastSlash+1)
    //load user json data from a file in the subfolder for mock data
    fs.readFile(`./src/_mockData_/${userID}.json`,`utf8`, (err, data)=>{
        if (err) reject(err)
        //Parse the data as JSON and put in the key entity(just like the request library does)
        resolve({entity:JSON.parse(data)})
    })
})
export default request

