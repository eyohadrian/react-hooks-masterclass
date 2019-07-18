const defaultBtn = {
  width: 80
};

export default {
  actionsDisplay: {
    root: {
      gridColumn: '2',
      gridRow: '2',
      padding: '80px 160px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },

  actions: {
  root: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  btn: {
    ...defaultBtn
  },
  submit: {
    ...defaultBtn,
    backgroundColor: '#23d647',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1daa3b'
    }
  }
  }
}