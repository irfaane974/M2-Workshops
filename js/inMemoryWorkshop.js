let inMemoryWorkshop = [];


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop);
    });
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop));
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        if (!description) {
            reject(new Error("Workshop description required"));
        }
        inMemoryWorkshop.push({
            name,
            description
        });
        resolve();
    });
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name is required for removal"));
        }
        for (let index = 0; index < inMemoryWorkshop.length; index++) {
            if ((inMemoryWorkshop[index].name).localeCompare(name) == 0) {
                inMemoryWorkshop.splice(index,1);
            }  
        }
        resolve();
    });
}



function updateWorkshop(oldWorkshopName, newWorkshopName) {
    return new Promise((resolve, reject) => {
        if (!oldWorkshopName || !newWorkshopName) {
            reject(new Error("Workshop name is required for update"));
        }
        else if(oldWorkshopName.localeCompare(newWorkshopName) == 0) {
            reject(new Error("Old name and new name can not be the same"));
        }

        for (let index = 0; index < inMemoryWorkshop.length; index++) {
            if ((inMemoryWorkshop[index].name).localeCompare(oldWorkshopName) == 0) {
                inMemoryWorkshop[index].name = newWorkshopName;
                break;
            }
        }
        resolve();
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};