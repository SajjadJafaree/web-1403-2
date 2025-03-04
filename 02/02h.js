let fs = require('fs');
let input = process.argv.slice(3)
let command = process.argv[2]
if (command == "minus") {
    console.log(Number(input[0]) - Number(input[1]) + "$")
}
else if (command == "sum") {
    console.log(Number(input[0]) + Number(input[1]) + "$")
}
else if (command == "print") {
    let obj = {
        name: input[0],
        family: input[1],
        email: input[2]
    }
    console.log(obj)
}
else if (command == "print2") {
    let obj = {
        name: input[0],
        family: input[1],
        email: input[2]
    }
    for (let property in obj) {
        console.log("Hi :" + obj[property])
    }
}
else if (command == "write") {
    let obj = {
        name: input[0],
        family: input[1],
        email: input[2]
    }
    fs.writeFile("./data.txt", obj, (err, data) => {
        if (err)
            console.log("ERROR", err)

        console.log(data)

    })

}
else if (command == "read") {
    fs.readFile("./data.json", (err, data) => {
        if (err) throw err
        console.log(JSON.parse(data))
    })

}

else if (command == "create") {
    let obj = {
        name: input[0],
        family: input[1],
        email: input[2]
    }
    fs.readFile("./data.json", (err, data) => {
        if (err) throw err
        info = JSON.parse(data)
        info.data.push(obj)
        let datas = JSON.stringify(info)
        
       console.log(datas)
       fs.writeFile("./data.json", datas, (err, data) => {
        if (err)
            console.log("ERROR", err)

        console.log("Create Done")

    })
    })

}
else {
    console.log("Command not found.")
}