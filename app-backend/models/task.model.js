const db = require('../utils/db');

module.exports = {
  all() {
    return db('tasks');
  },

  findByUserId(userId) {
    return db('tasks').where('user_id', userId);
  },

  async findById(id) {
    const task = await db('tasks').where('id', id);
    if (task.length === 0) {
      return null;
    }

    return task[0];
  },

  add(task) {
    return db('tasks').insert(task);
  },

  patch(id, taskWithoutId) {
    return db('tasks').update(taskWithoutId).where('id', id);
  },

  del(id) {
    return db('tasks')
      .where('id', id)
      .del();
  }
};