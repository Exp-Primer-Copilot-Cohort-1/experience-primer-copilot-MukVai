function skillsMember(){

    return {
        restrict : 'E',
        templateUrl : 'app/views/skills-member.html',
        controller : 'skillsmembercontroller',
        controllerAs : 'vm',
        bindToController : true,
        scope : {
            member : '='
        }
    };
}