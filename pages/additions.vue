<template>
    <div class="flex items-start gap-5 space-y-5">
        <div class="w-3/2 mt-10 flex flex-1 flex-col gap-5">
            <h1 class="text-3xl font-bold capitalize">Additions</h1>
            <div class="space-y-4 rounded-xl bg-white p-5 shadow">
                <!-- <div class="flex items-center justify-between">
                    <Input
                        class="text"
                        placeholder="search..."
                        v-model="ItemsStore.search"
                        autofocus
                    />
                </div> -->
                <div class="space-y-5">
                    <div
                        v-if="items?.data.length"
                        class="overflow-hidden rounded-lg border border-gray-200"
                    >
                        <div class="overflow-scroll">
                            <table class="w-full table-auto">
                                <thead>
                                    <tr
                                        class="bg-gray-200/70 text-left capitalize"
                                    >
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
                                        v-for="(item, index) in items.data"
                                        :key="index"
                                        class="[&>*]:px-5 [&>*]:py-3 [&>*]:even:bg-gray-50"
                                    >
                                        <td>
                                            {{ index + items?.meta.from }}
                                        </td>
                                        <td>{{ item.name }}</td>
                                        <td :title="item.barcode">
                                            {{ item.barcode }}
                                        </td>
                                        <td>
                                            {{ item.price.toLocaleString() }}
                                            IQD
                                        </td>
                                        <td>{{ item.category?.name }}y</td>
                                        <td>{{ item.quantity }}</td>
                                        <td>
                                            <Button
                                                type="button"
                                                @click="
                                                    () =>
                                                        additionStore.addToAddition(
                                                            item
                                                        )
                                                "
                                                >Add</Button
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-else>item not found</div>
                    <div v-if="items?.links">
                        <Pagination
                            :meta="items?.meta"
                            @page-update="(page) => (items_page = page)"
                            :links="items?.links"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky top-5 flex min-h-screen w-2/5 flex-col pb-10">
            <div
                class="flex flex-1 flex-col justify-between space-y-5 rounded-xl bg-white p-5 shadow"
            >
                <div class="space-y-5">
                    <h1 class="text-xl font-bold capitalize">selected items</h1>
                    <div
                        v-if="additionStore.addAdditionForm.items.length"
                        class="overflow-hidden rounded-lg border border-gray-200"
                    >
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200/70 text-left capitalize">
                                    <th class="px-5 py-3">#</th>
                                    <th class="px-5 py-3">name</th>
                                    <th class="px-5 py-3">price</th>
                                    <th class="px-5 py-3">quantity</th>
                                    <th class="px-5 py-3"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr
                                    v-for="(item, index) in additionStore
                                        .addAdditionForm.items"
                                    :key="index"
                                    class="[&>*]:px-5 [&>*]:py-3 [&>*]:even:bg-gray-50"
                                >
                                    <td>
                                        {{ index }}
                                    </td>
                                    <td class="grid">
                                        <span>{{ item.name }}</span>
                                        <span
                                            :title="item.barcode"
                                            class="truncate text-gray-400"
                                            >{{ item.barcode }}</span
                                        >
                                    </td>
                                    <td>
                                        {{ item.price.toLocaleString() }} IQD
                                    </td>
                                    <td>
                                        <div
                                            class="flex items-center justify-center space-x-1"
                                        >
                                            <button
                                                class="rounded-full border border-black bg-white p-1"
                                                type="button"
                                                @click="
                                                    () => {
                                                        if (item.quantity > 1) {
                                                            additionStore
                                                                .addAdditionForm
                                                                .items[index]
                                                                .quantity--
                                                        }
                                                    }
                                                "
                                            >
                                                <Icon
                                                    icon="ic:round-minus"
                                                    class="h-5 w-5"
                                                />
                                            </button>
                                            <input
                                                min="0"
                                                class="max-w-[4rem] appearance-none rounded-md border border-gray-300 px-2 py-2 text-center"
                                                v-model.number="item.quantity"
                                            />
                                            <button
                                                class="rounded-full border border-black p-1"
                                                type="button"
                                                @click="
                                                    () =>
                                                        additionStore
                                                            .addAdditionForm
                                                            .items[index]
                                                            .quantity++
                                                "
                                            >
                                                <Icon
                                                    icon="ic:round-plus"
                                                    class="h-5 w-5"
                                                />
                                            </button>
                                        </div>
                                        <Error
                                            :error="
                                                additionStore.additionErrors
                                                    ?.data.errors[
                                                    `items.${index}`
                                                ]
                                            "
                                        />
                                    </td>
                                    <td>
                                        <button
                                            class="rounded-full bg-red-500 p-2 text-white"
                                            type="button"
                                            @click="
                                                () =>
                                                    additionStore.removeFromAddition(
                                                        item.id as number
                                                    )
                                            "
                                        >
                                            <Icon
                                                icon="tabler:x"
                                                class="h-5 w-5"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>item not selected</div>
                </div>
                <div class="space-y-5">
                    <div class="rounded-md bg-sky-500 px-5 py-2 text-white">
                        Total:
                        <span>
                            {{
                                additionStore.totalAdditionItems.toLocaleString()
                            }}
                        </span>
                    </div>
                    <div class="flex justify-end">
                        <Button type="button" @click="() => addition()">
                            purchase
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Items } from '@/types'
import { useDebounceFn } from '@vueuse/core'

const items_page = ref<number>(1)
const { data: items, refresh: itemsRefresh } = useApiFetch<Items>(
    '/api/items',
    {
        watch: false,
        server: true,
        onRequest({ request, options }: { request: any; options: any }) {
            options.query = {
                page: items_page.value,
            }
        },
    }
)

watch(
    () => items_page.value,
    useDebounceFn(() => {
        itemsRefresh()
    }, 250)
)

const additionStore = useAdditionsStore()

const addition = () => {
    additionStore.addition().then(() => {
        if (additionStore.addAdditionStatus === 'success') {
            additionStore.$reset()
            items_page.value = 1
            itemsRefresh()
        }
    })
}
</script>
