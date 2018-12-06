import React, { Component } from 'react';
import Table from './components/Table';
import Products from './components/Products';
import './App.css';


const materials = [
                              {  
                                  'day' : '4',
                                  'name': 'TT',
                                  'shift_AM': 'H',
                                  'shift_PM': 'H'
                              }, {
                                 'day' : '4',
                                  'name': 'VP',
                                'shift_AM': 'H',
                                'shift_PM': 'H'
                            }, {
                                'day' : '4',
                                'name': 'CM',
                                'shift_AM': 'H',
                                'shift_PM': 'A'
                          }, {
                              'day' : '4',
                              'name': 'KT',
                              'shift_AM': 'O',
                              'shift_PM': 'O'
                          }, {
                              'day' : '4',
                              'name': 'TA',
                              'shift_AM': 'O',
                              'shift_PM': 'H'
                          },
                           {  
                                  'day' : '10',
                                  'name': 'TT',
                                  'shift_AM': 'O',
                                  'shift_PM': 'O'
                              }, {
                                 'day' : '10',
                                  'name': 'VP',
                                'shift_AM': 'H',
                                'shift_PM': 'H'
                            }, {
                                'day' : '10',
                                'name': 'CM',
                                'shift_AM': 'H',
                                'shift_PM': 'H'
                          }, {
                              'day' : '10',
                              'name': 'KT',
                              'shift_AM': 'A',
                              'shift_PM': 'A'
                          }, {
                              'day' : '10',
                              'name': 'TA',
                              'shift_AM': 'O',
                              'shift_PM': 'O'
                          } ,
                           {  
                                  'day' : '3',
                                  'name': 'TT',
                                  'shift_AM': 'O',
                                  'shift_PM': 'O'
                              }, {
                                 'day' : '3',
                                  'name': 'VP',
                                'shift_AM': 'O',
                                'shift_PM': 'O'
                            }, {
                                'day' : '3',
                                'name': 'CM',
                                'shift_AM': 'O',
                                'shift_PM': 'O'
                          }, {
                              'day' : '3',
                              'name': 'KT',
                              'shift_AM': 'A',
                              'shift_PM': 'A'
                          }, {
                              'day' : '3',
                              'name': 'TA',
                              'shift_AM': 'O',
                              'shift_PM': 'O'
                          }
  
                  ]

/*class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: props.data
    };
  }
  
  handleChange(index, dataType, value) {
    const newState = this.state.materials.map((item, i) => {
      if (i == index) {
        return {...item, [dataType]: value};
      }
      return item;
    });
    
    this.setState({
       materials: newState
    });
  }
  
  render() {

    var displayColData  = (day) => {   
      //console.log(day);
       return(
        <table className='table table-bordered'>
            <thead>
                <tr>
                     <th></th>
                    <th>{day}</th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th>AM</th>
                    <th>PM</th>
                </tr>
            </thead>
            <tbody>
              { //outer 
                  this.state.materials.map((row, index) => {
                    if (day == this.state.materials[index].day)
                    {
                      return (
                          <tr>
                              <td>
                                    {this.state.materials[index].name}
                              </td>
                              <td>
                                    {this.state.materials[index].shift_AM}
                              </td>
                              <td>
                                    {this.state.materials[index].shift_PM}
                              </td>
                          </tr>
                      );
                      } 
                  })
              }
            </tbody>
        </table>
       );
   }
    console.clear();
   // console.log(JSON.stringify(this.state.materials));
   
    return (

     // this.state.materials.map((row, index) => {
       <tr> 
          <td>
          {displayColData (4) }
        </td>
         <td>
          {displayColData (10) }
        </td>
        
        </tr>
     // })
    )
  }
}
*/
class App extends Component {


  render() {
    return (
      <div className="App">
       
          <div>
             {<Table data={materials} /> }
              {/* <Products /> */}
          </div>        
        </div>
    );
  }
}

export default App;
