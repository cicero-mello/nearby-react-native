export interface Category {
    id: string
    name: string
}

export type CategoriesProps = {
    categories: Category[]
    selectedCategoryId?: string
    onSelect: (id: string) => void | Promise<void>
}
