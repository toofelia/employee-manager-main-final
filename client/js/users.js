import ejs from "ejs";

async function getUsers(){
    var res = null;
    try {
     const req = await fetch("/api/v1/users")
     res = await req.json()
 
       } catch {
    }
     return res  
  }

