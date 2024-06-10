package pianocity.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    @Column(
            name ="productID",
            updatable = false
    )
    private Long productID;

    @Column(
            name = "productName",
            nullable = false
    )
    private String productName;

    @Column(
            name = "productCost",
            nullable = false
    )
    private Long cost;

    @Column(
            name = "productCategory"
    )
    private String productCategory;

    @Column(
            name = "productImage"
    )
    private String productImage;

    public Product(){};

    public Product(String productName, Long cost, String productCategory, String productImage) {
        this.productName = productName;
        this.cost = cost;
        this.productCategory = productCategory;
        this.productImage = productImage;
    }

}
