package pianocity.Product;
import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@Entity
@Table(name = "product")
@AllArgsConstructor
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

    private String productCategory;

    private String productImage;

    public Product(String productName, Long cost, String productCategory, String productImage) {
        this.productName = productName;
        this.cost = cost;
        this.productCategory = productCategory;
        this.productImage = productImage;
    }

}
