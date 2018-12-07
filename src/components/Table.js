import React, { Component } from "react";
import _ from 'lodash';
import '../App.css';
//import './CustomButton';
/*const materials = [
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
                          }
  
  
                  ]
*/
class EditableCell extends React.Component {
    constructor(props) {
    super(props);

    /*this.state = {
     item : [{
      id: this.props.id,
      name: this.props.name,
      value: this.props.value
     }] };*/
/*
     this.state  = {
    //         selectedTeam: props.cellData.value ,
   //      validationError: "", 
        value : props.cellData.value    
    }*/

    this.state = {
        values: [
            { name: 'H', id: 'H' },
            { name: 'O', id: 'O' },
            { name: 'A', id: 'A' }
        ]}
        //this.handleChange = this.handleChange.bind(this);
    };
/*
    handleChange(evt) {
            var item = {
            key: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };

        this.setState({ value: evt.target.value });
        
       // evt.preventDefault();
        //console.log(item);
       // this.setState({selectedTeam: evt.target.value});
      //  this.setState({selectedTeam: this.refs.input.value});
      // alert(this.state.value);
    }*/

    render() {
        //console.log (this.props);
         const {  value } = this.state;

        //this.setState ({selectedTeam : this.props.cellData.value});
          let optionTemplate = this.state.values.map(v => (
            <option value={v.id} key={v.id} >{v.name}</option>
        ));
        //console.log(this.state.selectedTeam);

        /*let optionTemplate = (
            <select>
            {this.state.values.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}
        </select>);
        
         onChange={(e) => this.setState({selectedTeam: e.target.value})}
        */
        return (
            <td>
                {/* <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/> */}
                    <select  name={this.props.cellData.name} id={this.props.cellData.id} 
                            shifttype = {this.props.cellData.shifttype}
                           onChange={this.props.onProductTableUpdate} value={this.props.cellData.value}
                    >
                         {optionTemplate}
                    </select>
            </td>
        );

  }
}

class Table extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      materials: props.data
    };
    this.onProductTableUpdate = this.onProductTableUpdate.bind(this);
  }

   onProductTableUpdate(evt) {

    //console.log(evt.target);
        var m_index;
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };

        var res = item.id.split("-");
        var res1 = '';
        var shifttype = item.id.substr((item.id.lastIndexOf("-"))+1);
        var mat = this.state.materials.slice();
        var newMat = mat.map(function(m, index) {
        res1 = '';
        for (var key in m) {
             res1 = res1  + m[key] + "-" ;
        }
        if (res1.substring(0, res1.lastIndexOf("-"))  === item.id.substring(0,item.id.lastIndexOf("-")))
            {
                m_index = index;

                if (shifttype == 'shift_AM') 
                    mat[m_index].shift_AM = item.value
                else if (shifttype == 'shift_PM') 
                    mat[m_index].shift_PM = item.value
            }
        return m;
    }
);
   // console.log(newMat);
    this.setState({materials:newMat});
  };

  
  render() {
     var  createTable = () => {
            let table = []

            var dd = [];
            dd = getDistinctDay();

            //https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778

            // Outer loop to create parent
            for (let i = 0; i < dd.length; i++) {
                   table.push(<td >{displayColData ( dd[i])}</td>
                )
            }
            return table
        }

    var displayColData  = (day) => {   
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
                        if (day === this.state.materials[index].day)
                        {
                        return (
                            <tr>
                                <td >
                                        {this.state.materials[index].name}
                                </td>
                                <td >
                                    <EditableCell onProductTableUpdate={this.onProductTableUpdate} 
                                    cellData={{
                                        shifttype : 'shift_AM',
                                        "name": this.state.materials[index].name,
                                        value: this.state.materials[index].shift_AM,
                                        id: day +'-'+ this.state.materials[index].name + '-'+ this.state.materials[index].shift_AM + '-'+ this.state.materials[index].shift_PM + '-'+ 'shift_AM'
                                        }}/>
                                    
                                </td>
                                <td >
                                      <EditableCell onProductTableUpdate={this.onProductTableUpdate} 
                                        cellData={{
                                        shifttype : 'shift_PM',
                                        "name": this.state.materials[index].name,
                                        value: this.state.materials[index].shift_PM,
                                        id: day +'-'+ this.state.materials[index].name + '-'+ this.state.materials[index].shift_AM + '-'+ this.state.materials[index].shift_PM + '-'+ 'shift_PM'
                                        }}/>
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
    //console.log(JSON.stringify(this.state.materials));
   
  var getDistinctDay = () => {
        let _uniqDays = []; 
        let  _uniqDaysList = _.groupBy(this.state.materials,"day");
          _uniqDays = Object.keys(_uniqDaysList);
          //  console.log(_uniqDays);
        return  _uniqDays;
  }
    return (
        		<td>
                    {createTable()}
                </td>
        )
  }
}
export default Table;