let UseFetchPOST = async (requestParams) => {
    let responseRequest = ''
    let dataResponse = ''
    let loading = ''
    let error = ''
    console.log("I AM IN");
        try {
            const url = requestParams.url;
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(requestParams.body)
            };
            
            fetch(url, requestOptions)
                .then(
                    response => response.json())
                .then(data => console.log("TOKEN " + data.token, "date exp " + data.expirationDate ))
                .then(loading = false)
        } catch(e){
            loading = false;
            error = e;
        }
        return {responseRequest,dataResponse, loading, error}
    }
    


export default UseFetchPOST;