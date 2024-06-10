package pianocity.Order;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pianocity.User.User;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "Order")
public class Order {
    @Id
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    @Column(
            name ="orderID",
            updatable = false
    )
    private Long orderID;

    @Column(
            name = "orderCost",
            nullable = false
    )
    private Long orderCost;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "OrderUserID", referencedColumnName = "userID")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User UserID;

    @Column(
            name = "orderDate",
            nullable = false
    )
    private Date orderDate;
}
