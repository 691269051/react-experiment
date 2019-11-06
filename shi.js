const list = [
    { id: 3, name: 'cc', parentId: 1, sort: 2 },
    { id: 4, name: 'dd', parentId: 1, sort: 1 },
    { id: 5, name: 'ee', parentId: 2, sort: 4 },
    { id: 6, name: 'ff', parentId: 3, sort: 3 },
    { id: 7, name: 'gg', parentId: 2, sort: 0 },
    { id: 8, name: 'hh', parentId: 4, sort: 1 },
    { id: 9, name: 'ii', parentId: 1, sort: 3 },
    { id: 1, name: 'aa', parentId: 0, sort: 1 },
    { id: 2, name: 'bb', parentId: 0, sort: 0 },
]

function convertListToTree(list, topId = 0) {
    let result
    let map = {}

    list.forEach(child => {
        const { id, parentId } = child
        const children = (map[parentId] = map[parentId] || [])

        if (!result && parentId === topId) {
            result = children
        }

        children.push(child)

        child.children = map[id] || (map[id] = [])
    })
    map = null

    return result
}

convertListToTree(list)
