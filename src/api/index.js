const Api = {
    __url__: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas',

    getOompaLoompaList(page = 1) {
        return fetch(`${this.__url__}?page=${page}`)
            .then(res => res.json())
    },

    getOompaLoompaDetails(id = 1) {
        if(typeof id !== 'number') throw Error('Given id is not valid')

        return fetch(`${this.__url__}/${id}`)
            .then(res => res.json())
    }
}

export default Api