package pianocity.Cart;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pianocity.CartProduct.CartProduct;
import pianocity.Customer.Customer;

import java.util.HashSet;
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

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    private double totalPrice;

    private int totalItems;

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "cart")
    private Set<CartProduct> cartProducts;

    public Cart() {
        this.cartProducts = new HashSet<>();
        this.totalItems = 0;
        this.totalPrice = 0.0;
    }

}