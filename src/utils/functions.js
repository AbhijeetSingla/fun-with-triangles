function isTriangle(angles){
    const sum = Object.values(angles)?.reduce((x, y) => Number(x) + Number(y));
    const difference = Math.round((180 - sum + Number.EPSILON) * 100) / 100
    return difference;
}

function getHypotenuse(sidesObject){
    const hypotenuse = Math.sqrt(Object.values(sidesObject).reduce((x, y) => Math.pow(Number(x), 2) + Math.pow(Number(y), 2)))
    return Math.round((hypotenuse + Number.EPSILON) * 100) / 100
}

function getArea(sidesObject){
    const area = (Object.values(sidesObject).reduce((x, y) => Number(x) * Number(y))) * 0.5;
    return Math.round((area + Number.EPSILON) * 100) / 100
}

function convertToNewRange(sides){

    const oldValues = Object.values(sides);
    const oldMin = Math.min(...oldValues);
    const oldMax = Math.max(...oldValues);
    const newMin = 25;
    const newMax = 50;
    const oldRange = oldMax - oldMin;
    const newRange = newMax - newMin;
    
    if(oldRange === 0){
        return sides
    } else {
        const newValues = oldValues.map(number => (((number - oldMin) * newRange) / oldRange) + newMin )
        return {first: newValues[0], second: newValues[1], third: newValues[2]}
    }
}

export {isTriangle, getHypotenuse, getArea, convertToNewRange};