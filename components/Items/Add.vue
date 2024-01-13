<template>
    <div class="bg-white rounded-xl shadow p-5 space-y-5">
        <h2 class="text-2xl font-semibold capitalize">add Item</h2>
        <ItemsForm
            :form="itemsStore.addItemForm"
            @submit.prevent="() => addItem()"
            :errors="itemsStore.addItemsError?.data"
            :categories="itemCategoriesStore.itemCategories?.data"
            :loading="itemsStore.addItemStatus"
        />
    </div>
</template>

<script setup lang="ts">
const itemsStore = useItemsStore()
const itemCategoriesStore = useItemCategoriesStore()

const addItem = () => {
    itemsStore.addItem().then(() => {
        if (itemsStore.addItemStatus === 'success') {
            itemsStore.fetchItems()
            itemsStore.addItemFormReset()
        }
    })
}
</script>
