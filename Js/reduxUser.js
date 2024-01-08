console.log(Redux)

const addEmployee = (id, employeeName, processUnit, workingFloor, DOB, experience) => {
    return {
        type: "Add_Employee",
        payload: {
            id,
            employeeName,
            processUnit,
            workingFloor,
            DOB,
            experience,
        }
    }
}

const removeEmployee = (deleteid, employeeName, processUnit, workingFloor, DOB, experience) => {
    return {
        type: "Remove_Employee",
        payload: {
            deleteid,
            employeeName,
            processUnit,
            workingFloor,
            DOB,
            experience,
        }
    }
}

const modifyEmployee = (id, employeeName, updateprocessUnit, updateworkingFloor, DOB, updateexperience) => {
    return {
        type: "modify_Employee",
        payload: {
            id,
            employeeName,
            updateprocessUnit,
            updateworkingFloor,
            DOB,
            updateexperience,
        }
    }
}

const employeesList = (oldEmployeesList = [], action) => {
    if (action.type == "Add_Employee") {
        return [...oldEmployeesList, action.payload]
    }
    else if (action.type == "Remove_Employee") {
        return oldEmployeesList.filter(a => a.employeeName !== action.payload.employeeName)
    }
    else if (action.type == "modify_Employee") {
        return [...oldEmployeesList, action.payload]
    }
    return oldEmployeesList;
}

const exitEmployeesList = (oldExitEmployeesList = [], action) => {
    if (action.type == "Remove_Employee") {
        return [...oldExitEmployeesList, action.payload]
    }
    return oldExitEmployeesList;
}

const modifyEmployeesList = (oldModifyEmployeesList = [], action) => {
    if (action.type == "modify_Employee") {
        return [...oldModifyEmployeesList, action.payload]
    }
    return oldModifyEmployeesList;
}

const numberOfEmployees = (totalNumber = 0, action) => {
    if (action.type == "Add_Employee") {
        return totalNumber + action.payload.index;
    }
    else if (action.type == "Remove_Employee") {
        return totalNumber - action.payload.index;
    }
    return totalNumber;
}

const { createStore, combineReducers } = Redux;

const manageReducer = combineReducers({
    employeesList: employeesList,
    exitEmployeesList: exitEmployeesList,
    modifyEmployeesList: modifyEmployeesList,
    numberOfEmployees: numberOfEmployees
})

const store = createStore(manageReducer);
store.dispatch(addEmployee(1, "Vasanthan", "SJC", "309-Module", "11-08-2001", "1.5 Years"));
store.dispatch(addEmployee(2, "Dharunesh", "SJC", "309-Module", "1-12-2002", "1 Years"));
store.dispatch(addEmployee(3, "Abdul", "SJC", "309-Module", "10-03-2001", "1.7 Years"));
store.dispatch(removeEmployee(3, "Abdul", "SJC", "309-Module", "10-03-2001", "1.7 Years"));
store.dispatch(modifyEmployee(3, "Abdul", "Valpak", "307-Module", "10-03-2001", "2 Years"));

console.log(store.getState())
