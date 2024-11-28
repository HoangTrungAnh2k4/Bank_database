const db = require("../config/db");

class AdminService {
  getInforUser = async (req, res) => {
    try {
      const user = "getInforUser success";
      return user;
    } catch (error) {
      throw new Error("Error fetching user by ID: " + error.message);
    }
  };
  getServiceReport = async () => {
    try {
      const [results] = await db.query(`
        SELECT 
            e.employeeID,
            CONCAT(e.firstName, ' ', e.lastName) AS employeeName,
            e.branchName,
            CASE 
                WHEN b.employeeID IS NOT NULL THEN 'Manager'
                ELSE 'Staff'
            END AS position,
            c.customerCode,
            CONCAT(c.firstName, ' ', c.lastName) AS customerName,
            c.email,
            s.dateOfServing
        FROM 
            ServedDate s
        JOIN 
            Employee e ON s.eID = e.employeeID
        JOIN 
            Customer c ON s.cID = c.customerCode
        LEFT JOIN 
            Branch b ON e.employeeID = b.employeeID 
        ORDER BY 
            s.dateOfServing DESC;
      `);
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  };

    getInforUser = async (req, res) => {
        try {
            const user = 'getInforUser success';
            return user;
        } catch (error) {
            throw new Error('Error fetching user by ID: ' + error.message);
        }
    };

    getCustomerByName = async (name) => {
        try {
            const [customerAccounts] = await db.query(
                `
            SELECT 
                c.firstName,
                c.lastName,
                c.customerCode,
                a.accountNumber,
                a.accountType,
                a.openDate,
                la.dateOfTaken AS loanDateOfTaken,
                la.dueBalance AS loanDueBalance,
                la.interestRate AS loanInterestRate,
                sa.interestRate AS savingInterestRate,
                sa.accountBalance AS savingAccountBalance,
                ca.accountBalance AS checkingAccountBalance
            FROM 
                Customer c
            LEFT JOIN 
                Account a ON c.customerCode = a.customerCode
            LEFT JOIN 
                LoanAccount la ON a.accountNumber = la.accountNumber
            LEFT JOIN 
                SavingsAccount sa ON a.accountNumber = sa.accountNumber
            LEFT JOIN 
                CheckingAccount ca ON a.accountNumber = ca.accountNumber
            WHERE 
                CONCAT(c.firstName, ' ', c.lastName) = ?;
        `,
                [name]
            );

            const result = customerAccounts.reduce((acc, curr) => {
                const customerKey = curr.customerCode;

                if (!acc[customerKey]) {
                    acc[customerKey] = {
                        firstName: curr.firstName,
                        lastName: curr.lastName,
                        customerCode: curr.customerCode,
                        accounts: [],
                    };
                }

                acc[customerKey].accounts.push({
                    accountNumber: curr.accountNumber,
                    accountType: curr.accountType,
                    openDate: curr.openDate,
                    loanDetails: curr.loanDateOfTaken
                        ? {
                              dateOfTaken: curr.loanDateOfTaken,
                              dueBalance: curr.loanDueBalance,
                              interestRate: curr.loanInterestRate,
                          }
                        : null,
                    savingDetails: curr.savingInterestRate
                        ? {
                              interestRate: curr.savingInterestRate,
                              accountBalance: curr.savingAccountBalance,
                          }
                        : null,
                    checkingDetails: curr.checkingAccountBalance
                        ? { accountBalance: curr.checkingAccountBalance }
                        : null,
                });

                return acc;
            }, {});
            return Object.values(result);
        } catch (error) {
            throw err;
        }
    };

}

module.exports = new AdminService();
