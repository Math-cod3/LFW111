'use strict'
import { createServer} from 'node:http'
const PORT = "3000"

const data = JSON.stringify([
    {
      id: "A1",
      name: "Vacuum Cleaner",
      rrp: "99.99",
      info: "The most powerful vacuum in the world.",
    },
    {
      id: "A2",
      name: "Leaf Blower",
      rrp: "303.33",
      info: "This product will blow your socks off.",
    },
    {
      id: "B1",
      name: "Chocolate Bar",
      rrp: "22.40",
      info: "Delicious overpriced chocolate.",
    },
  ]);


const server = createServer(handleServer)

async function handleServer(req, res){

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(data)
        
}

server.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})