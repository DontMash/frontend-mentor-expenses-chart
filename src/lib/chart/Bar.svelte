<script lang="ts">
  import { onMount } from 'svelte';

  export let height: number;
  export let value: number;
  export let highlight: boolean = false;

  let barElement: HTMLElement;
  onMount(() => {
    barElement.style.setProperty('--barheight', `${height}px`)
  });
</script>

<div class={`group relative h-[var(--barheight)] rounded ${highlight ? 'bg-cyan hover:bg-light-cyan' : 'bg-soft-red hover:bg-light-soft-red'} transition-colors duration-300`} bind:this={barElement}>
  <span class="absolute -top-10 left-1/2 px-1 py-2 rounded bg-dark-brown text-sm text-very-pale-orange leading-none opacity-0 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">{`$${value}`}</span>
</div>
