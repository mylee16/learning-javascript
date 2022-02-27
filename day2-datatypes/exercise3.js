// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let quote1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(quote1.match(/love/gi).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let statement_1 = 'You cannot end a sentence with because because because is a conjunction all'

if (statement_1.match(/all/gi) == null) { return_value = 0 }
else { return_value = statement_1.match(/all/gi).length }

console.log(return_value)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence_cleaned = sentence.replace(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g, "")

console.log(sentence_cleaned)

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence_1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
sal_array = sentence_1.match(/\d+/g).map(Number)

sum = 0
for (var i in sal_array){
    sum += sal_array[i]
}
console.log(sum)