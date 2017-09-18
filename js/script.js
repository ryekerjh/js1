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
      }
    },
  
    events: function() {
      window.addEventListener("scroll", this.scroll.bind(this));
    }
  };

  function findTruth() {
    var theTruth = {
        "Luke Skywalker" : "Best Jedi Evar",
        "Star Trek is the best" : false,
        "Answer to meaning of life" : 42,
        "Best things in Life" : ['Star Wars', 'cheese', 'learning']
    };
        alert("Check your console");
        console.log(theTruth);
  }

//   switch(document.getElementById('day')) {

//   }
  
  document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));