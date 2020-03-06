//Context

const paola = {
    name: {
        first: "Paola",
        last: "Paez"
    },

    location: {
        streetNumber: 1129,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA"  
    },

    getAddress(){
        return `${this.name.first} ${this.name.last}
        ${this.location.streetNumber} ${this.location.state}`;
    }
};

console.log(paola.getAddress());