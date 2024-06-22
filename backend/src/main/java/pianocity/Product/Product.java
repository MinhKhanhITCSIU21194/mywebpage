package pianocity.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import pianocity.CartProduct.CartProduct;
import pianocity.Category.Category;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "product")
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "product_id", updatable = false)
    private Long id;

    private String productName;

    private Long cost;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    private String productImage;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    List<CartProduct> cartProductList;

    public Product(String productName, Long cost, Category category, String productImage) {
        this.productName = productName;
        this.cost = cost;
        this.setCategory(category);
        this.productImage = productImage;
    }

}
