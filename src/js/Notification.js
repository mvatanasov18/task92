export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render({type,price}) {
    const template = `
<div class="notification type-pepperoni">
  <button class="delete"></button>
  🍕 <span class="type">pepperoni</span> (<span class="price">0,00</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    document.querySelector(".notifications").appendChild(this.container);
    this.container.querySelector(".delete").addEventListener("click",()=>{console.log("Delete button clicked"); this.empty();});
  }
  empty(){
    this.container.innerHTML = "";
  }
}
