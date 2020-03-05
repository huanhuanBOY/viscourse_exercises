let url_string = window.location.href
var url = new URL(url_string);
var userid = url.searchParams.get("userid");

if (userid && userid.length >= 3) {
    document.getElementById("sid_container").style["display"] = "none"
    document.getElementById("id_exercise").style["display"] = "block"
}
document.getElementById("sid_login").addEventListener("click", function() {
    let s = document.getElementById("sid_value").value;
    var sid = { "12232502": "yhload", "20191881": "wlsiuab", "20215065": "dhkimac", "20221791": "ywangct", "20262666": "wlleeag", "20263139": "clwongak", "20312227": "jdsanjuan", "20314835": "mhassanaa", "20328915": "hlibg", "20329347": "xhuangat", "20344464": "cwvchu", "20344581": "nclyueh", "20355114": "fhuaa", "20371974": "skhanna", "20372526": "vbracke", "20381682": "alamba", "20387832": "lchenbm", "20410926": "kwtsuiab", "20412261": "ychendm", "20413734": "yzhangfg", "20414013": "yshaoaj", "20419594": "cywongbr", "20420684": "jywongaa", "20422137": "chkwokak", "20426212": "cwlauag", "20428284": "tkcheungad", "20429305": "ktchung", "20435275": "kcting", "20441420": "mxiaag", "20446468": "cyfungah", "20446559": "kmwongap", "20446561": "tllauac", "20446963": "ypchengaa", "20447280": "alamae", "20447292": "cwchanbf", "20447709": "ksleeaf", "20447905": "ysshiu", "20449898": "ctleungad", "20450134": "chmokab", "20450146": "wkwongav", "20450627": "ngaa", "20453966": "psgoradia", "20460763": "jyho", "20461951": "chyeoh", "20462462": "wykongaa", "20463442": "hweiad", "20470562": "mxuar", "20472558": "pkaa", "20476970": "cnchanac", "20486456": "wlibs", "20491384": "nnanda", "20492493": "hliubm", "20493174": "zwenab", "20493382": "qluag", "20493423": "twangbj", "20493734": "ylubj", "20510180": "nyngaiaa", "20511196": "hktsangab", "20513950": "hschengac", "20515001": "hymong", "20518778": "ckchanbo", "20519679": "kkwanag", "20520953": "ylliuaa", "20533560": "yfleungac", "20534459": "wyhoam", "20535025": "kkchengah", "20562511": "dzhongab", "20583187": "ttangae", "20603418": "mymyeung", "vbracke": "20372526", "cnchanac": "20476970", "cwchanbf": "20447292", "ckchanbo": "20518778", "lchenbm": "20387832", "ychendm": "20412261", "hschengac": "20513950", "kkchengah": "20535025", "ypchengaa": "20446963", "tkcheungad": "20428284", "cwvchu": "20344464", "ktchung": "20429305", "cyfungah": "20446468", "psgoradia": "20453966", "ngaa": "20450627", "mhassanaa": "20314835", "jyho": "20460763", "wyhoam": "20534459", "fhuaa": "20355114", "xhuangat": "20329347", "skhanna": "20371974", "dhkimac": "20215065", "wykongaa": "20462462", "pkaa": "20472558", "chkwokak": "20422137", "alamae": "20447280", "alamba": "20381682", "cwlauag": "20426212", "tllauac": "20446561", "ksleeaf": "20447709", "wlleeag": "20262666", "ctleungad": "20449898", "yfleungac": "20533560", "hlibg": "20328915", "haotianli": "haotianli", "wlibs": "20486456", "hliubm": "20492493", "ylliuaa": "20520953", "yhload": "12232502", "qluag": "20493382", "ylubj": "20493734", "chmokab": "20450134", "hymong": "20515001", "nnanda": "20491384", "nyngaiaa": "20510180", "huamin": "huamin", "jdsanjuan": "20312227", "yshaoaj": "20414013", "ysshiu": "20447905", "wlsiuab": "20191881", "ttangae": "20583187", "kcting": "20435275", "hktsangab": "20511196", "kwtsuiab": "20410926", "kkwanag": "20519679", "twangbj": "20493423", "ywangct": "20221791", "hweiad": "20463442", "zwenab": "20493174", "clwongak": "20263139", "cywongbr": "20419594", "jywongaa": "20420684", "kmwongap": "20446559", "wkwongav": "20450146", "mxiaag": "20441420", "mxuar": "20470562", "chyeoh": "20461951", "mymyeung": "20603418", "nclyueh": "20344581", "rzhangab": "06766307", "06766307": "rzhangab", "yzhangfg": "20413734", "dzhongab": "20562511" }
    if (sid[s].length > 5) {
        window.userID = s;
        document.getElementById("sid_container").style["display"] = "none"
        document.getElementById("id_exercise").style["display"] = "block"
    } else {
        alert("Student ID is not correct!!")
    }
})