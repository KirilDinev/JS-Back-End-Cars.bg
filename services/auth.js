const User = require('../models/User.js');

async function register(session, username, password) {
    const user = new User({
        username,
        hashedPassword: password,
    });
    await user.save();
    
    session.user = {
        id: user._id,
        username: user.username
    }
}


async function login(session, username, password) {
    const user = await User.findOne({ username });

    if (user && await user.comparePassword(password)) {
        session.user = {
            id: user._id,
            username: user.username
        }
        return true;
    } else {
        throw new Error('Incorect username or password');
    }
}

module.exports = () => (req, res, next) => {
    req.auth = {
        register: (...params) => register(req.session, ...params),
        login: (...params) => login(req.session, ...params),
    }

    next();
}