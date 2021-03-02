
$(function () {

    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", adatKuld);
    $("article").delegate(".torol", "click", adatTorol);
});

var telefonkonyvem = [];

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betoltesekor!");
        }
    });
}

function kiir() {
    $("article").empty(); //magat a tag-et meghagyja, csak a gyerek elemeket tavolitja el, remove() tag-eket is eltavolitja a gyerek elemekkel egyutt
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var ID = telefonkonyvem[i].nev;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;
        var elem = "<div><h2>" + nev + "</h2><p>" + tel + "</p><p>" + kep + "</p><button id='" + ID + "' class='torol'>Torol</button></div>";
        $("article").append(elem);
    }

//    var nev = $("#nev").val();
//    var tel = $("#tel").val();
//    var kep = $("#kep").val();

    //var elem = "<div><h2>" + nev + "</h2><p>" + tel + "</p><p>" + kep + "</p><button>Torol</button></div>";

    //$("article").append(elem);
}

function adatKuld() {
    var szemely = {
        nev: $("#nev").val(),
        tel: $("#tel").val(),
        kep: $("#kep").val()
    };

    $.ajax({
        type: "POST",
        url: "beir.php",
        data: szemely,
        success: function (ujSzemely) {
            telefonkonyvem.push(JSON.parse(ujSzemely));
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentesekor!");
        }
    });
}

function adatTorol() {
    console.log("Meghivtam a torol metodust!");
    var ID = $(this).attr("id");
    console.log(ID);
    
    
    $.ajax({
        type: "DELETE",
        url: "torles.php"+ID,
        success: function () {
            console.log("Megtortent a torles");
            $(this).closest("div").remove();
        },
        error: function () {
            alert("Hiba az adatok torlesekor!");
        }
    });
}