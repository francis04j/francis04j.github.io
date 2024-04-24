/*
fl = 60
mvs = [10, 50, 20, 30, 30, 40, 50]

two pointers; i & j

loop till you find x & y where x+y = fl

first thought: two for-loops 

[10 + 20]
[10+ 30]
[10 + 30]
[10 + 40]

60 - 10 = 50

MATCHES
<50, POS 1> - 
<10, POS 2>
<40, POS 3>
<30, POS 4>
<30, POS 5>


algo
 - check if current i is in Dict
 - if yes, collect array [POS x]
 - if no
 - fl - i = result
 - put result in Dict: <result, i>
 -loop till end

NPA -
*/

function good_movies_exist(flight_length, movie_lengths)
{
    let found = {};
    for(let i = 0; i < movie_lengths.length - 1; i++){
        let diff = flight_length - movie_lengths[i];
        console.log(diff)
        console.log(found[diff])
        if(found[movie_lengths[i]] === undefined){
            found[diff] = i; 
        }else{
            console.log(found)
            return true;
        }


    }
    
    return false;
}

/*let resuls = good_movies_exist(100, [10, 20, 40, 30, 30, 40, 50]);
console.log(resuls);
module.exports = good_movies_exist;
*/

/*
* words[ 'xenoepist',
    'asymptote',  # <-- rotates here!
    'babka',]
*
*

*/

function sumAsciiCodes(word)
{
    /*let sum = 0;
    for(let i = 0; i < word.length; i++)
    {
        const charac = word[i]
        const ascii = charac.charCodeAt(word[0]);
        sum += ascii;
    }
    return sum;*/
    const charac = word[0]
    const ascii = charac.charCodeAt(0);
    return ascii;
    
}

function find_rotate(words){
 for(let i=1; i < words.length; i++)
 {
    let word = words[i-1];
    let code = sumAsciiCodes(word);
    console.log('x-->', word, code)

    let word1 = words[i];
    let code1 = sumAsciiCodes(word1);
    console.log('-->', word1, code1)
    if(code1 < code){
        return i;
    }
 }
}



console.log(find_rotate([
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', 
    'babka',
    'banoffee']));