function skillMember() {
    var member = {
        name: "John",
        age: 20,
        say: function () {
            console.log("Hello, " + this.name);
        }
    };
    return member;
}