import React,{Component} from 'react'
import './calculate.css'
 
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

    }
    handleSelectChange=(e)=>{
        this.setState({loantype: e.target.value});
     };
     handleAmountChange=(e)=> {
       var x= e.target.value;
       
     }
     handleperiodChange=(e)=> {
    
        var y= e.target.value;
        

     }
     handleclick=()=>{
       
     }
     

    render() { 
       
        return ( 
            <div className="loanCont">
         <div className='loan'>
           
            <h1 className='topsearch'>Loan calculator</h1>
            <form className="form">
            <label>select loan type</label>
            <select className='input' name="loantype" placeholder='please select'>
                <option>--please select loan type--</option>
            <option value="Ekash">Ekash</option>
  <option value="Edukash">Edukash</option>
  <option value="Agri-Biz kash">Agri-Biz kash</option>
  <option value="Biz-kash">Biz-kash</option>
  <option value="salary loans">salary loans</option>
  <option value="Chama loans">Chama loans</option>
            </select><br></br>
            <label>Enter loan amount</label>
            <input type="text" name='amount' placeholder='e.g 2000' className='input'  onChange={this.handleAmountChange}/><br></br>
            <label>Repayment Period(month)</label>
            <input type="text" name='period' placeholder='e.g 6' className='input' onChange={this.handleperiodChange}/><br></br>
            <button className='btnslide' onClick={this.handleclick}>Calculate</button>
            </form>
         </div>
         <div className='table1'>
             <h1 className='topsearch'>Loan Summary</h1>
             <table> 
  <thead>
    <tr>
    <th>Loan item</th>
    <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Loan type</td>
    <td>{this.y}</td>
    </tr>
    
  </tbody>
  <tbody>
  <tr>
    <td>Amount</td>
    <td></td>
  </tr> 
  </tbody>
  <tbody>
  <tr>
    <td>period(m)</td>
    <td></td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td>Rate</td>
    <td></td>
  </tr> 
    </tbody>
    <tbody>
    <tr>
    <td>interest</td>
    <td></td>
  </tr>
    </tbody>
<tbody>
<tr style={{fontWeight:"bold"}}>
    <td >Total</td>
    <td></td>
  </tr>
</tbody>
</table>
         </div>
         <div className='table2'>
             <h1 className='topsearch'>Your Loan Repayment Schedule</h1>
             <table>
             <thead>
             <tr>
                <th>MONTHS</th>
                <th>PRINCIPAL</th>
                <th>INTETEST</th>
                <th>AMOUNT</th>
                <th>BALANCE</th>
              </tr>
             </thead>
             </table>
             
            
         </div>
        </div>
         );
    }
}
 
 
 
export default Calculator;

