let input=process.argv.slice(3)
let command=process.argv[2]
if(command=="sum"){
console.log(Number(input[0])+Number(input[1])+"$")
}
else{
    console.log("Command not found.")
}