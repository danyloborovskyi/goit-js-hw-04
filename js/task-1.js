function slugify(title) {
    const lowerslug = title.toLowerCase();
    const slug = lowerslug.split(" ");
    return slug.join("-");
}

slugify("Arrays for beginners");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for beginners")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 
