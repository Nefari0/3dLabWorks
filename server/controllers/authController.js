const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        console.log(req.body)
        const {user_name, password, email, first_name, is_admin} = req.body;
        if (is_admin != false){
            return(alert('this operation cannot be completed because of a security breach'))
        }
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

    changePassword: async (req,res) => {
        const { user_name, oldPassword, newPassword1, newPassword2 } = req.body;
        const db = req.app.get('db')
        const foundUser = await req.app.get('db').get_user([user_name]);
        const user = foundUser[0];
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(oldPassword, user.hash);
        console.log('isAuthenticated', isAuthenticated)
        if (!isAuthenticated) {
            return res.status(401).send('incorrect password')
        }
        if (isAuthenticated === true && newPassword1 === newPassword2) {
            
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(newPassword1,salt);
            await db.update_user_password([hash,user_name])
            console.log('password has been changed')
            
        }

        return res.status(202).send(user).catch

    },

    login: async (req,res) => {
        const { user_name, password } = req.body;
        console.log('this is user',user_name)
        if (user_name.split('').length < 1) {
            return res.status(401).send('user not found')
        }
        const foundUser = await req.app.get('db').get_user([user_name]);
        const user = foundUser[0];
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        const user_likes = await req.app.get('db').get_likes([user.user_id]);
        req.session.user = { 
            user_likes: user_likes,
            email: user.email,
            is_admin: user.is_admin, 
            user: user.user_name,
             id: user.user_id,
             name: user.first_name,
             photo: user.photo_url,
             auth: isAuthenticated
         };
        //  userData(req.session.data)
            return res.status(200).send(req.session.user)
    },

    logout: async (req,res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },

    // update: async (req,res) => {
    //     const db = req.app.get('db')
    //     const { photo_url } = req.body
    //     const { user_id } = req.params
    //     const user = await db.update_user([photo_url,user_id])
    //     return res.status(200).send(user)
    // },

     userData(req, res) {
    const { user } = req.session;
    if (user) return res.status(200).send({ loggedIn: true, user });
    else return res.sendStatus(401)
  },

    getInfo: async (req,res) => {
        const db = req.app.get('db')
        const { user_id } = req.body
        const info = await db.get_info([user_id])
        return res.status(200).send(info)
        
    }
};