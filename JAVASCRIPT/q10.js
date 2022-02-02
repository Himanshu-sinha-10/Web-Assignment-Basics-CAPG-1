function vowelCount(str) {
  let vowels = /[aeiou]/gi;
  let result = str.match(vowels);
  let count = result.length;

  console.log(count);
};

vowelCount("saif");