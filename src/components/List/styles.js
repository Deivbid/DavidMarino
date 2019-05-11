const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '90vw',
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    margin: 'auto 15px',
    width: 40,
    height: 40,
    backgroundColor: '#0097A7',
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  pageButtons: {
    display: 'flex'
  },
  pageNumber: {
    margin: 'auto 0'
  },
  link: {
    textDecoration: 'none'
  }

});

export { styles }