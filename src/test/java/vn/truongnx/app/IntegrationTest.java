package vn.truongnx.app;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import vn.truongnx.app.GiftShopApp;
import vn.truongnx.app.RedisTestContainerExtension;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = GiftShopApp.class)
@ExtendWith(RedisTestContainerExtension.class)
public @interface IntegrationTest {
}
