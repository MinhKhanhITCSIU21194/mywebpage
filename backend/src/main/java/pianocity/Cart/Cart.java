package pianocity.Cart;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pianocity.CartProduct.CartProduct;
import pianocity.Customer.Customer;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    @JsonIgnore
    private Customer customer;

    private double totalPrice;

    private int totalItems;

    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL)
    private List<CartProduct> cartProducts;

    public Cart() {
        this.totalItems = 0;
        this.totalPrice = 0.0;
    }


    public Long getCustomer() {
        return customer.getId();
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id:" + id +
                ", customerId:" + customer.getId() +
                ", quantity:" + totalItems +
                ", totalPrice:" + totalPrice +
                '}';
    }

}