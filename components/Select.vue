<template>
    <div class="relative" ref="searchDropdown">
        <label
            v-if="props.label"
            class="capitalize font-medium text-lg"
            :for="`${$attrs.id as string}`"
            v-text="props.label"
        />
        <div class="flex rounded-lg border border-gray-300">
            <input
                v-if="props.selectedObject && !label"
                readonly
                class="h-full w-full flex-1 rounded-lg p-2 placeholder:text-gray-400"
                :value="props.selectedObject[props.property]"
                :placeholder="$attrs.placeholder as string"
                @click="(e) => toggle()"
            />
            <input
                readonly
                class="h-full w-full flex-1 rounded-lg p-2 placeholder:text-gray-400"
                :value="label"
                v-else="label"
                :placeholder="$attrs.placeholder as string"
                @click="(e) => toggle()"
            />
            <button
                type="button"
                class="flex items-center rounded-r-lg bg-gray-100 p-1 text-gray-500 transition-all hover:bg-gray-200"
                @click="(e) => toggle()"
            >
                <Icon icon="icon-park-outline:down" class="h-8 w-8" />
                <!-- <Iconify icon="ic:round-search" class="h-8 w-8" /> -->
            </button>
        </div>

        <ul
            class="absolute -bottom-2 z-20 max-h-[20rem] w-full translate-y-full overflow-auto rounded-lg border bg-white shadow"
            v-show="dropdown"
        >
            <div class="sticky top-0 bg-white p-0.5">
                <div class="relative m-2">
                    <input
                        name="search"
                        type="text"
                        class="w-full flex-1 rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="search..."
                        v-model="search"
                        autocomplete="off"
                        @keydown.esc="(e) => (dropdown = false)"
                        :autofocus="true"
                    />
                    <Icon
                        icon="md-search"
                        class="absolute inset-y-1/4 right-2 bg-white"
                    />
                </div>
            </div>
            <div
                class="flex min-h-[5rem] w-full items-center justify-center overflow-auto bg-white"
                v-if="isLoading"
            >
                <Spinner />
            </div>
            <li
                v-else
                v-for="(information, index) in props.informations"
                :key="index"
            >
                <button
                    type="button"
                    class="flex w-full flex-col space-y-1 px-3 py-2 text-start hover:bg-gray-100"
                    :class="{
                        'leading-4': metaData,
                    }"
                    @click="select(information)"
                >
                    <span>{{ information[props.property] }}</span>
                    <span v-if="metaData" class="text-gray-500">{{
                        information[props.metaData]
                    }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside, useDebounceFn } from '@vueuse/core'
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: undefined,
    },
    informations: {
        required: true,
    },
    property: {
        type: String,
        required: false,
        default: 'name',
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    selectProperty: {
        type: String,
        default: 'id',
    },
    metaData: {
        type: String,
        default: null,
        required: false,
    },
    label: {
        type: String,
        default: null,
    },

    selectedObject: {
        type: Object,
    },
})
const emit = defineEmits(['select', 'search', 'update:modelValue'])
const searchDropdown = ref(null)

const dropdown = ref(false)
onClickOutside(searchDropdown, () => {
    dropdown.value = false
    search.value = ''
})

const search = ref<string>()

watch(
    () => search.value,
    useDebounceFn((value) => {
        emit('search', value)
    }, 500)
)

const label = ref('')

const select = (info: any) => {
    label.value = info[props.property]
    emit('update:modelValue', info[props.selectProperty])
    search.value = ''
    dropdown.value = false
}

const toggle = () => {
    dropdown.value = !dropdown.value
    search.value = ''
}

const placeholder = ref(null)
// const value = computed(() => {
//     const record = props.informations.find(
//         (info) => info[props.selectProperty] === props.modelValue
//     )
//     return record ? record[props.property] : null
// })
</script>
