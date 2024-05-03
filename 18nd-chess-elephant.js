function calcPossibleMovementElephant(n, verticalIndex, horizontalIndex) {
    // Calculate possible movements in each direction
    const upRight = Math.min(verticalIndex, n - horizontalIndex - 1);
    const upLeft = Math.min(verticalIndex, horizontalIndex);
    const downRight = Math.min(n - verticalIndex - 1, n - horizontalIndex - 1);
    const downLeft = Math.min(n - verticalIndex - 1, horizontalIndex);

    // Sum up the possible movements in all four directions
    const totalMovements = upRight + upLeft + downRight + downLeft;

    // Deduct 1 because the starting square is counted
    return totalMovements - 1;
}

console.log(calcPossibleMovementElephant(5,1,2))