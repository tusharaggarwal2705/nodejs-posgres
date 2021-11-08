module.exports = {
    db: {
        HOST: process.env.HOST,
        USER: process.env.USER,
        PASSWORD:process.env.PASSWORD,
        DB: "testdb",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    appSecret: process.env.app_secret,
    httpStatusCodes: {
        OK: 200,
        CREATED: 201,
        CONTENT_NOT_FOUND: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENT_REQUIRED: 402,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        REQUEST_TIMED_OUT: 408,
        ALREADY_EXISTS: 409,
        INTERNAL_SERVER: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504
    }
}