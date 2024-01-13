div
<template>
    <div class="my-10 space-y-5">
        <h1 class="text-3xl font-bold capitalize">items</h1>
        <div class="flex items-start gap-5">
            <div class="flex-1 space-y-4 rounded-xl bg-white p-5 shadow">
                <div class="flex items-center justify-between">
                    <Input
                        class="text"
                        placeholder="search..."
                        v-model="ItemsStore.search"
                        autofocus
                    />

                    <NuxtLink
                        :to="{ name: 'items-categories' }"
                        class="rounded-md bg-gradient-to-br from-amber-500 to-orange-600 px-5 py-2 font-medium capitalize text-white antialiased"
                        >Categories</NuxtLink
                    >
                </div>
                <div class="space-y-5">
                    <div
                        v-if="ItemsStore?.items?.data.length"
                        class="overflow-hidden rounded-lg border border-gray-200"
                    >
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200/70 text-left capitalize">
                                    <th class="px-5 py-3">#</th>
                                    <th class="px-5 py-3">name</th>
                                    <th class="px-5 py-3">barcode</th>
                                    <th class="px-5 py-3">price</th>
                                    <th class="px-5 py-3">category</th>
                                    <th class="px-5 py-3">quantity</th>
                                    <th class="px-5 py-3">actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr
                                    v-for="(item, index) in ItemsStore.items
                                        .data"
                                    :key="index"
                                    class="[&>*]:px-5 [&>*]:py-3 [&>*]:even:bg-gray-50"
                                >
                                    <td>
                                        {{
                                            index + ItemsStore.items?.meta.from
                                        }}
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.barcode }}</td>
                                    <td>
                                        {{ item.price.toLocaleString() }} IQD
                                    </td>
                                    <td>{{ item.category?.name }}y</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>
                                        <Button
                                            type="button"
                                            @click="
                                                ItemsStore.selectedItem = {
                                                    ...item,
                                                }
                                            "
                                            >Edit</Button
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>item not found</div>
                    <div>
                        <Pagination
                            :meta="ItemsStore.items?.meta"
                            @page-update="(page) => (ItemsStore.page = page)"
                            :links="ItemsStore.items?.links"
                        />
                    </div>
                </div>
            </div>
            <div class="sticky top-10 min-w-[25rem]">
                <ItemsUpdate v-if="ItemsStore.selectedItem" />
                <ItemsAdd v-else />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
    layout: 'default',
})

const ItemsStore = useItemsStore()
const ItemCategoriesStore = useItemCategoriesStore()

onMounted(() => {
    ItemsStore.fetchItems()
    ItemCategoriesStore.fetchItemCateogires()
})

onUnmounted(() => {
    ItemsStore.$reset()
    ItemCategoriesStore.$reset()
})
</script>
