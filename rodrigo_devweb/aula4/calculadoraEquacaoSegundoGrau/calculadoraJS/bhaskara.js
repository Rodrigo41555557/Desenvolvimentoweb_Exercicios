

function bhaskara(b, a, c){
        const bAoQdd = Math.pow(b,2);
        bAoQdd = bAoQdd - 4 * a * c;
    let x1, x2;
    x1 = ((0 - b)+Math.sqrt(bAoQdd))/(2*a);
    x2 = ((0 - b)-Math.sqrt(bAoQdd))/(2*a);

    return {x1, x2};
}

export { bhaskara }