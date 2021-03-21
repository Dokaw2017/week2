"use strict";
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const userModel = require("../models/userModel");


passport.use(
  new Strategy( (username, password, done) => {
    
      const user = userModel.getUserLogin(username);
     
      if (user === undefined) {
        return done(null, false, { message: "Incorrect email." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }

      delete user.password;
   return done(null,user)
   
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "12345",
    },
     (jwtPayload, done) => {
       console.log('Payload',jwtPayload);
       const user = userModel.getUserLogin(jwtPayload.email);
       if(user === undefined){
         return done(null,false);
       }
       return done(null,jwtPayload);
     
    }
  )
);

module.exports = passport;
