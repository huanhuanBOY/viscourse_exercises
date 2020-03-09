let userid = ""
if (getCookie('userid') && getCookie('userid').length >= 3) {
    userid = getCookie('userid')
    document.getElementById("sid_container").style["display"] = "none"
    document.getElementById("id_exercise").style["display"] = "block"
    window.userID = userid;
} else {
    let url_string = window.location.href
    var url = new URL(url_string);
    userid = url.searchParams.get("userid");
    if (userid && userid.length >= 3) {
        userid = "bbs_" + userid;
        document.getElementById("sid_container").style["display"] = "none"
        document.getElementById("id_exercise").style["display"] = "block"
        document.cookie = "userid=" + userid;
        window.userID = userid;
    } else {
        document.getElementById("sid_login").addEventListener("click", function() {
            let s = document.getElementById("sid_value").value;
            var sid = { "vbracke": "1", "cnchanac": "1", "cwchanbf": "1", "ckchanbo": "1", "lchenbm": "1", "ychendm": "1", "hschengac": "1", "kkchengah": "1", "ypchengaa": "1", "tkcheungad": "1", "cwvchu": "1", "ktchung": "1", "cyfungah": "1", "psgoradia": "1", "ngaa": "1", "mhassanaa": "1", "jyho": "1", "wyhoam": "1", "fhuaa": "1", "xhuangat": "1", "skhanna": "1", "dhkimac": "1", "wykongaa": "1", "pkaa": "1", "chkwokak": "1", "alamae": "1", "alamba": "1", "cwlauag": "1", "tllauac": "1", "ksleeaf": "1", "wlleeag": "1", "ctleungad": "1", "yfleungac": "1", "hlibg": "1", "haotianli": "haotianli", "wlibs": "1", "hliubm": "1", "ylliuaa": "1", "yhload": "1", "qluag": "1", "ylubj": "1", "chmokab": "1", "hymong": "1", "nnanda": "1", "nyngaiaa": "1", "huamin": "huamin", "jdsanjuan": "1", "yshaoaj": "1", "ysshiu": "1", "wlsiuab": "1", "ttangae": "1", "kcting": "1", "hktsangab": "1", "kwtsuiab": "1", "kkwanag": "1", "twangbj": "1", "ywangct": "1", "hweiad": "1", "zwenab": "1", "clwongak": "1", "cywongbr": "1", "jywongaa": "1", "kmwongap": "1", "wkwongav": "1", "mxiaag": "1", "mxuar": "1", "chyeoh": "1", "mymyeung": "1", "nclyueh": "1", "rzhangab": "1", "yzhangfg": "1", "dzhongab": "1" }
            if (s in sid) {
                window.userID = "ipt_" + s;
                document.getElementById("sid_container").style["display"] = "none"
                document.getElementById("id_exercise").style["display"] = "block"
                document.cookie = "userid=" + userid;
            } else {
                alert("Email head is not correct!!")
            }
        })
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}