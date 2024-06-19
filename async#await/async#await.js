async function fetchDataFromMultipleServers(urls) {
    try {
        let promises = urls.map(async (url) => {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return await response.json();
        });
        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        throw new Error(`Ошибка при загрузке данных: ${error.message}`);
    }
}
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/comments/1'
];

fetchDataFromMultipleServers(urls)
    .then(results => {
        console.log("Результаты загрузки данных:");
        console.log(results);
    })
    .catch(error => {
        console.error("Ошибка при загрузке данных:", error);
    });
