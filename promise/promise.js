function fetchDataFromMultipleAPIs(apiUrls) {
    let promises = apiUrls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    });

    return Promise.all(promises);
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1'
];

fetchDataFromMultipleAPIs(apiUrls)
    .then(results => {
        console.log("Результаты из нескольких API:");
        console.log(results);
    })
    .catch(error => {
        console.error("Ошибка при извлечении данных:", error);
    });
