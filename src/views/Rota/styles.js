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
});

export default styles;
