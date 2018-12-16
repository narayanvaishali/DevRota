import React from 'react';
import moment from 'moment';
import RotaGridCell from './RotaGridCell';

const RotaGridRow = ({ classes, staff, days }) => {
  const shifts = ['AM', 'PM'];
  return (
    <tr>
      <td className="staff-name">
        {staff}
      </td>
      <td className="schedule-cell">
        <div className="inner-schedule-background">
          <table>
            <tbody>
              <tr>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <table className="inner-schedule-table">
          <tbody>
            <tr>
              {days.map((day) => {
                const dayKey = moment(day).format('YYYYMMDD');
                return shifts.map(shift => (
                  <RotaGridCell
                    user={staff}
                    shift={shift}
                    dateKey={dayKey}
                    key={`${dayKey}${shift}`}
                  />
                ));
              })}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default RotaGridRow;
