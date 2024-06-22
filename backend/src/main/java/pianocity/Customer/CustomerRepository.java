package pianocity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;
@Repository
public interface  CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByCustomerName(String customerName);
}
