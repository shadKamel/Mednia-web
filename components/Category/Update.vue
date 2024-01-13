<template>
    <div class="bg-white rounded-xl shadow p-5 space-y-5">
        <h2 class="text-2xl font-semibold capitalize">update Item</h2>
        <CategoryForm
            v-if="itemCategoriesStore.selectedCategory"
            v-model:form="itemCategoriesStore.selectedCategory"
            @submit.prevent="() => updateCategory()"
            :errors="itemCategoriesStore.updateCategoryError?.data"
            :categories="itemCategoriesStore.itemCategories?.data"
            update
            @cancel="itemCategoriesStore.selectedCategory = null"
        />
    </div>
</template>

<script setup lang="ts">
const itemCategoriesStore = useItemCategoriesStore()

const updateCategory = async () => {
    await itemCategoriesStore.updateCategory().then(() => {
        if (itemCategoriesStore.updateCategoryStatus === 'success') {
            itemCategoriesStore.fetchItemCateogires()
            itemCategoriesStore.selectedCategory = null
        }
    })
}
</script>
