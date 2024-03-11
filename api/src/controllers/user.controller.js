const hello = (req, res) => {
  res.status(200).json({ message: 'Hello, users!' });
};

module.exports = {
  hello,
};
