const register = async (req, res) => {
  res.status(200).json({ message: 'Register' });
};

const login = async (req, res) => {
  res.status(200).json({ message: 'Login' });
};

module.exports = {
  register,
  login,
};
