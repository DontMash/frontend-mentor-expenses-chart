<script lang="ts">
  import data from '../../assets/data.json';
  import Bar from './Bar.svelte';

  export let height: number;

  type Expense = {
    day: string;
    amount: number;
  };

  const expenses: Expense[] = data as Expense[];
  const expenseAmounts: number[] = expenses.map((expense) => expense.amount);
  const maxExpenseAmount: number = Math.max(...expenseAmounts);
  const maxExpenseIndex: number = expenses.findIndex(
    (expense) => expense.amount === maxExpenseAmount
  );
  const getExpenseBarHeight = (expense: Expense) => {
    const percent = expense.amount / maxExpenseAmount;
    const barHeightPixels = Math.round(height * percent);
    return barHeightPixels;
  };
</script>

<figure>
  <div class="grid grid-cols-7 content-end items-end gap-x-3 md:gap-x-4">
    {#each expenses as expense, i}
      <div>
        <Bar height={getExpenseBarHeight(expense)} value={expense.amount} highlight={maxExpenseIndex === i} />
        <p class="mt-2.5 md:mt-1 text-xs md:text-sm text-medium-brown text-center">{expense.day} </p>
      </div>
    {/each}
  </div>
  <figcaption class="sr-only">Chart of expenses per day</figcaption>
</figure>
