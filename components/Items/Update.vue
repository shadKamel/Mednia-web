<template>
    <div class="bg-white rounded-xl shadow p-5 space-y-5">
        <h2 class="text-2xl font-semibold capitalize">update Item</h2>
        <ItemsForm
            v-if="itemsStore.selectedItem"
            v-model:form="itemsStore.selectedItem"
            @submit.prevent="() => updateItem()"
            :errors="itemsStore.addItemsError?.data"
            :categories="itemCategoriesStore.itemCategories?.data"
            update
            @cancel="itemsStore.selectedItem = null"
            :loading="itemsStore.updateItemStatus"
        />
    </div>
</template>

<script setup lang="ts">
import type { Item } from '../../types/Item'

const itemsStore = useItemsStore()
const itemCategoriesStore = useItemCategoriesStore()

const updateItem = async () => {
    await itemsStore.updateItem().then(() => {
        if (itemsStore.updateItemStatus === 'success') {
            itemsStore.fetchItems()
            itemsStore.selectedItem = null
        }
    })
}
</script>
