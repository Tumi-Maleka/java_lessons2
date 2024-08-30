const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample data with 5 customers
const customers = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: 30,
    homeaddress: {
      line1: "123 Main St",
      postalCode: "12345"
    },
    postaladdress: {
      line1: "456 Secondary St",
      postalCode: "67890"
    },
    email: "john.doe@example.com",
    phone1: "123-456-7890",
    phone2: "098-765-4321",
    accounts: [
      {
        accountNumber: "123456",
        accountType: { code: "SAV", description: "Savings" },
        accountStatus: { code: "ACT", description: "Active" },
        accountLimit: { amount: 5000, limitType: { code: "DAILY", description: "Daily" } },
        accountBalance: 1000
      }
    ]
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    age: 25,
    homeaddress: {
      line1: "789 Third St",
      postalCode: "54321"
    },
    postaladdress: {
      line1: "321 Fourth St",
      postalCode: "98765"
    },
    email: "jane.smith@example.com",
    phone1: "987-654-3210",
    phone2: "012-345-6789",
    accounts: [
      {
        accountNumber: "654321",
        accountType: { code: "CHK", description: "Checking" },
        accountStatus: { code: "ACT", description: "Active" },
        accountLimit: { amount: 2000, limitType: { code: "MONTHLY", description: "Monthly" } },
        accountBalance: 1500
      }
    ]
  },
  {
    id: 3,
    name: "Alice",
    surname: "Johnson",
    age: 28,
    homeaddress: {
      line1: "246-Fifth-Ave",
      postalCode: "13579"
    },
    postaladdress: {
      line1: "135-Sixth-Ave",
      postalCode: "24680"
    },
    email: "alice.johnson@example.com",
    phone1: "246-810-1214",
    phone2: "314-159-2653",
    accounts: [
      {
        accountNumber: "789012",
        accountType: { code: "SAV", description: "Savings" },
        accountStatus: { code: "ACT", description: "Active" },
        accountLimit: { amount: 3000, limitType: { code: "DAILY", description: "Daily" } },
        accountBalance: 2000
      }
    ]
  },
  {
    id: 4,
    name: "Bob",
    surname: "Brown",
    age: 35,
    homeaddress: {
      line1: "987 Seventh St",
      postalCode: "11223"
    },
    postaladdress: {
      line1: "654 Eighth St",
      postalCode: "44556"
    },
    email: "bob.brown@example.com",
    phone1: "678-910-1112",
    phone2: "212-345-6789",
    accounts: [
      {
        accountNumber: "345678",
        accountType: { code: "CHK", description: "Checking" },
        accountStatus: { code: "ACT", description: "Active" },
        accountLimit: { amount: 1000, limitType: { code: "DAILY", description: "Daily" } },
        accountBalance: 500
      }
    ]
  },
  {
    id: 5,
    name: "Charlie",
    surname: "Davis",
    age: 40,
    homeaddress: {
      line1: "123 Ninth St",
      postalCode: "66789"
    },
    postaladdress: {
      line1: "321 Tenth St",
      postalCode: "99001"
    },
    email: "charlie.davis@example.com",
    phone1: "567-890-1234",
    phone2: "432-109-8765",
    accounts: [
      {
        accountNumber: "901234",
        accountType: { code: "SAV", description: "Savings" },
        accountStatus: { code: "ACT", description: "Active" },
        accountLimit: { amount: 7000, limitType: { code: "MONTHLY", description: "Monthly" } },
        accountBalance: 4000
      }
    ]
  }
];

// POST v1/customers/ - Create a new customer
app.post('/v1/customers', (req, res) => {
  const newCustomer = { id: customers.length + 1, ...req.body };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// GET v1/customers/ - Get all customers
app.get('/v1/customers', (req, res) => {
  res.json(customers);
});

// GET v1/customers/{customerId} - Get customer by ID
app.get('/v1/customers/:customerId', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});

// PUT v1/customers/{customerId} - Update customer by ID
app.put('/v1/customers/:customerId', (req, res) => {
  const index = customers.findIndex(c => c.id === parseInt(req.params.customerId));
  if (index !== -1) {
    customers[index] = { id: customers[index].id, ...req.body };
    res.json(customers[index]);
  } else {
    res.status(404).send('Customer not found');
  }
});

// DELETE v1/customers/{customerId} - Delete customer by ID
app.delete('/v1/customers/:customerId', (req, res) => {
  const index = customers.findIndex(c => c.id === parseInt(req.params.customerId));
  if (index !== -1) {
    customers.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Customer not found');
  }
});

// PUT v1/customers/{customerId}/postaladdress - Update postal address of customer
app.put('/v1/customers/:customerId/postaladdress', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    customer.postaladdress = req.body;
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});

// PUT v1/customers/{customerId}/homeaddress - Update home address of customer
app.put('/v1/customers/:customerId/homeaddress', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    customer.homeaddress = req.body;
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});

// POST v1/customers/{customerId}/{accountNumber} - Add a new account for a customer
app.post('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    const newAccount = { accountNumber: req.params.accountNumber, ...req.body };
    customer.accounts.push(newAccount);
    res.status(201).json(newAccount);
  } else {
    res.status(404).send('Customer not found');
  }
});

// PUT v1/customers/{customerId}/{accountNumber} - Update an account for a customer
app.put('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    const account = customer.accounts.find(a => a.accountNumber === req.params.accountNumber);
    if (account) {
      Object.assign(account, req.body);
      res.json(account);
    } else {
      res.status(404).send('Account not found');
    }
  } else {
    res.status(404).send('Customer not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
