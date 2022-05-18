const getData = () => {
    return fetch('https://test-54038-default-rtdb.firebaseio.com/goods.json')
    .then(response => response.json())
    
}
export default getData