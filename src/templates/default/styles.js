const a = {
  textDecoration: 'none',
}

export default {
  flex: {
    flex: 1,
  },

  a: {
    ...a,
    white: {
      ...a,
      color: 'white',
    },
    black: {
      ...a,
      color: 'black',
    },
  },
}
