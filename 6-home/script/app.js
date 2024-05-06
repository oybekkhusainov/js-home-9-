function capitalize(names) {

    return names.map(name => {

        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    });
}

let names = ["abror", "aziz", "umid", "murod"];

let Names = capitalize(names);

document.write(Names);