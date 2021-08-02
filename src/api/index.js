const Api = {
    __url__: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',

    getOompaLoompaList(page = 1) {
        return fetch(`${this.__url__}?page=${page || 1}`)
            .then(res => res.json())
    },

    getOompaLoompaDetails(id = 1) {
        if (typeof Number(id) === 'NaN') throw Error('Given id is not valid')

        return fetch(`${this.__url__}/${id}`)
            .then(res => res.json())
    },

    filterDataByNameOrProfession(query, items = []) {
        const filtered = items.filter(item =>
            item.profession?.toUpperCase().includes(query.toUpperCase()) ||
            item.last_name?.toUpperCase().includes(query.toUpperCase()) ||
            item.first_name?.toUpperCase().includes(query.toUpperCase()))

        return filtered.length ? filtered : items
    }
}

export default Api