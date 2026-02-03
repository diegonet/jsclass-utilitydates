

function getDateTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    
    tomorrow.setDate(today.getDate() + 1);
    
    return tomorrow;
}


function getDateYesterday() {
    const today = new Date();
    const yesterday = new Date(today);
    
    yesterday.setDate(today.getDate() - 1);
    
    return yesterday;
}


module.exports = {
    getDateTomorrow,
    getDateYesterday
}