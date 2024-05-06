function transform(upvoteString) {

    return upvoteString.split(' ').map(count => {

        if (count.includes('a')) {

            return parseFloat(count) * 10;

        } 
        else {

            return parseInt(count);

        }
    });
}

let upvoteString = "1 2a 3 4a 5a";

let Counts = transform(upvoteString);

document.write(Counts);