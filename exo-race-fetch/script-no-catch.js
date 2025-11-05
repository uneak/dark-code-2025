

const attendre = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Error(`Timeout after ${time}ms`));
        }, time);
    });
};

const callAPI = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 3000);
    });
};

const success = () => {
    console.log("success");
};

const error = (e) => {
    console.log("error");
};



const fetchAvecTimeout = async (url, timeout) => {
    const result = await Promise.race([
        attendre(timeout),
        callAPI(url)
    ]);

    if (result instanceof Error) {
        return "TIMEOUT";
    } else {
        return "GOOD " + url;
    }
}
;
   


fetchAvecTimeout("https://api.example.com/data", 4000).then((result) => {
    console.log(result);
});




// const fetchAvecTimeout = (url, timeout) => {
//     if (timeout > 3000) {
//         return "Timeout";   
//     } else {
//         return "GOOD url chargé " + url;        
//     }
// };