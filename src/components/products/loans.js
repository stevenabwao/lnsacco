import React, { Component } from 'react';
import { CaretRightFill } from 'react-bootstrap-icons';
import Agribiz  from '../../images/loans/agribiz.png'
import Ekash from '../../images/loans/ekash.png';
import Edukash from '../../images/loans/educash1.jpg';
import Chama from '../../images/loans/chama.jpg';
import Salary from '../../images/loans/salary.jpg';
import Biz from '../../images/loans/bizkash.jpg';
import "./loan.css";
import { TitleComponent} from '../Titles/title'

class Loans extends Component  {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover1 = this.handleMouseHover1.bind(this);
        this.state = {
          isHovering: true,
          isHovering1: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

      handleMouseHover1() {
        this.setState(this.toggleHoverState1);
      }
    
      toggleHoverState1(state) {
        return {
          isHovering1: !state.isHovering1,
        };
      }
   
render(){
      return (
        <div>
          <TitleComponent title='Loans::Lake National Sacco'/>
          <div className='tittle'>
                <h1 className = "abouttitle">Loan Products </h1>
            </div>
        <div className="left-fixed">
          
            <div className="loan-nav" >
            <h3 className = 'topsearch'>Our loan categories</h3>
                <button className="loanButton" onMouseEnter={this.handleMouseHover}
                     onMouseLeave={this.handleMouseHover}>E-kash <CaretRightFill className=
                "icon" size={25} color='blue' /></button>
                <div className="menuitems" onMouseEnter={this.handleMouseHover1}
                     onMouseLeave={this.handleMouseHover1}>
                        <button className="loanButton">Educash
               </button></div>
                <button className="loanButton">Agi-biz loan</button>
                <button className="loanButton">Biz-kash</button>
                <button className="loanButton">Asset loan</button>
                <button className="loanButton">Salary loan</button>
                <button className="loanButton">Chama loans</button>
        </div>
      
        <div className='loanCont'>
        <div className="loanContainer">
         <div className = "items">
            
                        <span className = 'title'>Ekash</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Ekash} alt=""/>
            Chama loans enable groups to save and access loan. 
            Our loans are reliable,affortable and easily accessible,
             with low interest rate. Apply and enjoy
        
            </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Minimum applicable amount of Ksh. 100,000</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Member for minimum duration of 6 months </p>
                  <p>4. Guarantee 2/3 of the payable amount</p> 
                  <p>5. Proof on the existence of the business (Updated 
                      business permit/trading licence)</p>
                  <p> 6. 6 months’ bank statement</p>
                  <p> 7. Tender/contract document – for contractors </p>
                  <p>8. Repayment period upto 1 year</p> 
            
            </div>
        </div>
        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Edu-Kash</span><br></br><br></br>
                        <img className= "ekash" src = {Edukash} alt=""/>
            <div className = 'content'>
            Ensure your children learn without worries of school fee. 
            Apply for educash which allowa you to pay school fee without stress.
            Watch your children enjoy their education and realize their cariers.
            </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>
        
        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Agri-business Loans</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Agribiz} alt=""/>
            Many small holders farmers can confess that accessing a loan that can 
            finance your agri-bussiness project is not easy. 
            Apply for agribiz loan from Lake Nationall Sacco today.
             </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>

        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Biz-kash</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Biz} alt=""/>
            Biz kash enables our esteemed customers to access funds for their business.
            Boost your bussiness anytime you can.
            Apply and enjoy our great biz kash offers.
             </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>
        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Asset Loans</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Chama} alt=""/>
            Chama loans enable groups to save and access loan. 
            Our loans are reliable,affortable and easily accessible,
             with low interest rate. Apply and enjoy
             </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>

        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Salary Loans</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Salary} alt=""/>
            You do not have to wait untill end month to pay your bills and
             meet your day to day obligations. 
            Apply and enjoy Lake National Sacco salary loans.
             </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>

        <div className="loanContainer">
         <div className = "items">
            
         <span className = 'title'>Chama Loans</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Chama} alt=""/>
            Chama loans enable groups to save and access loan. 
            Our loans are reliable,affortable and easily accessible,
             with low interest rate. Apply and enjoy
             </div>

            </div> 
            <div className = "items">
                <span className = 'title'>Loan Requirements</span><br></br><br></br>
                        
                  <p>1. Must be a Sacco member for minimum period of 3 months</p> 
                  <p>2. Purchased minimum shares of ksh. 5500 </p>
                  <p>3. Duly filled membership registration forms </p>
                  <p>4. Must present Fee structure and admission letter of the student</p> 
                  <p>5. The loan is upto three times(your savings * 3) of your savings </p>
                  <p>6. Applicable amount ksh. 5,000 – 50,000 per semester </p>
                  <p>7. Guarantee on 2/3 of the payable amount </p>
                  <p>8 Loan disbursed direct to the school account </p> 
            
            </div>
        </div>
    </div > 
    </div>
    </div>);
  }
}



 

export default Loans;