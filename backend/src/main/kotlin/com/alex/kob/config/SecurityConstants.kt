package com.alex.kob.config

@Deprecated("old security")
object SecurityConstants {
    const val SECRET = "JWTSuperSecretKey"
    const val EXPIRATION_TIME: Long = 864000000 // 10 days
    const val TOKEN_PREFIX = "Bearer "
    const val HEADER_STRING = "Authorization"
    const val STRENGTH = 10
}
