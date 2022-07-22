import "./hello-world-button.css";
class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World"; // button DOM element
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "hello world paragraph";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);

    // append this button to the body of the DOM element
  }
}

export default HelloWorldButton;
