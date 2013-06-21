document.write('<dl style="display: inline;"><dt><a href="http://1705437.5sing.com/zj.aspx?zjid=14840" target="_blank"><img src="http://img2011.5sing.com/m/2011/03/28/58b0d861-ca8c-4cba-8fad-02d66f4a0fd2_180_180.jpg" alt="音乐无国度" width="80" height="80" /></a></dt><dd><a href="http://1705437.5sing.com/zj.aspx?zjid=14840" target="_blank">音乐无国度</a><br />音乐人：<a href="http://1705437.5sing.com" target="_blank">眞亦軒</a><br />日期：2008-05-30</dd></dl><dl style="display: none;"><dt><a href="http://ruangchan.vip.5sing.com/zj.aspx?zjid=25999#" target="_blank"><img src="http://img2009.5sing.com/m/photo/2009/11/06/0033ea75-4c80-4181-9d7c-1405eb2f1d10_1.jpg" alt="ruang-制作" width="80" height="80" /></a></dt><dd><a href="http://ruangchan.vip.5sing.com/zj.aspx?zjid=25999#" target="_blank">ruang-制作</a><br />音乐人：<a href="http://976827.5sing.com" target="_blank">RuangChan</a><br />日期：2009-05-17</dd></dl><dl style="display: none;"><dt><a href="http://1420581.5sing.com/zj.aspx" target="_blank"><img src="http://img2009.5sing.com/m/photo/2009/12/05/f9bb29cb-b5d7-42fd-8204-4327144ea7b0_180_180.jpg" alt="Shining Days" width="80" height="80" /></a></dt><dd><a href="http://1420581.5sing.com/zj.aspx" target="_blank">Shining Days</a><br />音乐人：<a href="http://1420581.5sing.com" target="_blank">桑夏艾</a><br />日期：2008-09-09</dd></dl><dl style="display: none;"><dt><a href="http://8136411.5sing.com/zj.aspx?zjid=85412" target="_blank"><img src="http://img2011.5sing.com/m/2011/06/19/87c3d24c-1ca9-45c4-928a-906b35dcb5eb_180_180.jpg" alt="「七十二陵」柳飘飘角色曲" width="80" height="80" /></a></dt><dd><a href="http://8136411.5sing.com/zj.aspx?zjid=85412" target="_blank">「七十二陵」柳飘飘角色曲</a><br />音乐人：<a href="http://8136411.5sing.com" target="_blank">花满楼-流觞曲水</a><br />日期：2011-06-23</dd></dl>')
var m_ablum = 0;
var n_ablum = 0;
function lieAblum() {

    $(function() {
        var $firstNode = $('#scrollAlbum>dl');
        $firstNode.eq(n_ablum).removeAttr('display');
        $firstNode.eq(n_ablum).fadeOut('slow', function() {

            var index = (n_ablum + 1);
            if (index == $('#scrollAlbum>dl').length) index = 0;
            $firstNode.eq(index).fadeIn('slow');

            m_ablum++;
            if (m_ablum >= $('#scrollAlbum>dl').length) {
                n_ablum = 0;
                m_ablum = 0
            }
            else {
                n_ablum++;
            }
        });
    });
}
setInterval('lieAblum()', 10000);