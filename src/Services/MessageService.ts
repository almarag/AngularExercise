export default ['$http', ($http: any) => {
    return {
        getAllMessages: () => {
            return $http.get('/Mocks/messages.json');
        }
    };
}];
