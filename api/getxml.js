const parseString = require('react-native-xml2js').parseString;

export const data = async () => {
    try {
        let temp = null
        var xml = 'https://vnexpress.net/rss/tin-moi-nhat.rss?fbclid=IwAR2OeC8am3ZjHPqmgu08I4iYJ59a0z71xjAeFW-Kpm8cJ_udSpwXnSYu520'
        parseString(xml, function (err, result) {
            console.dir(result);
            console.log(result)
        });
        
    } catch (error) {
        console.log(error)
    }
} 