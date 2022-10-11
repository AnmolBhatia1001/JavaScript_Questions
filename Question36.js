/*
Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/

const personAccount = {
    firstName : "Dev" ,
    lastName : "Singh" ,

    incomes : [
        {job : 50000},
        {trading : 10000},
        {sideBusiness : 25000},
        {cryptoMining : 25000}
    ] ,

    expenses : [
        {rent : 15000},
        {food : 5000},
        {travel : 5000},
        {billPayment : 7500},
        {emi : 5000},
        {sip : 10000} 
    ] ,

    totalIncome : function(){
        let totalIncomeAmount = 0;
        this.incomes.forEach(item => {

            for (let v in item){
                totalIncomeAmount += item[v]
            }
        });

        return totalIncomeAmount;
    },

    totalExpenses : function(){
        let totalExpenses = 0;
        this.expenses.forEach(item => {
            
            for(let v in item){
                totalExpenses += item[v]
            }
        })
        return totalExpenses;
    },

    accountInfo : function(){
        console.log(`UserName :  ${this.firstName} ${this.lastName} \nTotal Income : ${this.totalIncome()} \nTotal Expense : ${this.totalExpenses()} \nAcount Balance : ${this.accountBalance()}`); 
    },

    addIncome : function(obj){
        this.incomes.push(obj)
    },

    addExpense : function(obj){
        this.expenses.push(obj)
    },

    accountBalance : function(){
        return ((this.totalIncome()) - (this.totalExpenses()))
    } 
}


personAccount.accountInfo();