function logScope() {
    let localVar = 2;

    if (localVar) {
        let localVar = "I'm different";
        console.log("nested localVar: ", localVar);
    }

    console.log("localVar localVar: ", localVar);
}

logScope();