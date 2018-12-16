import React from 'react';
import PropTypes from 'prop-types';

import Shift from '../../containers/Shift';

const RotaGridCell = ({
  classes,
  user,
  dateKey,
  shift,
}) => (
  <Shift user={user} date={dateKey} shift={shift}>
    {({ loading, error, data }) => {
      if (loading) return <td>Loading...</td>;
      if (error) return <td>Error...</td>;
      return <td>{data}</td>;
    } }
  </Shift>
);

RotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
};


export default RotaGridCell;
