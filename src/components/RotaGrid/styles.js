const styles = () => ({
  rotaContainer: {
    border: '1px solid #ddd;',
    width: '2020px',
    tableLayout: 'fixed',
    '& tbody': {
      '& tr': {
        '&:nth-of-type(even)': {
          backgroundColor: '#efefef',
        },
      },
    },
  },
  rotaHeader: {
    margin: 0,
    tableLayout: 'fixed',
    width: '100%',
    '& thead': {
      '& tr': {
        '& > th': {
          borderBottom: '1px solid #bdbdbd',
          backgroundColor: '#ddd',
          textAlign: 'center',
          lineHeight: '32px',
          color: '#888',
          fontSize: '12px',
        },
      },
    },
  },
  rotaUserName: {
    padding: '0 8px',
    fontSize: '12px',
    lineHeight: '32px',
  },
  innerRotaTable: {
    tableLayout: 'fixed',
    margin: '0',
    width: '100%',
  },
  rotaBlock: {
    display: 'block',
    width: '100%',
    minWidth: '32px',
    textAlign: 'center',
    height: '100%',
    lineHeight: '32px',
    fontSize: '12px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    opacity: '.95',
    backgroundColor: '#c7c7c7',
    color: '#7e7e7e',
    position: 'relative',

    '&:before': {
      content: '',
      position: 'absolute',
      left: '4px',
      top: '3px',
      bottom: '3px',
      border: '1.5px solid rgba(0, 0, 0, .25)',
      borderRadius: '4px',
    },
  },
  H: {
    backgroundColor: '#73f37d',
    // background: 'linear-gradient(270deg, #73f37d, #c7efce)',
  },
  O: {
    // backgroundColor: '#7de4dc',
    // background: 'linear-gradient(270deg, #7DE4DC, #53D6D2)',
    backgroundColor: 'transparent',
  },
});

export default styles;
