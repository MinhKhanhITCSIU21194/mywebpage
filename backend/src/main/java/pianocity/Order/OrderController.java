package pianocity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping(path = "/{customerId}")
    public List<Order> getOrdersBy(@PathVariable Long customerId) {
        return orderService.findOrderByCustomerID(customerId);
    }

    @GetMapping(path = "/single/{OrderId}")
    public Order getSingleOrder(@PathVariable Long OrderId) {
        return orderService.findOrderByiD(OrderId);
    }

    @PostMapping(path = "/add")
    public Order addOrder(@RequestBody Order order) {
        return orderService.addOrder(order);
    }
}
