const bcrypt = require('bcryptjs');

const password = '12345';  // Replace with the actual admin password

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
