const passport = require('passport')
const { Mongoose } = require('mongoose')
const googleStrategy = require('passport-google-oauth20').Strategy
const mongoose= require('mongoose')
const userModel= require('../models/user')
const config=require('../config/config')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    userModel.findById(id).then((user)=>{
        done(null,user)
    })
})

passport.use(new googleStrategy(
    {
        clientID:config.googleClientId,
        clientSecret:config.googleClientSecret,
        callbackURL:"/api/auth/google/callback",
        proxy:true
    },
    async (accessToken,refreshToken,profile,done)=>{
        const existingUser = await userModel.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }
        parsedEmails=[]
        profile.emails.map((value)=>{parsedEmails.push(value.value)})
        const user = await new userModel({ 
            googleId: profile.id , 
            uname: `_g${parsedEmails[0]}`,
            emails:parsedEmails
        }).save();
        done(null, user);


    }
))