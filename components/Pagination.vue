<template>
    <div class="flex justify-center space-x-10">
        <!-- <button
            class="rounded-md bg-sky-500 px-10 py-3 text-xl font-semibold text-white shadow-md disabled:bg-gray-700"
            :disabled="isFirstPage"
            @click="prev"
        >
            @click="$emit('pageChange', current_page - 1)"
            Prev
        </button> -->
        <div class="flex flex-wrap gap-2">
            <button
                class="rounded border px-4 py-2 text-sm font-semibold disabled:bg-gray-700"
                :class="{
                    'border-amber-500 bg-amber-500 text-white': link.active,
                    'border-gray-400 bg-white text-gray-800': !link.active,
                }"
                v-for="(link, index) in props.meta?.links"
                v-html="link.label"
                @click="
                    () => {
                        if (index === 0) {
                            prev()
                        } else if (index === props.meta?.links.length - 1) {
                            next()
                        } else if (link.label === '...') {
                            return
                        } else {
                            currentPage = parseInt(link.label as string)
                        }
                    }
                "
            ></button>
        </div>
        <!-- <button
            class="rounded-md bg-sky-500 px-10 py-3 text-xl font-semibold text-white shadow-md disabled:bg-gray-700"
            :disabled="isLastPage"
            @click="next"
        >
            Next
        </button> -->
        <!-- @click="$emit('pageChange', current_page + 1)" -->
    </div>
</template>

<script lang="ts" setup>
import type { PaginationLink, PaginationMeta } from '@/types'
import { useDebounceFn, useOffsetPagination } from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'
import { parse } from 'vue/compiler-sfc'

const props = withDefaults(
    defineProps<{
        links: PaginationLink
        meta: PaginationMeta
        name?: string
    }>(),
    {
        name: 'page',
    }
)

const emit = defineEmits(['pageUpdate'])

const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
} = useOffsetPagination({
    total: props.meta?.total,
    page: props.meta?.current_page,
    pageSize: props.meta?.per_page,
    onPageChange: useDebounceFn(
        ({
            currentPage,
            currentPageSize,
        }: {
            currentPage: number
            currentPageSize: number
        }) => {
            emit('pageUpdate', currentPage)
        },
        250
    ),
})
</script>

<style></style>
