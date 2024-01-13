<template>
    <div class="space-y-5 my-10">
        <h1 class="text-3xl font-bold capitalize">item Categories</h1>
        <div class="flex gap-5 items-start">
            <div class="flex-1 bg-white p-5 shadow rounded-xl space-y-4">
                <div class="flex justify-between items-center">
                    <Input
                        class="text"
                        placeholder="search..."
                        v-model="itemCategoriesStore.search"
                        autofocus
                    />
                    {{ itemCategoriesStore.search }}
                </div>
                <div
                    class="space-y-5"
                    v-if="itemCategoriesStore.itemCategories?.data.length"
                >
                    <div
                        class="rounded-lg border border-gray-200 overflow-hidden"
                    >
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200/70 capitalize text-left">
                                    <th class="px-5 py-3">#</th>
                                    <th class="px-5 py-3">name</th>
                                    <th class="px-5 py-3">actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr
                                    v-for="(
                                        category, index
                                    ) in itemCategoriesStore.itemCategories
                                        ?.data"
                                    :key="index"
                                    class="[&>*]:py-3 [&>*]:px-5 [&>*]:even:bg-gray-50"
                                >
                                    <td>
                                        {{
                                            index +
                                            itemCategoriesStore.itemCategories
                                                ?.meta.from
                                        }}
                                    </td>
                                    <td>{{ category.name }}</td>
                                    <td class="flex justify-end">
                                        <Button
                                            type="button"
                                            @click="
                                                itemCategoriesStore.selectedCategory =
                                                    {
                                                        ...category,
                                                    }
                                            "
                                            >Edit</Button
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Pagination
                            :meta="itemCategoriesStore.itemCategories.meta"
                            @page-update="
                                (page: number) =>
                                    (itemCategoriesStore.page = page)
                            "
                            :links="itemCategoriesStore.itemCategories.links"
                        />
                    </div>
                </div>
                <div v-else>category not found</div>
            </div>
            <div class="min-w-[25rem] sticky top-10">
                <CategoryUpdate v-if="itemCategoriesStore.selectedCategory" />
                <CategoryAdd v-else />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
    layout: 'default',
})
const itemCategoriesStore = useItemCategoriesStore()

onMounted(() => {
    itemCategoriesStore.fetchItemCateogires()
})

onUnmounted(() => {
    itemCategoriesStore.$reset()
})
</script>
