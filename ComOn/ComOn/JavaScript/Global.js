/*-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//
// Global.js
//
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    ���� : ��ü JavaScript
    ���� :
        - �˸� â ���
        - HTML�� �Բ� ���
*/

/***************/
/* ȯ�� �޽��� */
/***************/
function PrintWelcome() {

    var currentDate = new Date();
    var welcomeStr = '                            :: Welcome to ComOn ::'

    alert(currentDate);
    alert(welcomeStr);
}


/***********/
/* �� �Ұ� */
/***********/
function PrintTeamMember() {

    var teamMember = '\n                                    :: Team 5 ::\n\n';

    teamMember += '                      Geon-Ho Yun  &  Hyo-Bi Lim\n';
    teamMember += '                    Young-Eun Kim  &  Eun-Hyuk Woo\n';

    alert(teamMember);
}