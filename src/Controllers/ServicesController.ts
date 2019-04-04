export default ['$scope', '$q', 'MessageService', ($scope: any, $q: any, MessageService: any) => {
    $scope.infoList = [];
    $scope.infoList.push($q.when(MessageService.getAllMessages()));

    $scope.Messages = [];

    $q.all($scope.infoList)
    .then((response: any) => {
        response[0].data.forEach((item: any) => {
            $scope.Messages.push(item);
        });
    });
}];
