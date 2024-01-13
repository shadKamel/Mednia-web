<template>
    <div class="flex items-start gap-5 space-y-5">
        <div class="w-3/2 mt-10 flex flex-1 flex-col gap-5">
            <h1 class="text-3xl font-bold capitalize">purchase</h1>
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
                                                        purchaseStore.addToPurchase(
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
                        v-if="purchaseStore.addPurchaseForm.items.length"
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
                                    v-for="(item, index) in purchaseStore
                                        .addPurchaseForm.items"
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
                                                            purchaseStore
                                                                .addPurchaseForm
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
                                                        purchaseStore
                                                            .addPurchaseForm
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
                                                purchaseStore.purchaseErrors
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
                                                    purchaseStore.removeFromPurchase(
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
                                purchaseStore.totalPurcahseItems.toLocaleString()
                            }}
                        </span>
                    </div>
                    <div>
                        <Combobox
                            :modelValue="purchaseStore.addPurchaseForm.user"
                            @update:modelValue="
                                (user: User) => {
                                    purchaseStore.addPurchaseForm.user_id =
                                        user.id
                                    purchaseStore.addPurchaseForm.user = user
                                }
                            "
                        >
                            <div class="relative mt-1">
                                <div
                                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 sm:text-sm"
                                >
                                    <ComboboxInput
                                        placeholder="customer"
                                        class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 placeholder:capitalize focus:ring-0"
                                        @change="
                                            user_search = $event.target.value
                                        "
                                        :displayValue="
                                            (user: any) => user?.name
                                        "
                                    />
                                    <ComboboxButton
                                        class="absolute inset-y-0 right-0 flex items-center pr-2"
                                    >
                                        <ChevronUpDownIcon
                                            class="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </ComboboxButton>
                                </div>
                                <TransitionRoot
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    @after-leave="user_search = ''"
                                >
                                    <ComboboxOptions
                                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                                    >
                                        <div
                                            v-if="
                                                users?.data.length === 0 &&
                                                user_search !== ''
                                            "
                                            class="relative cursor-default select-none px-4 py-2 text-gray-700"
                                        >
                                            Nothing found.
                                        </div>

                                        <ComboboxOption
                                            as="template"
                                            v-for="user in users?.data"
                                            :key="user.id"
                                            :value="user"
                                            v-slot="{ selected, active }"
                                        >
                                            <li
                                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                                :class="{
                                                    'bg-amber-600 text-white':
                                                        active,
                                                    'text-gray-900': !active,
                                                }"
                                            >
                                                <span
                                                    class="block truncate"
                                                    :class="{
                                                        'font-medium': selected,
                                                        'font-normal':
                                                            !selected,
                                                    }"
                                                >
                                                    {{ user.name }}
                                                </span>
                                                <span
                                                    v-if="selected"
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                    :class="{
                                                        'text-white': active,
                                                        'text-amber-600':
                                                            !active,
                                                    }"
                                                >
                                                    <CheckIcon
                                                        class="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </li>
                                        </ComboboxOption>
                                    </ComboboxOptions>
                                </TransitionRoot>
                            </div>
                        </Combobox>
                    </div>
                    <div class="flex justify-end">
                        <Button type="button" @click="() => purchase()">
                            purchase
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMyPurchaseStore } from '@/stores/purchase'
import type { Items, User, Users } from '@/types'
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
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

const user_page = ref<number>(1)
const user_search = ref<string>('')

const {
    data: users,
    execute: fetchUser,
    refresh: refreshUser,
} = useApiFetch<Users>('/api/users', {
    watch: false,
    onRequest({ request, options }: { request: any; options: any }) {
        options.query = {
            page: items_page.value,
            search: user_search.value,
        }
    },
})
watch(
    [user_page, user_search],
    useDebounceFn(() => {
        console.log(user_page.value)
        refreshUser()
    }, 250)
)

watch(
    () => items_page.value,
    useDebounceFn(() => {
        itemsRefresh()
    }, 250)
)

const purchaseStore = useMyPurchaseStore()

const purchase = () => {
    purchaseStore.purchase().then(() => {
        if (purchaseStore.addPurchaseStatus === 'success') {
            purchaseStore.$reset()
            items_page.value = 1
            itemsRefresh()
        }
    })
}
// onBeforeMount(() => {
//     fetchUser()
// })
</script>
