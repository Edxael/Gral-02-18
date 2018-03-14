// ------- FUNCTIONS FOR DRY CODE ---------

module.exports.myMethods = {
    respond: ( res, next, status, data, http_code ) => {
        let response = {
            'status': status,
            'data': data
        }
        res.setHeader('content-type', 'aplication/json')
        res.writeHead(http_code)
        res.end(JSON.stringify(response))
        return next()
    },
    success: (res, next, data) => {
        this.respond(res, next, 'success', data, 200)
    },
    failure: (res, next, data, http_code) => {
        this.respond(res, next, 'failure', data, http_code)
    }
}

// module.exports = myMethods

