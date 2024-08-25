/**
 * Wait for an element before resolving a promise
 * @param {String} querySelector - Selector of element to wait for
 * @param {Integer} timeout - Milliseconds to wait before timing out, or 0 for no timeout              
 */
function waitForElement(querySelector, timeout){
  return new Promise((resolve, reject)=>{
    var timer = false;
    if(document.querySelector(querySelector)) return resolve();
    const observer = new MutationObserver(()=>{
      if(document.querySelector(querySelector)){
        observer.disconnect();
        if(timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true, 
      subtree: true
    });
    if(timeout) timer = setTimeout(()=>{
      observer.disconnect();
      reject();
    }, timeout);
  });
}


class Collapsible extends HTMLElement {
  
  constructor() {
    super();
    this.initialLoad = true;

    // this.attachShadow({ mode: 'open' });
    // this.shadowRoot.innerHTML = `Test`;

    // this.shadowRoot.querySelector('h1').addEventListener('click', () => {
    //   this.toggle();
    // });

    waitForElement("md-collapse", 10000).then(() => {
      if(!this.initialLoad) {
        return;
      }

      const dom = this.innerHTML;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = dom;
      const toggle = this.shadowRoot.querySelector('h2');
      
      toggle.addEventListener('click', () => {
        this.toggle();
      });

      toggle.style.cursor = 'pointer';

    }).catch(() => {
      console.log("Failed", Date.now());
    });
  }

  toggle() {
    const childNodes = this.shadowRoot.childNodes;

    for(let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];

      console.log(node.nodeName, "Load");

      if(node.nodeName === "H2" || !node.innerHTML) {
        continue;
      } 

      console.log("Run", node);

      node.style.display = node.style.display === 'none' ? 'block' : 'none';
    }
  }
}

customElements.define('md-collapse', Collapsible);