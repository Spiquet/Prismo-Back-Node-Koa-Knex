const knex = require('knex')(require('../../knexfile'));

function getAllMembers() {
    return knex('member')
        .select('*');
}

function getMemberById(id) {
  return knex('member')
      .select('*')
      .where("id", id)
      .first();
}


function insertUser(member) {
  return knex('member')
    .insert(member)
    .then(rows => {
      return rows[0];
    });
  };






module.exports = {
    getAllMembers,
    getMemberById,
    insertUser
};
