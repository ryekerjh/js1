var sticky = {
    fixedAfter: 85,
    init: function() {
      this.header = document.getElementsByTagName("header")[0];
    //   this.clone = this.header.cloneNode(true);
    //   this.clone.classList.add("clone");
    //   this.header.insertBefore(this.clone);
      this.scroll();
      this.events();
    },
  
    scroll: function() {
      if(window.scrollY > this.fixedAfter) {
        this.header.classList.add("header-fixed");
        this.header.classList.remove("header-relative");        
      }
      else {
        this.header.classList.add("header-relative");        
        this.header.classList.remove("header-fixed");
        console.log('high');
      }
    },
  
    events: function() {
      window.addEventListener("scroll", this.scroll.bind(this));
    }
  };
  
  document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));