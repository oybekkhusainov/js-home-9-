function Index(array, string) {

    return array.indexOf(string);

}

let arr = ["apple", "peach", "pear", "mango", "banana"];

let string = "mango";

let index = Index(arr, string);

document.write("Indexs  ", string + ":", index); 