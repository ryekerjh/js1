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
  
  var bodyTag = document.querySelector('body');
  if(bodyTag.className == 'show-reminder') {
    alert('Did you add, commit, and push your code from last class? Did you create a new branch for today?');
  }
  document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));