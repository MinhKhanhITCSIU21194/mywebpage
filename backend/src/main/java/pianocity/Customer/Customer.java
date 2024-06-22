package pianocity.Customer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pianocity.Cart.Cart;
import pianocity.Order.Order;
import java.util.List;

import java.util.Date;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id", updatable = false)
    private Long id;

    private String customerName;

    private Date customerDateOfBirth;

    private String customerPhoneNumber;

    private String customerAddress;

    @OneToOne(mappedBy = "customer",cascade = CascadeType.ALL)
    private Cart cart;

    @OneToMany(mappedBy = "customer")
    private List<Order> orders;


    public Customer(String customerName, Date customerDateOfBirth, String customerPhoneNumber, String customerAddress) {
        this.customerName = customerName;
        this.customerDateOfBirth = customerDateOfBirth;
        this.customerPhoneNumber = customerPhoneNumber;
        this.customerAddress = customerAddress;
    }

    @Override
    public String toString(){
        return "Customer{"+
                "CustomerId = " + id +
                ", CustomerName = " + customerName +
                ",phoneNum =" + customerPhoneNumber +
                ", address = " + customerAddress +
                "}";
    }
}
