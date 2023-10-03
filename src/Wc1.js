import { html, css, LitElement } from 'lit';

export class Wc1 extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--wc-1-text-color, #000);
    }
    .card {
      max-width: 400px;
      margin: 16px;
      padding: 12px;
      border: 2px solid #ccc;
      border-radius: 8px;
    
  }
  
  .card-img {
      width: 150px; 
      margin-right: 12px;
      border-radius: 8px;
  }
  
  .card-content {
      flex-grow: 1;
  }
  
  .card-title {
      font-size: 1.5rem;
      margin-bottom: 8px;
      text-align: center
  }
  
  .card-description {
      margin-bottom: 8px 0;
      text-align: center
  }
  
  .details-button {
      display: Details;
  }
  
  @media screen and (min-width: 500px) and (max-width: 800px) {
      .details-button {
          display: inline-block;
      }
  }
  
      .card-img {
          width: 100%;
          height: auto;
          margin-right: 0;
          border-radius: 0;
      }
  }
  .wrapper{
    
  }
  .highlighted{
    background-color: red;
  }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  duplicate() {
    const cloneButton = document.getElementById('btn');
    cloneButton.addEventListener('click', function(){
      const clonedCard = document.querySelector('.card').cloneNode(true);
      document.body.appendChild(clonedCard);
    });
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
