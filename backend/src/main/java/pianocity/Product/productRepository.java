package pianocity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface productRepository extends JpaRepository<Product,Long>{
    @Query("select p from Product p inner join Category c ON c.id = p.category.id" +
            " where p.category.name = ?1 ")
    List<Product> findAllByCategory(String category);
    Optional<Product> findProductByProductName(String productName);

    Product findProductById(Long productId);
}
