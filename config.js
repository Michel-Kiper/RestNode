module.exports = {
    port: process.env.PORT || 3000,
    db:   process.env.MONGODB || 'mongodb://localhost:32768/',
    SECRET_TOKEN:'miclavedeTokens'
}