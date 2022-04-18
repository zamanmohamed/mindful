const DUMMY_ADMIN = [
  {
    id: "a1",
    name: "Shaman",
    email: "admin@gmail.com",
    password: "123",
  },
];

const login = (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = DUMMY_ADMIN.find((u) => u.email === email);

  if (!existingUser || existingUser.password !== password) {
    console.log("Error");
    res.status(201).json({ message: "Error" });
  } else {
    console.log("ok");
    res.status(200).json(existingUser);
  }
};

exports.login = login;
