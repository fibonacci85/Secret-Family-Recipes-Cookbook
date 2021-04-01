const db = require("../../data/dbConfig");


module.exports = {
    find,
    insert,
    findBy,
    update, 
    remove
}

function find(){
    return db('recipes');
}

function insert(recipe){
    return db('recipes').insert(recipe)
}

function findBy(id){ 
    return db('recipes').where(id, 'id'); /// recipe_id?
}

function update(id, changes){ 
    return db('recipes').update(changes).where('id', id)
    .then(id => {
        return db('recipes').where('id', id)
    })
}

function remove(id){
    return db('recipes').where('id', id).del()
    .then(id => {
        return db('recipes').where('id', id);
    });
}