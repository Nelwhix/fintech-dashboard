<script setup lang="ts">
import Chip from '../assets/Chip.vue'
import PayPassIcon from '../assets/PayPassIcon.vue'
import EllipseIcon from '../assets/Ellipse.vue'
import MasterCardIcon from '../assets/MastercardIcon.vue'
</script>

<template>
  <div class="w-72 h-48 mt-5 mx-auto card">
    <div class="flip">
      <div class="front">
        <EllipseIcon class="absolute w-40 h-40 top-3 left-20" />
        <div class="flex justify-between mt-5 mx-4">
            <span class="font-semibold text-white"> 
                monobank
            </span>
        <PayPassIcon class="w-6 h-6 text-gray-500" />
        </div>
        
       <Chip class="w-10 h-10 ml-4 mt-5" />
        <div class="flex justify-between text-lg text-white mx-4 mt-1"> 
          <span>5453</span>
          <span>2000</span>
          <span>0000</span>
          <span>0000</span>
        </div>
        <div class="flex justify-between mt-3 mx-4">
            <div>
                <p class="text-[10px] text-white gap-2 flex">
                    <span class="uppercase">valid till</span>
                    <span>06/24</span>
                </p>
                <p class="text-white">Nelson Isioma</p>
            </div>
            <MasterCardIcon />
        </div>
      </div>
      <div class="back">
        <div class="bg-black w-full h-10 mt-6"></div>
        <div class="text-white w-full mt-3">
          <p class="w-64 text-right text-xs">CVV</p>
          <p class="bg-white text-right text-black rounded-md mx-3 mt-3 py-2 pr-2">123</p>
        </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
    @keyframes flip {
        0%, 100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(180deg);
        }
    }

    .flip {
        width: inherit;
        height: inherit;
        transition: 0.7s;
        transform-style: preserve-3d;
        animation: flip 2.5s ease;
    }

    .front, .back {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 15px;
        box-shadow: 0px 10px 10px 1px #dadada;
        backface-visibility: hidden;
        background-image: linear-gradient(to right, #1b2847, #161f30);
        overflow: hidden;
    }

    .front {
        transform: translateZ(0);
    }

    .card {
        perspective: 1000px;
    }

    .card:hover .flip {
        transform: rotateY(180deg);
    }

    .back {
        transform: rotateY(180deg) translateZ(0);
    }

@-moz-keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}
@-o-keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}
</style>