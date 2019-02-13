(function(){
    app.controller('MainController', mainController);

    mainController.$inject = [
        '$scope'
    ];

    function mainController(
        $scope
    ){
        
        $scope.manageHotel = {
            rooms : 1,
            adults : 1,
            children : 0,
            addRoom: addRoom,
            removeRoom:removeRoom,
            addAdult: addAdult,
            removeAdult: removeAdult,
            addChild: addChild,
            removeChild:removeChild,
            removeChildsFirst: removeChildsFirst
        }

        function addRoom(noOfRooms){
            if(noOfRooms < 5){
                $scope.manageHotel.rooms++
                $scope.manageHotel.adults++
            }
            else
            return
        }

        function addAdult(noOfAdults){
            if((noOfAdults + $scope.manageHotel.children) < ($scope.manageHotel.rooms *4)){
                $scope.manageHotel.adults++
            }else if($scope.manageHotel.rooms < 5){
                $scope.manageHotel.adults++
                $scope.manageHotel.rooms++
            }
            else
            return;
        }

        function addChild(noOfChilds){
            if((noOfChilds + $scope.manageHotel.adults) < ($scope.manageHotel.rooms *4)){
                $scope.manageHotel.children++
            }else if($scope.manageHotel.rooms < 5){
                $scope.manageHotel.adults++
                $scope.manageHotel.rooms++
                $scope.manageHotel.children++
            }
            else
            return;
        }

        function removeChildsFirst(){
            if(($scope.manageHotel.rooms * 4) < ($scope.manageHotel.adults + $scope.manageHotel.children)){
                while($scope.manageHotel.children > 0 && (($scope.manageHotel.rooms * 4) < ($scope.manageHotel.adults + $scope.manageHotel.children))){
                    $scope.manageHotel.children--
                }

                if($scope.manageHotel.children == 0 && (($scope.manageHotel.rooms * 4) < ($scope.manageHotel.adults + $scope.manageHotel.children))){
                    $scope.manageHotel.adults = $scope.manageHotel.rooms * 4;
                }
            }
        }

        function removeRoom(noOfRooms){
            if(noOfRooms > 1){
                $scope.manageHotel.rooms--
                $scope.manageHotel.removeChildsFirst();
            }
            else
            return;   
        }


        function removeAdult(noOfAdults){
            if(noOfAdults > $scope.manageHotel.rooms){
                $scope.manageHotel.adults--
            }
            else if(noOfAdults > 1){
                $scope.manageHotel.adults--
                $scope.manageHotel.rooms--
                $scope.manageHotel.removeChildsFirst();
            }
        }

        function removeChild(noOfChilds){ 
            if((noOfChilds > 0 && (noOfChilds + $scope.manageHotel.adults) > $scope.manageHotel.rooms)){
                $scope.manageHotel.children--
            }
            else 
            return;        
        }
    }
}())