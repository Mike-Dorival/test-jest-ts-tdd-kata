const accountClient: {date: string, account: number, balance: number}[] = [{
  date : "",
  account : 0,
  balance : 0
}];

const allHistoryTransaction: any[] = [];

const depositMoney = (date: string, deposit: number) => {

  const result = {
    date, 
    account : accountClient[0].account + deposit,
    balance : accountClient[0].balance + deposit
  };

  return allHistoryTransaction.push(result);
};

const withdrawMoney = (date: string, withdraw: number) => {

  const result = {
    date, 
    account : withdraw - accountClient[0].account,
    balance : withdraw - accountClient[0].balance
  };

  return allHistoryTransaction.push(result);
};

export {
  accountClient,
  depositMoney,
  withdrawMoney,
  allHistoryTransaction
}