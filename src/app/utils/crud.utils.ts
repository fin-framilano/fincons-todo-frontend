export class CrudUtils {

    public static removeFromArray(source: any[], element: any) {
        return source.filter(elem => elem != element)
    }

    public static removeFromArrayById(source: any[], id: number) {
        return source.filter(elem => elem.id != id)
    }

    public static sortArrayByField(source: any[], field: string) {
        return source.sort((a, b) => a[field] <= b[field] ? -1 : 1)
    }
}