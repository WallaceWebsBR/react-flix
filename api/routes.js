module.exports = function(app) {
    var userHandlers = require('./controllers');
    // todoList Routes
    app.route('/inicio')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/cadastro')
        .post(userHandlers.register);
    app.route('/auth/login')
        .post(userHandlers.sign_in);
};