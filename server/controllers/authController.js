const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        console.log(req.body)
        const {user_name, password, email, first_name, is_admin} = req.body;
        const db = req.app.get('db')
        const result = await db.get_user([user_name])
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('this username is already being used');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const registeredUser= await db.register_site_user([user_name, hash, email, first_name, is_admin])
        const user = registeredUser[0];

  
        // req.session.user = { isAdmin: user.is_admin, email: user.user_name, id: user.user_id };

        // req.session.user = { 
        //     is_admin: user.is_admin, 
        //     user_name: user.user_name,
        //     user: user.user_name,
        //     id: user.user_id
        //  };

        req.session.user = { 
            isAdmin: user.is_admin, 
            user: user.user_name,
             id: user.user_id
         };

        console.log(req.session.user)
        return res.status(201).send(req.session.user).catch(err => console.log(err))
    },

    login: async (req,res) => {
        const { user_name, password } = req.body;
        const foundUser = await req.app.get('db').get_user([user_name]);
        const user = foundUser[0];
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        console.log('isAuthenticated',isAuthenticated)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        // req.session.user = { isAdmin: user.is_admin, id: user.user_id, email: user.email, username: user.user_name};
        req.session.user = { 
            email: user.email,
            is_admin: user.is_admin, 
            user: user.user_name,
             id: user.user_id,
             name: user.first_name,
             photo: user.photo_url
         };
            return res.status(200).send(req.session.user)
    },

    logout: async (req,res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
};