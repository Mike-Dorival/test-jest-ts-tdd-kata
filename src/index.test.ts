import { allHistoryTransaction, depositMoney, withdrawMoney } from './index';

describe('./index.js', () => {
    describe('tests functions deposit, withdraw', () => {
      it('should have 1000 on account after a deposit of 1000', () => {
        // Given
        const historicAccount = allHistoryTransaction;
        
        // When
        depositMoney("10-01-2012", 1000);

        // Then
        const result = historicAccount.find(obj => obj.date === '10-01-2012').account;
        expect(result).toBe(1000);
      });

      it('should have 500 on account after a withdraw of 500', () => {
        // Given
        const historicAccount = allHistoryTransaction;
        
        // When
        withdrawMoney("12-01-2012", 500);

        // Then
        const result = historicAccount.find(obj => obj.date === '12-01-2012').account;
        expect(result).toBe(500);
      });
    });

    describe('tests function allHistoryTransaction', () => {

      it('should get all transactions', () => {
        // Given
        const historicAccount = allHistoryTransaction;

        // When

        // Then
        expect([
          { date: '10-01-2012', account: 1000, balance: 1000 },
          { date: '12-01-2012', account: 500, balance: 500 }
        ]).toEqual(expect.arrayContaining(historicAccount));
      });
    });
}); 