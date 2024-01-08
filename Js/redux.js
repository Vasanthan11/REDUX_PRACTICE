console.log(Redux)

const newBooking = (userName, amount) => {
    return {
        type: "New_Booking",
        payload: {
            userName,
            amount,

        }
    }
}

const cancelBooking = (userName, refundAmount) => {
    return {
        type: "Cancel_Booking",
        payload: {
            userName,
            refundAmount,

        }
    }
}


const reservationList = (oldReservationList = [], action) => {
    if (action.type == "New_Booking") {
        return [...oldReservationList, action.payload];

    }
    else if (action.type == "Cancel_Booking") {
        return oldReservationList.filter(a => a.userName !== action.payload.userName)

    }
    return oldReservationList;

}
const cancellationList = (oldcancellationList = [], action) => {
    if (action.type == "Cancel_Booking") {
        return [...oldcancellationList, action.payload]
    }
    return oldcancellationList;

}

const accounts = (totalAmount = 100, action) => {
    if (action.type == "New_Booking") {
        return totalAmount + action.payload.amount;
    }
    else if (action.type == "Cancel_Booking") {
        return totalAmount - action.payload.refundAmount;
    }
    return totalAmount;
}
const { createStore, combineReducers } = Redux;

const manageReducer = combineReducers({
    reservationList: reservationList,
    cancellationList: cancellationList,
    accounts: accounts

})
const store = createStore(manageReducer);
store.dispatch(newBooking("Vasanthan", 50));
store.dispatch(newBooking("Ramu", 100));
store.dispatch(cancelBooking("Ramu", 100));
console.log(store.getState())