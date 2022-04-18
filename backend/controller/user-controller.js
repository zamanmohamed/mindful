const uuid = require("uuid");

const DUMMY_USERS = [
  {
    id: "u1",
    Firstname: "Mohamed",
    lastname: "Shaman",
    email: "test@test1.com",
    password: "123",
  },
  {
    id: "u2",
    Firstname: "Mohamed",
    lastname: "Shaman",
    email: "test@test2.com",
    password: "456",
  },
  {
    id: "u3",
    Firstname: "Mohamed",
    lastname: "Shaman",
    email: "test@test3.com",
    password: "789",
  },
];

const RegisterUser = (req, res, next) => {
  const { Firstname, lastname, email, password } = req.body;

  const hasUser = DUMMY_USERS.some((u) => u.email === email);

  if (hasUser) {
    console.error("Email used in already");
    res.status(200).json({ Error: "Email used in already" });
  } else {
    console.error("ok");
    const createdUser = {
      id: uuid.v1(),
      Firstname,
      lastname,
      email,
      password,
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json(createdUser);
  }
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = DUMMY_USERS.find((u) => u.email === email);

  if (!existingUser || existingUser.password !== password) {
    console.log("Error");
    res.status(201).json({ massage: "Error" });
  } else {
    console.log("ok");
    res.status(200).json(existingUser);
  }
};

const getUsers = (req, res, next) => {
  res.json(DUMMY_USERS);
};

const getuserById = (req, res, next) => {
  const userId = req.params.uid;

  const user = DUMMY_USERS.filter((p) => {
    return p.id === userId;
  });

  res.json(user);
};

const updateuser = (req, res, next) => {
  const { Firstname, lastname, password } = req.body;
  const userId = req.params.id;

  const updateuser = { ...DUMMY_USERS.find((p) => p.id === userId) };
  const userIndex = DUMMY_USERS.findIndex((p) => p.id === userId);

  //const updateuser = DUMMY_USERS.find((u) => u.userId === id);

  updateuser.Firstname = Firstname;
  updateuser.lastname = lastname;
  updateuser.password = password;

  DUMMY_USERS[userIndex] = updateuser;

  res.status(200).json({ users: DUMMY_USERS });
};

exports.RegisterUser = RegisterUser;
exports.getUsers = getUsers;
exports.login = login;
exports.updateuser = updateuser;
exports.getuserById = getuserById;
