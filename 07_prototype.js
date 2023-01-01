function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  Bank.prototype.openTime = "9 AM IST";
  Bank.prototype.closeTime = "6 PM IST";
  let yesBank = new Bank("YES Bank", "Phandharpur", "YES00034234", 1543);
  let sbiBank = new Bank("SBI Bank", "Mumbai", "SBI00056876", 1242);
  let mahBank = new Bank("Bank Of Maharashtra", "Pune", "MAH00011287", 5686);
  let axisBank = new Bank("AXIS Bank", "sagola", "AX00048665", 9824);
  console.log(`1.`);
  console.log(`Bank Details is :`, yesBank);
  console.log(`Bank Details is :`, sbiBank);
  console.log(`Bank Details is :`, mahBank);
  console.log(`Bank Details is :`, axisBank);
  console.log(`----------------------------------------------------------------------------------------------------`);

  console.log(`2.`);
  console.log(
    `The Open Time of SBI Bank is :`,
    `"${sbiBank.openTime}"`,
    `And The Close Time of SBI Bank is :`,
    `"${sbiBank.closeTime}".`
  );

  console.log(`----------------------------------------------------------------------------------------------------`);
  console.log(`3.`);
  console.log(
    `The Bank Name is :`,
    `"${axisBank.bankName}"`,
    `And The Close Time of Axis Bank is :`,
    `"${axisBank.closeTime}".`
  );

  console.log(`-------------------------------------------------------------------------------------------------------`);
  console.log(`4.`);
  console.log(
    `The Bank Name is :`,
    `"${yesBank.bankName}"`,
    `The Branch Code is :`,
    `"${yesBank.branchCode}"`,
    `And The Open Time of YES Bank is: `,
    `"${yesBank.openTime}"`
  );