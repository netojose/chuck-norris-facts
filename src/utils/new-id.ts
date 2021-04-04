let lastId = 0
export default function newId(prefix = 'id_'): string {
    lastId += 1
    return `${prefix}${lastId}`
}
