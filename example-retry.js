const apiMethod = async function (uri, callback) {
    try {
        // Call your api here (or whatever thing you want to do) and assign to result.
        const result = await got.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=80xA0tBragGQqDxOt2EMePRw2ZkIpQ1W', {}).json()
        callback(null, result);
    } catch (err) {
        callback(err);
    }
};

async.retry(
    { times: 5, interval: 200 },
    function (callback) { return apiMethod(uri, callback) },
    function (err, result) {
        if (err) {
            throw err; // Error still thrown after retrying N times, so rethrow.
        }
        console.log(result);
    });