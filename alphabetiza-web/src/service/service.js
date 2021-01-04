const server = process.env.SERVER || 'localhost';
const port = process.env.PORT || 3001;

const url = `http://${server}:${port}/kids/`;

const service = {

    fetchInfo: async (id) => {
        const response = await fetch(url + id);
        const respJson = await response.json();
        respJson.age = calculateAge(respJson.birthdate);
        return respJson;
    },

}

const calculateAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default service;