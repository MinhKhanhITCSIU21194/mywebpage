package pianocity.Product;
import jakarta.persistence.*;
import lombok.*;
import pianocity.Category.Category;

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

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    private String productImage;


}
