const styles = () => ({
  rotaContainer: {
    border: '1px solid #ddd;',
    width: '100%',
    maxWidth: '100%',
    borderCollapse: 'collapse',
    '& tbody': {
      '& tr': {
        '&:nth-of-type(even)': {
          backgroundColor: '#efefef',
        },
      },
    },
  },
});

export default styles;
