package pianocity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productService {
    private final productRepository productRepository;

    @Autowired
    public productService(productRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProduct(){
        return productRepository.findAll();
    }

    public Product findProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public Product findProductByProductName(String productName) {
        return productRepository.findProductByProductName(productName).get();
    }

    public Product findProductByCategory(String category) {
        return productRepository.findProductByProductCategory(category).get();
    }

    public Product addNewProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Long productID) {
        boolean exists = productRepository.existsById(productID);
        if (!exists) {
            throw new IllegalStateException("product with id" + productID + "doesn't exist");
        }
        productRepository.deleteById(productID);
    }

    public Product updateProduct(Long productID, Product product) {
        Optional<Product> updatedProduct = productRepository.findById(productID);
        if(updatedProduct.isEmpty()){
            throw new IllegalStateException("product with id" + productID + "doesn't exist");
        }

        updatedProduct.get().setProductImage(product.getProductImage());
        updatedProduct.get().setProductName(product.getProductName());
        updatedProduct.get().setProductCategory(product.getProductCategory());
        updatedProduct.get().setCost(product.getCost());

        return productRepository.save(updatedProduct.get());
    }
}
