<template>
    <form class="space-y-3">
        <Input
            v-model="props.form.name"
            label="name"
            id="name"
            :errors="props.errors?.errors?.name"
            required
        />
        <div class="flex justify-between">
            <Button type="submit">{{ props.update ? 'update' : 'add' }}</Button>
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

const emit = defineEmits(['cancel'])
const itemCategoriesStore = useItemCategoriesStore()
const props = withDefaults(
    defineProps<{
        form: Category
        errors?: {
            [key: string]: any
        }
        update?: boolean
    }>(),
    {
        update: false,
    }
)
</script>
