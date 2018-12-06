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

     this.state  = {
        selectedTeam: props.cellData.value,
        validationError: ""
    }

    this.state = {
        values: [
            { name: 'H', id: 'H' },
            { name: 'O', id: 'O' },
            { name: 'A', id: 'A' }
        ]}
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(evt) {
            var item = {
            key: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
       // evt.preventDefault();
            //console.log(item);
        // this.setState({selectedTeam: evt.target.value});
         //alert(selectedTeam);
    }

    render() {
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
                    <select name={this.props.cellData.type} id={this.props.cellData.id} 
                            value={this.state.selectedTeam != this.props.cellData.value? this.props.cellData.value : this.state.selectedTeam} 
                                onChange={this.handleChange}>
                         {optionTemplate}
                    </select>
            </td>
        );

  }
}
class CustomButton extends Component {
  render() {
    const { onPress, children, data } = this.props;
//console.log (data);
    return (
      <button type="button" onClick={onPress} id={data}>
        {children}
      </button>
    );
  }
}
class Table extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      materials: props.data
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.onProductTableUpdate = this.onProductTableUpdate.bind(this);
  }

   onProductTableUpdate(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };

    console.log(item);
/*var products = this.state.products.slice();
  var newProducts = products.map(function(product) {

    for (var key in product) {
      if (key == item.name && product.id == item.id) {
        product[key] = item.value;

      }
    }
    return product;
  });

    this.setState({products:newProducts});*/
  //  console.log(this.state.products);
  };

 handleClick(e) {
    //e.preventDefault();
   // console.log('The link was clicked.');
  }
 handleChange = event => {
   // this.setState({ [event.target.name]: event.target.value });
   console.log(event);
  };

  handleEvent(e) {
     e.preventDefault();
      //alert('here');
      console.log(e.target.value);
  };

  //handleChange(index, dataType, value) {
       // console.log(dataType);

   /* const newState = this.state.materials.map((item, i) => {
      if (i === index) {
        return {...item, [dataType]: value};
      }
      return item;
    });
    
    this.setState({
       materials: newState
    });
  }*/
  
  render() {


     var  createTable = () => {
            let table = []

            var dd = [];
            dd = getDistinctDay();

            //https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778

            // Outer loop to create parent
            for (let i = 0; i < dd.length; i++) {
                    //let children = []
                    //Inner loop to create children
                   // for (let j = 0; j < dd[i]; j++) {
                        table.push(<td >{displayColData ( dd[i])}</td>)
                   // }
                    //Create the parent and add the children
                    //table.push(<tr>{children}</tr>)
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
                                        "type": "name",
                                        value: this.state.materials[index].shift_AM,
                                        id: day +'-'+ this.state.materials[index].name + '-'+ this.state.materials[index].shift_AM + '-'+ this.state.materials[index].shift_PM
                                        }}/>
                                    
                                </td>
                                <td >
                                      <EditableCell onProductTableUpdate={this.onProductTableUpdate} 
                                        cellData={{
                                        "type": "name",
                                        value: this.state.materials[index].shift_PM,
                                        id: day +'-'+ this.state.materials[index].name + '-'+ this.state.materials[index].shift_AM + '-'+ this.state.materials[index].shift_PM
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
   // console.log(JSON.stringify(this.state.materials));
   
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