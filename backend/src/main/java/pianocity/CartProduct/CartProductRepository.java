package pianocity.CartProduct;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartProductRepository extends CrudRepository<CartProduct, Long> {
    @Query(value = "update cart_products set cart_id = null where cart_id = ?1", nativeQuery = true)
    void deleteCartProductById(Long cartId);

}
