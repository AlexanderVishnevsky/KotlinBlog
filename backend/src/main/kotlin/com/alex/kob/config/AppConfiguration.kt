import com.alex.kob.config.SecurityConstants
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

@Deprecated("old security")
@Configuration
class AppConfiguration {
    @Bean
    fun bCryptPasswordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder(SecurityConstants.STRENGTH)
    }
}
