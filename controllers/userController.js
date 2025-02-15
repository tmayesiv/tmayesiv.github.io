const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
    newUser: async (req, res) => {
        try {
          const userObj = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            displayName: req.body.displayName,
          });
          const successSave = await userObj.save();
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
          res.header('Access-Control-Allow-Methods', 'POST');
          res.header('Access-Control-Allow-Headers', 'Content-Type');
          res.json({success: true, user: {
            email: successSave.email,
            displayName: successSave.displayName,
            _id: successSave._id,
          }});
        } catch (err) {
          res.header('status', 400);
          res.send(err);
        }
      },
      getOne: async (req, res) => {
        try {
          const oneUser = await User.findOne({ _id: req.params.id });
          res.json(oneUser);
        } catch (err) {
          res.send(err);
        }
      },
      login: async (req, res) => {
        const { email, password } = req.body;
        // console.log(email, password);
        try {
          const user = await User.findOne({ email });
    
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
    
          const passwordMatch = await bcrypt.compare(password, user.password);
    
          if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
          }
    
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
          res.header('Access-Control-Allow-Methods', 'POST');
          res.header('Access-Control-Allow-Headers', 'Content-Type');
          res.json({ success: true, user: {
            displayName: user.displayName,
            id: user._id
          } });
    
        } catch (err) {
          console.error('Error:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },
      updateOne: async (req, res) => {
        try {
          if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password);
          }
          const updateUser = await User.updateOne(
            { _id: req.params.id },
            { $set: req.body }
          );
          res.json(updateUser);
        } catch (err) {
          res.send(err);
        }
      },
      deleteOne: async (req, res) => {
        try {
          res.json(await User.findByIdAndDelete(req.params.id));
        } catch (err) {
          res.send(err);
        }
      },

}