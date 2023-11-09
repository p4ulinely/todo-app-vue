const userModule = {
  state: {
    user: {
      id: 'abc-1',
      name: 'pauly m',
      email: 'paulinelym@gmail.com',
      avatar: ''
    },
    tasks: [
      {
        id: 1,
        title: 'title1',
        date: new Date(Date.now()),
        msg: 'msg 111111111....',
        reminder: true
      },
      {
        id: 2,
        title: 'title2',
        date: new Date(Date.now()),
        msg: 'msg 111111111....',
        reminder: false
      },
      {
        id: 3,
        title: 'title3',
        date: new Date(Date.now()),
        msg: 'msg 111111111....',
        reminder: true
      },
    ],
  },
  getters: {
    tasksLength: state => state.tasks.length,
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setTasks(state, data) {
      state.tasks = data;
    },
  },
  actions: {
  }
};

export default userModule;