const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'scroll',
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  invertedBtn: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none',
  },
  white: {
    color: '#fff',
  },
});
export default styles;
