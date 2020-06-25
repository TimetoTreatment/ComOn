/*-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//
// Global.js
//
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    개요 : 전체 JavaScript
    설명 :
        - 알림 창 출력
        - HTML과 함께 사용
*/

/***************/
/* 환영 메시지 */
/***************/
function PrintWelcome() {

    var currentDate = new Date();
    var welcomeStr = '                            :: Welcome to ComOn ::'

    alert(currentDate);
    alert(welcomeStr);
}


/***********/
/* 팀 소개 */
/***********/
function PrintTeamMember() {

    var teamMember = '\n                                    :: Team 5 ::\n\n';

    teamMember += '                      Geon-Ho Yun  &  Hyo-Bi Lim\n';
    teamMember += '                    Young-Eun Kim  &  Eun-Hyuk Woo\n';

    alert(teamMember);
}