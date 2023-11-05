export interface ICategoryResponse {
    id?: number,
    code: string,
    name: string,
    description: string
}

export interface ICategoryForm {
    name?: string,
    description?: string
}