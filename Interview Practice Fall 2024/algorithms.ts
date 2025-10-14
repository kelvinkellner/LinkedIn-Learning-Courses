
function euclid(a: number, b: number): number {
    if (b > a) return -1;
    const r = a % b;
    if (r == 0) return b;
    return euclid(b, r);
}

console.log("GCD(20, 8) =", euclid(20, 8));

