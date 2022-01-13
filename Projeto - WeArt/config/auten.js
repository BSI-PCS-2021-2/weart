const dbsql = require("../bd/dbsql");
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {

  passport.serializeUser((user, done) => {
          
          done(null, user.id);
      });

      passport.deserializeUser(async (id, done) => {
          try {

              const user = await dbsql.checaclienteid(id);
              done(null, user);
          } catch (err) {
              done(err, null);
          }
      });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha'
    },
        async (username, password, done) => {
            try {
                const user = await dbsql.checaclientelogin(username);


                // usuário inexistente
                if (user.length==0) {
                  console.log("senha errada");
                  return done(null, false)


                 }

                // comparando as senhas

                console.log(user)
                if (password != user[0].senha) {
                  console.log("login errado");
                  return done(null, false)
                }
                return done(null, user)
            } catch (err) {
                done(err, false);
            }
        }


    ));
    passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
}
