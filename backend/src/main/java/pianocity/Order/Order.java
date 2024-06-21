package pianocity.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pianocity.Customer.Customer;

import java.util.Date;

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
            name ="orderId",
            updatable = false
    )
    private Long orderId;

    private Long orderCost;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    private Date orderDate;

}
