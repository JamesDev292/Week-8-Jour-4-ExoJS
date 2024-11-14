let nb= prompt("Donne un chiffre ?");


for (let count = 1; count <= nb; count++){

    let space = " ".repeat(nb-count);
    let hash = "#".repeat(count);

    console.log(`${space}${hash}`);

}

