package pianocity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.orElse(null);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customer){
        Optional<Customer> updatedCustomer = customerRepository.findById(id);
        if(updatedCustomer.isEmpty()){
            throw new IllegalStateException("customer with id" + id+ "doesn't exist");
        }
        updatedCustomer.get().setCustomerName(customer.getCustomerName());
        updatedCustomer.get().setCustomerAddress(customer.getCustomerAddress());
        updatedCustomer.get().setCustomerDateOfBirth(customer.getCustomerDateOfBirth());
        updatedCustomer.get().setCustomerPhoneNumber(customer.getCustomerPhoneNumber());
        return customerRepository.save(updatedCustomer.get());
    }

    public void deleteCustomer(Long id) {
        boolean exists = customerRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("customer with id" + id + "doesn't exist");
        }
        customerRepository.deleteById(id);
    }
    public Customer findByCustomerName(String customerName) {
        return customerRepository.findByCustomerName(customerName);
    }
}
