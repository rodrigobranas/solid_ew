import Beer from "./Beer";
import MessageDataFile from "./MessageDataFile";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve criar um pedido e calcular o total", function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const total = order.getTotal();
    expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", function () {
    const order = new Order(new MessageDataFile())
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const taxes = order.getTaxes();
    expect(taxes).toBe(21);
});

test("Deve criar um pedido e imprimir uma mensagem em português", async function () {
    const order = new Order(new MessageDataFile())
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const message = await order.printMessage("pt");
    expect(message).toBe("O total foi de R$111, os impostos foram R$21. Obrigado pelo seu pedido!");
});

test("Deve criar um pedido e imprimir uma mensagem em inglês", async function () {
    const order = new Order(new MessageDataFile())
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));
    const message = await order.printMessage("en");
    expect(message).toBe("The total was R$111, the taxes was R$21. Thanks for your order!");
});
