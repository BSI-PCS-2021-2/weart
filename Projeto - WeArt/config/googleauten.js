const dbsql = require("../bd/dbsql");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
var express = require('express');
var router = express();


  passport.serializeUser((user, done) => {

          done(null, user.id);
      });

      passport.deserializeUser(async (id, done) => {
        done(null, user);
      });

    passport.use(new GoogleStrategy({
        clientID: '148295978597-jn10eibf5vk45995mb6i0g50r8ua7cbe.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:3000/google/callback"
      },

    async  function(accessToken, refreshToken, profile, cb) {
        router.get('/sessaoG', (req, res) => {

          res.send(profile)

        });

        const user = await dbsql.checaclientelogin(profile.emails[0].value)
        console.log(user);

        if(user.length==0){
          dbsql.insertclientes({idade: 0, email: profile.emails[0].value, nome: profile.displayName,infoCartão: null,endereçoCompra: null,telefone: null,senha: 58878})
            const user2 = await dbsql.checaclientelogin(profile.emails[0].value);
            return cb(null, user2);

        }
         const teste=""

        return cb(null, user);

      }
    ));
