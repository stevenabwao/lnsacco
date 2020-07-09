import React from 'react';
import { CaretRightFill } from 'react-bootstrap-icons';
import "./loan.css"
const Loans = () => {
    return (
        <div className="left-fixed">
            <div className="loan-nav">
            <h3 className = 'topsearch'>Our loan categories</h3>
                <button className="loanButton">E-kash <CaretRightFill className="icon" size={25} color='blue' /></button>
                <button className="loanButton">Educash</button>
                <button className="loanButton">Agi-biz loan</button>
                <button className="loanButton">Biz-kash</button>
                <button className="loanButton">Asset loan</button>
                <button className="loanButton">Salary loan</button>
                <button className="loanButton">Chama loans</button>
        </div>

    </div > );
}

export default Loans;