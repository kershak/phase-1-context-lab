/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = function (record) {
    return {
        firstName : record[0],
        familyName : record[1],
        title : record[2],
        payPerHour : record[3],
        timeInEvents : [],  
        timeOutEvents : [],
    }
}

const createEmployeeRecords = function (employeeRowData) {
    return employeeRowData.map(function (record){
        return createEmployeeRecord(record)
    })
}

const createTimeInEvent = function (timeData){
    let [date, hour] = timeData.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),       
        date,
    })  

    return this
}

const createTimeOutEvent = function (timeData) {
    let [date, hour] = timeData.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const hoursWorkedOnDate = function (workdedDate) {
    let clockedIn = this.timeInEvents.find(function(event){
        return event.date === workdedDate
    })
    let clockedOut = this.timeOutEvents.find(function(event){
        return event.date === workdedDate
    })
    return (clockedOut.hour - clockedIn.hour) / 100
}       

const wagesEarnedOnDate = function (workdedDate) {
    let wage = hoursWorkedOnDate.call(this, workdedDate) * this.payPerHour
    return parseFloat(wage.toString())
}

const allWagesFor = function () {
    let allWorkedDates = this.timeInEvents.map(event => event.date);
    let paidWage = allWorkedDates.reduce(function(memo, records){
        return memo + wagesEarnedOnDate.call(this, records)
    }.bind(this), 0) 
    return paidWage ;       
} 

const findEmployeeByFirstName = function (mainArray, firstName){    
    return mainArray.find(function (records){
        return records.firstName === firstName
    })
}   

const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce(function (memo, records) {
        return memo + allWagesFor.call(records)
    }, 0);
}
