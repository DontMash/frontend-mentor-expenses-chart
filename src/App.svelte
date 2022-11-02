<script lang="ts">
  import Chart from './lib/chart/Chart.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main class="h-screen">
  <section class="flex justify-center px-4 py-12 md:py-40">
    <h1 class="sr-only">Overview</h1>
    <article class="w-full max-w-sm md:max-w-md space-y-4">
      <h2 class="sr-only">Account</h2>
      <header
        class="flex justify-between items-center px-4 py-5 !mt-0 rounded-lg bg-soft-red text-very-pale-orange"
      >
        <h3 class="sr-only">Balance</h3>
        <div class="flex flex-col justify-between">
          <small class="mb-2.5 text-sm leading-none">My balance</small>
          <span class="text-2xl font-bold leading-none">$921.48</span>
        </div>
        <img src="/images/logo.svg" alt="Expenses Logo" width="72" height="48" />
      </header>
      <section
        class="px-4 py-5 md:px-8 md:py-7 rounded-lg bg-very-pale-orange divide-y-2 text-dark-brown divide-cream"
      >
        <div class="mb-4">
          <h3 class="mb-12 text-2xl font-bold">Spending - Last 7 days</h3>
          <Chart height={192} />
        </div>
        <div class="flex justify-between pt-4">
          <div class="flex flex-col">
            <small class="text-medium-brown mb-2.5 leading-none">Total this month</small>
            <span class="text-3xl md:text-4xl font-bold leading-none">$478.33</span>
          </div>
          <div class="flex flex-col self-end text-right">
            <span class="text-sm font-bold mb-1.5 leading-none">+2.4%</span>
            <small class="text-medium-brown leading-none">from last month</small>
          </div>
        </div>
      </section>
    </article>
  </section>
</main>
<Footer />
