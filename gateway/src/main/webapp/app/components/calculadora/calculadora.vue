<template>
    
    <b-button 
    class="calboton"
          width="40"
          height="45"
    @click="OpenModalCalc()">calculadora
  </b-button>


    <b-modal
    ref="ModalCalc"
    id="ModalCalc"
  >

  <div class="calculator">
      <div class="screen">{{ display }}</div>
      <div class="buttons">
        <button
          v-for="button in buttons"
          :key="button.value"
          @click="handleButtonClick(button)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>

</b-modal>
  
  </template>
  
  <script lang="ts" src="./calculadoraComponents.ts"></script>
  
  <style>
  .calculator {
    width: 240px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .screen {
    width: 100%;
    height: 40px;
    background-color: #f8f8f8;
    text-align: right;
    padding: 5px;
    font-size: 18px;
    border-radius: 3px;
    margin-bottom: 10px;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }
  
  button {
    width: 100%;
    height: 40px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  button:hover {
    background-color: #e0e0e0;
  }
  
  button:active {
    background-color: #d0d0d0;
  }
  </style>
  