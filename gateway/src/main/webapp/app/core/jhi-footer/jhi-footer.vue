<template>
  <div id="footer" class="navbar fixed-bottom navbar-light bg-light">
    <p v-text="t$('footer')"></p>
    

      <div>
        <daic-calculadora v-if="username">
      
            </daic-calculadora>
      </div>
    

  </div>
 
</template>

<script lang="ts" src="./jhi-footer.component.ts"></script>
