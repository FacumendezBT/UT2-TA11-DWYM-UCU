
window.onload = () =>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        let nums = [1, 2, 2, 3, 4, 4, 4, 5];
        duplicates(nums);
    });
}


/**
 * Calcula la cantidad de elementos repetidos dentro del parámetro nums y lo imprime en consola
 * @param {Array} nums - Un arreglo de números enteros.
 */
function duplicates(nums){
    let duplicatedNumbers = [];
    nums.forEach((num, index) => {
        if(nums.indexOf(num, index + 1) !== -1 && !duplicatedNumbers.includes(num)){
            duplicatedNumbers.push(num);
        }
    });
    console.log(duplicatedNumbers.length);
}