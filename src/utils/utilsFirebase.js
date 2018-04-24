let utilFirebase = {
    snapshopToArray: function(querySnapshot) {
        let arrayResponse = [];
        querySnapshot.forEach(doc => {
            let item = doc.data();
            arrayResponse.push(item)
        });
        return arrayResponse;
    }
};

export default utilFirebase;