const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  loginForm: {
    marginTop: '25vh',
  },
  errorMessage: {
    backgroundColor: theme.palette.error.dark,
    // padding: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
    // marginTop: `${theme.spacing.unit * 2}px`,
    // marginBottom: `${theme.spacing.unit * 2}px`,
    // backgroundColor: '#d32f2f',
    // color: '#fff',
    // boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    // borderRadius: '4px',
  },
  messageIcon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: `${theme.spacing.unit * 2}px`,
    marginBottom: `${theme.spacing.unit * 2}px`,
  },
});

export default styles;
