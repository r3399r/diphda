type Voucher = {
  name: string;
  amount: number;
  prizeNumberByWeek: string[][];
};

export const domesticTravel: Voucher = {
  name: '國旅券',
  amount: 1000,
  prizeNumberByWeek: [
    ['21', '32', '98', '67', '97', '410'],
    ['87', '04', '40', '29', '71'],
    ['44', '34', '09', '55', '35', '041'],
    ['32', '02', '87', '93', '82', '17'],
  ],
};

export const iYuan: Voucher = {
  name: 'i原券',
  amount: 1000,
  prizeNumberByWeek: [
    ['64', '85'],
    ['12', '59'],
    ['48', '49'],
    ['29', '82', '71'],
  ],
};

export const argriculture: Voucher = {
  name: '農遊券',
  amount: 888,
  prizeNumberByWeek: [
    ['89', '32', '54', '597', '453', '152'],
    ['50', '13'],
    ['60', '75'],
    [
      '315',
      '740',
      '381',
      '264',
      '285',
      '765',
      '682',
      '763',
      '373',
      '015',
      '374',
    ],
  ],
};

export const artFunDigit: Voucher = {
  name: '藝FUN券(數位)',
  amount: 600,
  prizeNumberByWeek: [
    ['96', '15', '07', '30', '73', '98', '19', '11'],
    ['78', '00', '39', '22', '61', '23', '15'],
    ['01', '92', '19', '23', '79', '95', '48', '46'],
    ['70', '61', '37', '85', '67', '35', '44'],
  ],
};

export const artFunPaper: Voucher = {
  name: '藝FUN券(紙本)',
  amount: 600,
  prizeNumberByWeek: [
    ['39', '37', '23', '36', '79', '08', '14', '75'],
    ['37', '76', '31', '06', '51', '65', '81'],
    ['31', '56', '02', '52', '44', '49', '00', '47', '59'],
    ['75', '72', '71', '28', '67', '82', '93', '56', '34', '07'],
  ],
};

export const sports: Voucher = {
  name: '動滋券',
  amount: 500,
  prizeNumberByWeek: [
    ['97', '13', '19', '55', '71', '93', '381', '734', '644', '453', '985'],
    ['91', '11', '04', '18', '57', '498', '756'],
    ['82', '45', '57', '53', '00', '546', '855', '865', '012', '983'],
    ['30', '03', '51', '88'],
  ],
};

export const hakka: Voucher = {
  name: '客庄券',
  amount: 500,
  prizeNumberByWeek: [
    ['81', '900'],
    [
      '11',
      '439',
      '841',
      '052',
      '206',
      '161',
      '457',
      '205',
      '012',
      '293',
      '446',
      '589',
    ],
    ['14', '269'],
    ['69'],
  ],
};

export const regionalRevitalization: Voucher = {
  name: '地方創生券',
  amount: 500,
  prizeNumberByWeek: [
    [
      '081',
      '105',
      '594',
      '188',
      '089',
      '396',
      '521',
      '467',
      '912',
      '798',
      '358',
      '441',
      '367',
      '941',
      '335',
    ],
    ['598', '880', '886', '675', '684', '568', '645', '456'],
    ['771', '706', '064', '168', '191', '459', '135', '314', '366'],
    ['743', '201', '119', '828', '221', '750', '046'],
  ],
};

export const vouchers = [
  domesticTravel,
  iYuan,
  argriculture,
  artFunDigit,
  artFunPaper,
  sports,
  hakka,
  regionalRevitalization,
];
