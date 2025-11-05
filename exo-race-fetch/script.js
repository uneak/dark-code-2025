

const attendre = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout after ${time}ms`));
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
    try {
        await Promise.race([
            attendre(timeout),
            callAPI(url)
        ]);
        return "GOOD url chargé " + url;
    } catch (e) {
        return "TIMEOUT";
    }
};
   


fetchAvecTimeout("https://api.example.com/data", 2000).then((result) => {
    console.log(result);
});




