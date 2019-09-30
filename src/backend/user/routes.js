const passport = require('passport');
require('../config/passport')(passport)

module.exports = (app) => {
    const user = require('./controller');

    // Register users
    app.post('/api/register', user.register);

    // Login the user
    app.post('/api/login', user.login);

    // Return current user
    app.get('/api/current', passport.authenticate('jwt', {session: false}), user.current);

    // Update the user
    app.put('/api/user', passport.authenticate('jwt', {session: false}), user.update);

    // Google auth
    app.post('/api/authentication/google', passport.authenticate('google-token',  {session: false}), user.generateUserToken);

    // github auth
    app.post('/api/authentication/facebook', passport.authenticate('facebook-token',  {session: false}), user.generateUserToken);
      
};