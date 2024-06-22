package pianocity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class productController {
    private final productService productService;

    @Autowired
    public productController(productService productService) {
        this.productService = productService;
    }

    @GetMapping(path = "/")
    public List<Product> getProducts() {
        return productService.getProduct();
    }

    @GetMapping(path = "/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findProductById(id);
    }
    @GetMapping(path = "/category")
    public List<Product> getProductsByCategory(@RequestParam String category) {
        return productService.findProductByCategory(category);
    }
    @PostMapping(path = "/add")
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }

    @DeleteMapping(path = "/delete/{productID}")
    public void deleteProduct(@PathVariable("productID") Long productId){
        productService.deleteProduct(productId);
    }

    @PutMapping(path = "/update/{productID}")
    public Product updateProduct(@PathVariable("productID") Long productId, @RequestBody Product product){
        return productService.updateProduct(productId, product);
    }
}
