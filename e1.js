const data = [
    {
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://restcountries.eu/data/hkg.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    }
]


for (let key in data[0]){

    let keyFirst = key[0]
    
    let changedKey = keyFirst.toUpperCase() + key.substring(1)

    
    
    
    if (Array.isArray(data[0][key]) ) {
        for (let item of data[0][key]){
            console.log(` ${changedKey}_ttttttttt: ${[item]}`)
        }

    } else if (typeof(data[0][key]) === 'object'){
        // console.log(' testing eeeeeee')
        for (let item in data[0][key]){
          console.log(` ${changedKey}_${item}: ${data[0][key][item]}`)
        }
    } else {
        console.log(` ${changedKey} : ${data[0][key]}`) 

    }
    




    //     }
    // }
    
}

// for (const i in data[0]){
//     if (typeof(data[0][i]) === "object" ){
//         // for (const i2 of data[0][i]){

//         // }
//         console.log('object->'+ data[0][i])

//     } else if(typeof(data[0][i]) === "array" ){
//         console.log('array ->' + data[0][i])

//     }else{
//         console.log(` ${i} : ${data[0][i]}`)
//     }
    
// }


// console.log(typeof(data[0]["altSpellings"]))
// console.log(data[0]["altSpellings"])
