package pianocity.Cart;

import org.springframework.beans.factory.annotation.Autowired;
import pianocity.Customer.Customer;
import pianocity.Product.Product;
import pianocity.CartProduct.CartProductRepository;
import pianocity.CartProduct.CartProduct;
import pianocity.Customer.CustomerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import pianocity.Product.productRepository;

import java.util.*;

@Service
public class CartService {
    private final CartRepository cartRepository;

    private final CartProductRepository cartProductRepository;

    private final CustomerService customerService;
    private final pianocity.Product.productRepository productRepository;

    @Autowired
    public CartService(CartRepository cartRepository, CartProductRepository cartProductRepository, CustomerService customerService, productRepository productRepository){
        this.cartRepository = cartRepository;
        this.cartProductRepository = cartProductRepository;
        this.customerService = customerService;
        this.productRepository = productRepository;
    }

    public Cart addItemToCart(Long productId, int quantity,Long customerId) {
        Customer customer = customerService.getCustomerById(customerId);
        Cart cart = customer.getCart();

        if (cart == null) {
            cart = new Cart();
        }

        List<CartProduct> cartProductList = cart.getCartProducts();
        CartProduct cartProduct = find(cartProductList, productId);
        Product product = productRepository.findProductById(productId);
        double unitPrice = product.getCost();

        int itemQuantity;

        if (cartProductList == null) {
            cartProductList = new ArrayList<>();
            cartProduct = new CartProduct();
            cartProduct.setProduct(product);
            cartProduct.setCart(cart);
            cartProduct.setQuantity(quantity);
            cartProduct.setUnitPrice(unitPrice);
            cartProduct.setCart(cart);
            cartProductList.add(cartProduct);
            cartProductRepository.save(cartProduct);
        } else {
            if (cartProduct == null) {
                cartProduct = new CartProduct();
                cartProduct.setCart(cart);
                cartProduct.setQuantity(quantity);
                cartProduct.setUnitPrice(unitPrice);
                cartProduct.setCart(cart);
                cartProduct.setProduct(product);
                cartProductList.add(cartProduct);
                cartProductRepository.save(cartProduct);
            } else {
                itemQuantity = cartProduct.getQuantity() + quantity;
                cartProduct.setQuantity(itemQuantity);
                cartProductRepository.save(cartProduct);
            }
        }
        cart.setCartProducts(cartProductList);

        double totalPrice = totalPrice(cart.getCartProducts());
        int totalItem = totalItem(cart.getCartProducts());

        cart.setTotalPrice(totalPrice);
        cart.setTotalItems(totalItem);
        cart.setCustomer(customer);
        customer.setCart(cart);
        return cartRepository.save(cart);
    }
    public Cart findCartByCustomerId(Long customerId){
        return customerService.getCustomerById(customerId).getCart();
    }

