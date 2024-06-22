package pianocity.Order;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pianocity.Customer.Customer;
import pianocity.OrderDetail.OrderDetail;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "orders")
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name ="order_id",
            updatable = false
    )
    private Long orderId;

    private int quantity;

    private Double orderCost;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Customer customer;

    private Date orderDate;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "order")
    private List<OrderDetail> orderDetailList;
}
