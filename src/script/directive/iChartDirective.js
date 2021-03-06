//The page organized as followd:
//- switchButton


iChartApp.directive("switchButton",function () {
   return {
       restrict: "A",
       scope:{
           switchButtonAction :"&"
       },
       template:"                <a class=\"switch-menu-item\" ng-click=\"bottom_position=0;switchButtonAction({flag:0});\" ng-init=\"bottom_position=0\"></a>\n" +
       "                <a  class=\"switch-menu-item\" ng-click=\"bottom_position=1;switchButtonAction({flag:1});\" ></a>\n" +
       "                <a  class=\"switch-menu-item\" ng-click=\"bottom_position=2;switchButtonAction({flag:2});\" ></a>\n" +
       "                <a  class=\"switch-menu-item\" ng-click=\"bottom_position=3;switchButtonAction({flag:3});\" ></a>\n" +
       "                <div class=\"switch-menu-bottom\"></div>",
       link: function (scope,element,attr) {
           var item_len=attr.switchButton.split(",").length;
           for(var i=0;i<item_len;i++){
               element[0].children[i].innerHTML=attr.switchButton.split(",")[i];
           }
           for(var i=item_len;i<4;i++){
               element[0].children[i].style.cssText="display:none";
           }
           scope.$watch("bottom_position",function () {
               var buttonNum=attr.switchButton.split(",").length;
               var buttonHalf=(attr.switchButtonSize*element[0].offsetWidth)/(buttonNum*200);//the half width of the button
               var buttonLeft=((2*scope.bottom_position+1)*element[0].offsetWidth)/(buttonNum*2);//the offset from left point
               element[0].children[element[0].children.length-1].style.cssText="left: "+(buttonLeft-buttonHalf)+"px;width: "+attr.switchButtonSize/buttonNum+"%";
           });
       }
   }
});