    @Transactional
    public Cart updateCart(Long productId, int quantity, Long userId) {
        Customer customer = customerService.getCustomerById(userId);
        Product product = productRepository.findProductById(productId);

        Cart Cart = customer.getCart();

        List<CartProduct> CartProductList = Cart.getCartProducts();
        CartProduct item = find(CartProductList, product.getId());

        item.setQuantity(quantity);
        cartProductRepository.save(item);
        Cart.setCartProducts(CartProductList);

        int totalItem = totalItem(CartProductList);
        double totalPrice = totalPrice(CartProductList);

        Cart.setTotalPrice(totalPrice);
        Cart.setTotalItems(totalItem);

        return cartRepository.save(Cart);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Cart removeItemFromCart(Long productId, Long customerId) {
        Customer customer = customerService.getCustomerById(customerId);
        Product product = productRepository.findProductById(productId);

        Cart Cart = customer.getCart();
        List<CartProduct> CartProductList = Cart.getCartProducts();
        CartProduct item = find(CartProductList, product.getId());

        CartProductList.remove(item);
        cartProductRepository.delete(item);

        double totalPrice = totalPrice(CartProductList);
        int totalItem = totalItem(CartProductList);
        Cart.setCartProducts(CartProductList);
        Cart.setTotalPrice(totalPrice);
        Cart.setTotalItems(totalItem);

        return cartRepository.save(Cart);
    }

    public Cart addItemToCartSession(Cart cart, Product product, int quantity) {
        CartProduct cartProduct = findIn(cart, product.getId());

        List<CartProduct> cartProductList = cart.getCartProducts();
        double unitPrice = product.getCost();
        int itemQuantity;
        if (cartProductList == null) {
                cartProductList = new ArrayList<>();
                cartProduct = new CartProduct();
                cartProduct.setProduct(product);
                cartProduct.setCart(cart);
                cartProduct.setQuantity(quantity);
                cartProduct.setUnitPrice(unitPrice);
                cartProductList.add(cartProduct);
                System.out.println("add");
                itemQuantity = cartProduct.getQuantity() + quantity;
                cartProduct.setQuantity(itemQuantity);
        } else {
            if (cartProduct == null) {
                cartProduct = new CartProduct();
                cartProduct.setProduct(product);
                cartProduct.setCart(cart);
                cartProduct.setQuantity(quantity);
                cartProduct.setUnitPrice(unitPrice);
                cartProductList.add(cartProduct);
                System.out.println("add");
            } else {
                itemQuantity = cartProduct.getQuantity() + quantity;
                cartProduct.setQuantity(itemQuantity);
            }
        }

        cart.setCartProducts(cartProductList);

        double totalPrice = totalPrice(cartProductList);
        int totalItem = totalItem(cartProductList);

        cart.setTotalPrice(totalPrice);
        cart.setTotalItems(totalItem);
        System.out.println(cart.getTotalItems());
        System.out.println(cart.getTotalPrice());

        return cart;
    }

    public Cart updateCartSession(Cart cart, Product product, int quantity) {
        List<CartProduct> CartProductList = cart.getCartProducts();
        CartProduct item = findIn(cart, product.getId());
        int itemQuantity = item.getQuantity() + quantity;
        int totalItem = totalItem(CartProductList);
        double totalPrice = totalPrice(CartProductList);
        item.setQuantity(itemQuantity);
        cart.setCartProducts(CartProductList);
        cart.setTotalPrice(totalPrice);
        cart.setTotalItems(totalItem);
        System.out.println(cart.getTotalItems());
        return cart;
    }

    public Cart removeItemFromCartSession(Cart cart, Product product, int quantity) {
        List<CartProduct> cartProductList = cart.getCartProducts();
        CartProduct item = findIn(cart, product.getId());
        cartProductList.remove(item);

        double totalPrice = totalPrice(cartProductList);
        int totalItem = totalItem(cartProductList);

        cart.setCartProducts(cartProductList);
        cart.setTotalPrice(totalPrice);
        cart.setTotalItems(totalItem);
        System.out.println(cart.getTotalItems());

        return cart;
    }

    @Transactional
    public void deleteCartById(Long customerId) {
        Customer customer = customerService.getCustomerById(customerId);

        Cart cart = customer.getCart();

        cart.getCartProducts().clear();
        cart.setTotalPrice(0);
        cart.setTotalItems(0);
        cartRepository.save(cart);
    }

//    public Cart getCart(String customerName) {
//        Customer customer = customerService.findByCustomerName(customerName);
//        Cart cart = customer.getCart();
//        return cart;
//    }
    private CartProduct find(List<CartProduct> cartProducts, Long productId) {
        if (cartProducts == null) {
            return null;
        }
        for (CartProduct item : cartProducts) {
            if(item.getProduct() == null)
                continue;
            if (item.getProduct().getId().equals(productId)) {
                return item;
            }
        }
        return null;
    }

    private CartProduct findIn(Cart Cart, long productId) {
        if (Cart == null) {
            return null;
        }
        CartProduct CartProduct = null;
        for (CartProduct item : Cart.getCartProducts()) {
            if (item.getProduct().getId() == productId) {
                CartProduct = item;
            }
        }
        return CartProduct;
    }

    private int totalItem(List<CartProduct> CartProductList) {
        int totalItem = 0;
        for (CartProduct item : CartProductList) {
            totalItem += item.getQuantity();
        }
        return totalItem;
    }

    private double totalPrice(List<CartProduct> CartProductList) {
        double totalPrice = 0.0;
        for (CartProduct item : CartProductList) {
            totalPrice += item.getUnitPrice() * item.getQuantity();
        }
        return totalPrice;
    }
}