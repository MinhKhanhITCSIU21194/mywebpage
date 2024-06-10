package pianocity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface productRepository extends JpaRepository<Product,Long>{
    Optional<Product> findProductByProductName(String productName);
    Optional<Product> findProductByProductID(Long productID);
    Optional<Product> findProductByProductCategory(String productCategory);
}
