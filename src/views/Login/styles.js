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
