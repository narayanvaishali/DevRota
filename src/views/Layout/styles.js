const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 15px 30px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  main: {
    flex: '1 0 auto',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
});

export default styles;
