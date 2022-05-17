const bcrypt = require('bcrypt')

// --- user will not login to too much time has lapsed since previous login --- //
// const findTimeInterval = (time1,time2) => {
//     var prevTime = time1.toString().split(' ')
//     var newTime = time2.toString().split(' ')
//     console.log(prevTime)
//     console.log(newTime)
//     if(prevTime[4] === newTime[4] && prevTime[3] === newTime[3]){
//       if(newTime[2] - prevTime[2] > 14) return true
//     } else {return false}
//   }

module.exports = {
    register: async (req,res) => {
        const {user_name, password, email, first_name, is_admin, is_sudo} = req.body;
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
        const registeredUser= await db.register_site_user([user_name, hash, email, first_name, is_admin, is_sudo])
        const user = registeredUser[0];

  
        // req.session.user = { isAdmin: user.is_admin, email: user.user_name, id: user.user_id };

        // req.session.user = { 
        //     is_admin: user.is_admin, 
        //     user_name: user.user_name,
        //     user: user.user_name,
        //     id: user.user_id
        //  };

        // req.session.user = { 
        //     isAdmin: user.is_admin, 
        //     user: user.user_name,
        //      id: user.user_id
        //  };

        req.session.user = { 
            // user_likes: user_likes,
            email: user.email,
            is_admin: user.is_admin, 
            user: user.user_name,
             id: user.user_id,
             name: user.first_name,
             last_name:user.last_name,
             photo: user.photo_url,
             is_sudo:user.is_sudo,
            //  auth: isAuthenticated
         };

        // console.log('req.session from controller',req.session.user)
        // return res.status(201).send(req.session.user).catch(err => console.log(err))
        return res.status(201).send(req.session.user)
    },

    changePassword: async (req,res) => {
        const { user_name, oldPassword, newPassword1, newPassword2 } = req.body;
        // console.log('this is from change pass',oldPassword, newPassword1, newPassword2, user_name)
        // console.log('this is from change pass',user_name,oldPassword,newPassword2,newPassword1)
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

        return res.status(202).send(user)

    },

    login: async (req,res) => {

        // const hash = bcrypt.hashSync(password,salt);
        // const from_browser = visited
        const { user_name, password, last_visit, visited } = req.body;
        const browserSalt = bcrypt.genSaltSync(10);
        const from_browser = bcrypt.hashSync(visited,browserSalt)
        // console.log('this is user in authController',user_name,last_visit,visited)
        if(visited !== undefined){req.app.get('db').tracking.track_user_logging([user_name,visited])}
        if (user_name.split('').length < 1) { // --- does user_name from req.body exist
            return res.status(401).send('user not found')
        }
        const foundUser = await req.app.get('db').get_user([user_name]);
        const user = foundUser[0];
        // console.log('user backend',user)
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        const add_visit = await req.app.get('db').add_login_time_stamp([last_visit,from_browser,user_name])
        const user_likes = await req.app.get('db').get_likes([user.user_id]);
        req.session.user = { 
            user_likes: user_likes,
            email: user.email,
            is_admin: user.is_admin, 
            user: user.user_name,
             id: user.user_id,
             name: user.first_name,
             last_name:user.last_name,
             photo: user.photo_url,
             background_url: user.background_url,
             auth: isAuthenticated,
             is_sudo: user.is_sudo,
         };
         console.log('this is req.session',req.session.user.last_name)
        //  userData(req.session.data)
            return res.status(200).send(req.session.user)
    },
    // -- auto login from browser if usersession is saved -- //
    browserLogin: async (req,res) => {
        const { user_name, last_visit, visited } = req.body;
        const from_browser = visited
        // console.log('this is user in authController',user_name,last_visit,visited)
        if (user_name.split('').length < 1) { // --- does user_name from req.body exist
            return res.status(401).send('user not found')
        }
        const foundUser = await req.app.get('db').get_user([user_name]);
        const user = foundUser[0];
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(from_browser, user.from_browser);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        // if(visited !== undefined){req.app.get('db').tracking.track_user_logging([user_name,visited])}
        // const add_visit = await req.app.get('db').add_login_time_stamp([last_visit,user_name])


        // console.log(user.last_visit,'last login')
        // --- user will not login to too much time has lapsed since previous login --- //
        // if(findTimeInterval(user.last_visit,last_visit) === false) {
        //     return
        // }

        const user_likes = await req.app.get('db').get_likes([user.user_id]);
        req.session.user = { 
            user_likes: user_likes,
            last_name:user.last_name,
            email: user.email,
            is_admin: user.is_admin, 
            user: user.user_name,
            id: user.user_id,
            name: user.first_name,
            photo: user.photo_url,
            background_url: user.background_url,
            auth: isAuthenticated,
            is_sudo: user.is_sudo,
            last_login: user.last_visit
         };
        //  console.log('this is req.session',req.session)
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