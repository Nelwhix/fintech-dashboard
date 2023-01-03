<script setup lang="ts">
import logo from '../assets/logo.vue'
import { 
    EnvelopeIcon, 
    HomeIcon, 
    PresentationChartLineIcon, 
    CreditCardIcon, 
    BanknotesIcon, 
    ArrowTrendingUpIcon,
    UsersIcon,
    ComputerDesktopIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog8ToothIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <aside class="px-4 pt-5 font-primary hidden sm:block border-r border-gray-300">
        <div>
            <logo class="w-36" />
        </div>
        <hr class="w-36">
        <nav class="mt-5">
            <li class="flex p-3">
                <HomeIcon class="w-4 h-4 mt-1 mr-1" />
                Home
            </li>
            <li class="flex p-3">
                <EnvelopeIcon class="w-4 h-4 mt-1 mr-1" />
                Inbox
            </li>
            <li class="flex p-3">
                <PresentationChartLineIcon class="w-4 h-4 mt-1 mr-1" />
                Analytics
            </li>
            <li class="flex p-3">
                <CreditCardIcon class="w-4 h-4 mt-1 mr-1" />
                Cards
            </li>
            <li class="flex p-3">
                <BanknotesIcon class="w-4 h-4 mt-1 mr-1" />
                Transactions
            </li>
            <li class="flex p-3">
                <ArrowTrendingUpIcon class="w-4 h-4 mt-1 mr-1" />
                Investment
            </li>
            <li class="flex p-3">
                <UsersIcon class="w-4 h-4 mt-1 mr-1" />
                Accounts
            </li>
        </nav>
        <hr class="w-36">
        <nav class="mt-5">
            <li class="flex p-3">
                <ComputerDesktopIcon class="w-4 h-4 mt-1 mr-1" />
                Devices
            </li>
            <li class="flex p-3">
                <ChatBubbleLeftEllipsisIcon class="w-4 h-4 mt-1 mr-1" />
                Help
            </li>
            <li class="flex p-3">
                <Cog8ToothIcon class="w-4 h-4 mt-1 mr-1" />
                Settings
            </li>
        </nav>
    </aside>
</template>
