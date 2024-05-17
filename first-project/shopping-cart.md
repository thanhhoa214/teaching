# Extensive Shopping Cart Project

Practice Java Scanner, OOP, Selection Sort and Insertion Sort skills

1. Read a file and fill into the Store multiple Products, able to add a single product
1. Display product list, and menu for user to choose which product they wanna add to cart
1. Update cart
1. Print detail
1. Print receipt

## Classes:

- **Product**: This class should have fields for the product name, description, price. It should have methods to get and set these fields.

- **Store**: This class should have a list of Products. It should have methods to add a product to the list, remove a product from the list, and display the list of products.

- **ShoppingCart**: This class should have a list of Products (representing the products the user wants to buy) and a method to add a product to the cart. It should also have methods to remove a product from the cart, change the quantity of a product in the cart, and calculate the total cost of the products in the cart.

- **ShoppingCartItem**: This class should have a selected product ID and the quantity of it in the cart

- **Application**: This class should have the main method. It should create a Store and fill it with Products (either by reading a file or by adding individual products). It should then display the list of products and a menu for the user to choose a product to buy. It should ask the user for the quantity of the chosen product they want to buy and add the product to the ShoppingCart. It should repeat this process until the user chooses to checkout, at which point it should print a receipt.

## Product Data

File text: `products.txt`

```
"IP","Apple iPhone 13","Latest model of iPhone with A15 Bionic chip",999.99
"SS","Samsung Galaxy S21","Flagship Samsung smartphone with Exynos 2100",799.99
"DE","Dell XPS 15","High-performance laptop with Intel i7",1599.99
"SO","Sony WH-1000XM4","Industry leading noise cancelling headphones",349.99
"NI","Nintendo Switch","Popular gaming console with detachable controllers",299.99
```

## Steps

1. Create a `Product` class to hold value of each record (including id, name, description, price attributes) and correlative `get___`, `set___` for each attribute.
2. Create a `Store` class to manage `Product`
   - Attribute `products` is `ArrayList<Product>`
   - Method `importProducts` to read data from `products.txt` and append all into `products`
   - Method `addProduct` to ask the user to enter ID, Name, Description, Price and add into `products` list
   - Method `getProductById` to get a product by its ID
   - Method `sortByPrice` to get the an ArrayList which sorted `products` by price using **Selection Sort**
   - Method `sortByName` to get the an ArrayList which sorted `products` by name using **Insertion Sort**
   - Method `printStore` to print all products in store
   ```
    | ID | Name               | Price
    ----------------------------------
    | IP | Apple iPhone 13    | 999.99
    | SS | Samsung Galaxy S21 | 799.99
    ... the rest
    ----------------------------------
   ```
3. Create a `ShoppingCartItem` class
   - Attribute `productId` for determine which product
   - Attribute `quantity`
   - Method `getProduct` to retrieve product info (name, description, price)
   - Method `addToCart` to add a product into cart (default with quantity = 1)
   - Method `removeFromCart` to remove an item with `productId` from cart
   - Method `updateQuantity` to change quantity with `productId`
4. Create a `ShoppingCart` class
   - Attribute `customerName` for determine which product
   - Attribute `date` for tracking the date of cart
   - Attribute `items` is `ArrayList<ShoppingCartItem>`
   - Method `getTotalPrice`
   - Method `setCustomerName`
   - Method `printItemDescriptions` to print description items

   ```
   ID            | Product Name    | Product Description
   __productId__ | __productName__ | __productDescription__
   __productId__ | __productName__ | __productDescription__
   __productId__ | __productName__ | __productDescription__
   ```

   - Method `printCart` to print out

   ```
   @@@ YOUR CART @@@
   Customer Name: John
   Date: 17/05/2024
   Total: __total__$

   ID            | Product Name    | Quantity     | Price     | Subtotal
   __productId__ | __productName__ | __quantity__ | __price__ | __subtotal = price * quantity__
   __productId__ | __productName__ | __quantity__ | __price__ | __subtotal__
   ---------------------------------------------------------------------------------------------
   ```

5. Create a `Application` class (which include `static main` method) to run the application.

   - Create a method `printMenu` to print the menu to console

   ```
   ---------- ACTIONS ---------------
   a - Add item to cart
   b - Remove item from cart
   c - Change item quantity
   d - Output items' descriptions
   e - Output shopping cart
   q - Quit
   Choose an option:
   ```

   - Within `main` method do the following actions:
     - Initialize a Store instance/object named `store`
     - Call `importProducts`
     - Call `addProduct`
     - Ask customer name and set for cart
     - Print menu until the user choose `q` Quit option. Implement actions for each options as below
       - `a` will display the store products, then ask user to enter product ID
       - `b` will ask user to enter product ID, then remove it from cart
       - `c` will ask user to enter product ID and new quantity, then update it
       - `d` will print cart item descriptions
       - `e` will print cart
       - `q` will print `Thanks for browsing our products! Bye!` and quit the program.
