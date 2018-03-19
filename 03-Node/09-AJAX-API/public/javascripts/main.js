$(document).on('ready', () => {
    $.get('/users', {message: "Hello fc"}, (data) => {
        console.log(data)
    })
})