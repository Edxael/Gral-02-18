# DATA AND INFO 

I might be able to mimic the XML api using the following API-MOCKIN service:
https://www.mockable.io/a/#/


### Location of pages with current data:
https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest



### Axios
https://www.npmjs.com/package/axios


### XML-CALLS WITH POSTMAN
https://developer.intacct.com/web-services/your-first-api-calls/


### V Source:
AJAX JavaScript XHR and Fetch



============================================================

### Another option:
https://www.youtube.com/watch?v=EAwSvbfFpIg
https://www.youtube.com/watch?v=lk4-UYD3KC4


////////////////////////////////////////////////////////////////////////////////////////////////


CODE I USED 1ST ON MOCKABLE.IO

const MyURL = "http://demo9622188.mockable.io/test"



const CallAPI = () => {
    console.log("Calling the API... 07")

    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)
        }
    }

    xhttp.open("GET", MyURL, true)
    xhttp.send() 
}



////////////////////////////////////////////////////////////////////////////////////////////////