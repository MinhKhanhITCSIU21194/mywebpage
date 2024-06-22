package pianocity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pianocity.Product.Product;
import pianocity.Product.productRepository;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;
    private final productRepository productRepository;
    @Autowired
    public CartController(CartService cartService, productRepository productRepository) {
        this.cartService = cartService;
        this.productRepository = productRepository;
    }

    @GetMapping(path="/{userId}")
    public Cart getCart(@PathVariable Long userId) {
        return cartService.findCartByCustomerId(userId);
    }

    @PostMapping(path = "/{userId}/add")
    public Cart addPProductToCart(@PathVariable("userId") Long userId,
                                  @RequestParam("productId") Long productId) {
        return cartService.addItemToCart(productId,1,userId);
    }

    @DeleteMapping(path = "/{userId}/delete")
    public Cart deleteItemFromCart(@PathVariable("userId") Long id,
                           @RequestParam("productId") Long productId) {
        return cartService.removeItemFromCart(productId,id);
    }

    @PutMapping(path = "/{userId}/update")
    public Cart updateCart(@PathVariable("userId") Long id,
                           @RequestParam("productId") Long productId,
                           @RequestParam("quantity") int quantity) {
        return cartService.updateCart(productId,quantity,id);
    }

    @DeleteMapping(path = "/{userId}/deleteAll")
    public void deleteCart(@PathVariable("userId") Long userId) {
        cartService.deleteCartById(userId);
    }
}
