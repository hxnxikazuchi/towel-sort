// You should implement your task here.

module.exports = function towelSort(matrix) {

    let sum = [];
    if (matrix === undefined) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let k = 0; k < matrix[i].length; k++) {
                sum.push(matrix[i][k]);
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                sum.push(matrix[i][j]);
            }
        }
    }
    return sum;
}
