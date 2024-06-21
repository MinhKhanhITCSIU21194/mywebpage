package pianocity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Order findOrderByiD(Long OrderId){
        Optional<Order> order = orderRepository.findById(OrderId);
        return order.orElse(null);
    }

    public List<Order> findOrderByCustomerID(Long customerId){
        return orderRepository.findByCustomerId(customerId);
    }

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }


}
