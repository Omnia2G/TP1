<template>
  <header>
    <nav class="navbar">
       <div class="brand-title">Team project</div>
       <a href="" class="toggle-button" @click.prevent="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/progress">Progress</router-link>
          </li>
          <li>
            <router-link to="/records">Records</router-link>
          </li>
          <li>
            <router-link to="/team">Team</router-link>
          </li>
        </ul>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggle(){
      document.getElementsByClassName('navbar-links')[0].classList.toggle('active');
    },
  },
};
</script>

<style scoped>
.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
   
}

.brand-title {
    font-size: 2rem;
    margin: .5rem;
}

.navbar-links {
    height: 100%;
}

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}

.navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1.5rem;
    font-size: 1.5rem;
}

.navbar-links li:hover {
    background-color: #555;
    border-radius: 15px;
    
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 4px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 1000px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
       
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
 
  .dropdown-content{
    width: 160px;
    margin-left: -50px;
  }
  .dropdown-content .link{
    font-size: .8rem;
  }
}


</style>
