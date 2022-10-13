interface weekDays {
    firstDay: string,
    secondDay : string,
    thirdDay : string,
    fourthDay : string,
    fifthDay : string
}

let Days: weekDays = {
    firstDay: "Monday",
    secondDay : "Thuesday",
    thirdDay : "Wendnesday",
    fourthDay : "Thursday",
    fifthDay : "Friday"
}

for(let day in Days){
    console.log(Days[day])
}