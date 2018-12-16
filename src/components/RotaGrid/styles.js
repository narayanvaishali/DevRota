const styles = () => ({
  rotaContainer: {
    border: '1px solid #ddd;',
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
        },
      },
    },
  },
});

export default styles;
