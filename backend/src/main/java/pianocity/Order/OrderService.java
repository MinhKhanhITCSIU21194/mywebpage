package pianocity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pianocity.Cart.Cart;
import pianocity.Cart.CartService;
import pianocity.CartProduct.CartProduct;
import pianocity.OrderDetail.OrderDetail;
import pianocity.OrderDetail.OrderDetailRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderDetailRepository orderDetailRepository;
    private final CartService cartService;
    @Autowired
    public OrderService(OrderRepository orderRepository,OrderDetailRepository orderDetailRepository,
                        CartService cartService){
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.cartService = cartService;
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

    public Order createOrder(Long customerId) {
        Cart cart = cartService.findCartByCustomerId(customerId);
        Order order = new Order();
        order.setOrderDate(new Date());

        order.setCustomer(cart.getCustomer());
        order.setOrderCost(cart.getTotalPrice());
        order.setQuantity(cart.getTotalItems());
        List<OrderDetail> orderDetailList = new ArrayList<>();
        for (CartProduct item: cart.getCartProducts()) {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrder(order);
            orderDetail.setProduct(item.getProduct());
            orderDetailRepository.save(orderDetail);
            orderDetailList.add(orderDetail);
        }
        order.setOrderDetailList(orderDetailList);
        cartService.deleteCartById(cart.getId());
        return orderRepository.save(order);
    }

    public void cancelOrder(Long id) {
        orderRepository.deleteById(id);
    }

}
