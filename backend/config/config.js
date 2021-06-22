module.exports={
    mongopass : process.env.Mongoose_mini_password,
    mongologin : process.env.Mongoose_mini_login,
    MONGO_CONNECTION_STRING : process.env.stringmongo || '',
    SESSION_SECRET:process.env.sessionsecrete || 'management'
}
