package pianocity.Product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class productConfig {
    @Bean
    CommandLineRunner productCommandLineRunner(productRepository productRepository) {
        return args -> {
            Product product1 = new Product("hjhj",200L,"dan","");
            productRepository.saveAll(List.of(product1));
        };
    }
}
