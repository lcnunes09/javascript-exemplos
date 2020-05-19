let userObject = {
    name: 'Luciana',
    idade: 30
};
console.log(userObject);

userObject.name = 'Carla';
console.log(userObject);

userObject['name'] = 'Suzana';
console.log(userObject);

const prop = 'name';
userObject[prop] = 'Renata';
console.log(userObject);

function getProp(prop){
    return userObject[prop];
}

console.log(getProp('name'));

userObject.lastName = 'Nunes';
console.log(userObject);

delete userObject.name;
console.log(userObject);
