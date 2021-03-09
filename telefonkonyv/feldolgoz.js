
$(function () {

    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", adatKuld);
    $("article").delegate(".torol", "click", adatTorol);
    $("article").delegate(".szerkeszt", "click", adatSzerkeszt);
    $("#megse").on("click", adatMegse);
    $("#modosit").on("click", adatModosit);
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
        var ID = telefonkonyvem[i].ID;
        var nev = telefonkonyvem[i].nev;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;
        var elem = "<div><h2>" + nev + "</h2><p>" + tel + "</p><p>" + kep + "</p><button id='" + ID + "' class='torol'>Torol</button>\n\
            <button id='" + i + "' class='szerkeszt'>Szerkeszt</button><hr></div>";
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

    var aktelem = $(this).closest("div");
    $.ajax({
        type: "DELETE",
        url: "torles.php?=" + ID,
        success: function () {
            console.log("Megtortent a torles");
            aktelem.remove();
        },
        error: function () {
            alert("Hiba az adatok torlesekor!");
        }
    });
}

function adatSzerkeszt() {
    console.log("Adat modosít!");
    $(".szerkesztes").removeClass("elrejt");
    var index = $(this).attr("id");

    $("#id2").val(telefonkonyvem[index].ID);
    $("#nev2").val(telefonkonyvem[index].nev);
    $("#tel2").val(telefonkonyvem[index].tel);
    $("#kep2").val(telefonkonyvem[index].kep);

}

function adatMegse() {
    $(".szerkesztes").addClass("elrejt");
}

function adatModosit() {
    var editSzemely = {
        ID: $("#id2").val(),
        nev: $("#nev2").val(),
        tel: $("#tel2").val(),
        kep: $("#kep2").val()
    };
    console.log("Módosít");
    console.log(editSzemely);
    $.ajax({
        type: "PUT",
        url: "modosit.php",
        data: editSzemely,
        success: function () {
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok módosításakor!");
        }
    });
}