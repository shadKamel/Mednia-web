<template>
    <form class="space-y-3">
        <Input
            v-model="props.form.name"
            label="name"
            id="name"
            :errors="props.errors?.errors?.name"
            required
        />
        <Input
            v-model="props.form.barcode"
            label="barcode"
            id="barcode"
            placeholder="XXXXXXXXX"
            :errors="props.errors?.errors?.barcode"
            required
        />
        <Input
            v-model.number="props.form.price"
            label="price"
            id="price"
            type="number"
            :errors="props.errors?.errors?.price"
            required
        />
        <Select
            label="category"
            id="category"
            :informations="props.categories"
            v-model="props.form.category_id"
            @search="(search: string) => (itemCategoriesStore.search = search)"
            :is-loading="itemCategoriesStore.fetchItemCateogiresLoading"
            :selectedObject="form.category"
        />
        <Error :error="props.errors?.errors?.category_id" />
        <div class="flex justify-between items-center">
            <Button type="submit" class="space-x-2 flex items-center">
                <span>{{ props.update ? 'update' : 'add' }}</span>
                <Spinner v-if="props.loading === 'pending'" />
            </Button>
            <button
                type="button"
                class="px-5 py-2 text-white focus:ring-2 ring-rose-500 bg-rose-500 rounded-md capitalize"
                @click="$emit('cancel')"
            >
                cancel
            </button>
        </div>
        <Error :error="props?.errors?.message" />
    </form>
</template>

<script lang="ts" setup>
import type { Category, Item } from '@/types'
import type { AsyncDataRequestStatus } from 'nuxt/dist/app/composables/asyncData'

const emit = defineEmits(['cancel'])
const itemCategoriesStore = useItemCategoriesStore()
const props = withDefaults(
    defineProps<{
        form: Item
        errors?: {
            [key: string]: any
        }
        categories?: Category[]
        update?: boolean
        loading: AsyncDataRequestStatus
    }>(),
    {
        update: false,
    }
)
</script>
