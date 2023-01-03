<script setup lang="ts">
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'
import spacetime from 'spacetime'

const startofweek = spacetime.now().startOf('week')
const weekDays = startofweek.every('day', startofweek.endOf('week'))

const CurrentDate = ref(startofweek.monthName() +  " " + startofweek.year())

</script>

<template>
    <div class="font-primary mt-4">
        <p class="flex font-semibold justify-center capitalize">
            <CalendarDaysIcon class="w-5 h-5 mt-[2px] mr-2"/>
            {{ CurrentDate }}
        </p>
        <div class="flex justify-around mt-2">
            <div v-for="day in weekDays">
                <p class="capitalize">{{ day.dayName().substring(0,3) }}</p>
                <p class="text-center mt-1" :class="{'bg-secondary text-white rounded-full': day.isSame(spacetime.now(), 'day')}">{{ day.date() }}</p>
            </div>
        </div>
    </div>
</template>