const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}


export default {
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  add: {
    marginBottom: 20,
  },

  item: {
    marginBottom: 5,
    backgroundColor: '#eee',
  },

  center: {
    ...center,
    marginTop: 10,
  },

  page: {
    marginLeft: 10,
    marginRight: 10,
  },

  detail: {
    marginRight: 20,
  },

  root: {
    ...center,
    height: 'calc(100vh - 65px - 40px)',
  },

  paper: {
    display: 'inline-block',
    padding: 20,
  },

  button: {
    marginLeft: 20,
  },

  name: {
    margin: 0,
  },

  id: {
    color: 'gray',
    fontSize: '0.8rem',
  },
}
