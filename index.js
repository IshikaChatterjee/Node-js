const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    created_at: "2023-01-15T08:00:00Z",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    created_at: "2023-01-16T09:30:00Z",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol.white@example.com",
    created_at: "2023-01-17T10:45:00Z",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    created_at: "2023-01-18T11:20:00Z",
  },
  {
    id: 5,
    name: "Eva Martin",
    email: "eva.martin@example.com",
    created_at: "2023-01-19T14:35:00Z",
  },
];

app.get("/", (req, res) => {
  res.send({ first_name: "Ishika", last_name: "Chatterjee" });
});

app.get("/dummyapi", (req, res) => {
  const { name, email } = req.query;

  // Convert name and email queries to arrays if they are not already
  const namesArray = name ? (Array.isArray(name) ? name : [name]) : [];
  const emailsArray = email ? (Array.isArray(email) ? email : [email]) : [];

  // Filter users where either name or email matches any of the provided values
  let filteredUsers = users.filter((user) =>
    namesArray.some(n => user.name.toLowerCase().includes(n.toLowerCase())) ||
    emailsArray.some(e => user.email.toLowerCase().includes(e.toLowerCase()))
  );

  res.send(filteredUsers);
});

app.post("/dummyapipost", (req, res) => {
    const { names, emails } = req.body;
  
    // Convert names and emails to arrays if they are not already
    const namesArray = names ? (Array.isArray(names) ? names : [names]) : [];
    const emailsArray = emails ? (Array.isArray(emails) ? emails : [emails]) : [];
  
    // Filter users where either name or email matches any of the provided values
    let filteredUsers = users.filter((user) =>
      namesArray.some(n => user.name.toLowerCase().includes(n.toLowerCase())) ||
      emailsArray.some(e => user.email.toLowerCase().includes(e.toLowerCase()))
    );
  
    res.send(filteredUsers);
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
