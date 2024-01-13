<template>
    <div class="bg-white rounded-xl shadow p-5 space-y-5">
        <h2 class="text-2xl font-semibold capitalize">add category</h2>
        <CategoryForm
            :form="itemCategoriesStore.addCategoryForm"
            @submit.prevent="() => addCategory()"
            :errors="itemCategoriesStore.addCategoryError?.data"
            :categories="itemCategoriesStore.itemCategories?.data"
        />
    </div>
</template>

<script setup lang="ts">
const itemCategoriesStore = useItemCategoriesStore()

const addCategory = () => {
    itemCategoriesStore.addCategory().then(() => {
        itemCategoriesStore.fetchItemCateogires()
        itemCategoriesStore.$reset()
    })
}
</script>
