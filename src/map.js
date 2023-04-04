var data = [
    {"loc":[-15.38228, -58.08322], "tipo":"Usina", "title":"Cabaçal 1: PCH", "rio":"cabacal", "img":"images/Mark/usin.png"},
    {"loc":[-15.27931, -58.27703], "tipo":"Usina", "title":"Cabaçal 2: PCH", "rio":"cabacal","img":"images/Mark/usin.png"},
    {"loc":[-15.121, -58.43728],"tipo":"Usina", "title":"Cabaçal 3: PCH", "rio":"cabacal","img":"images/Mark/usin.png"},
    {"loc":[-15.10908, -58.46278], "tipo":"Usina", "title":"Cabaçal 4: PCH", "rio":"cabacal","img":"images/Mark/usin.png"},
    {"loc":[-15.11089, -58.475], "tipo":"Usina", "title":"Cabaçal 5: PCH", "rio":"cabacal","img":"images/Mark/usin.png"},
    {"loc":[-15.10339, -58.48783], "tipo":"Usina", "title":"Cabaçal 6: PCH", "rio":"cabacal","img":"images/Mark/usin.png"},
    {"loc":[-14.94944, -58.05722], "tipo":"Usina", "title":"Caramujo: PCH", "rio":"caramujo","img":"images/Mark/usin.png"},
    {"loc":[-14.80404, -56.37655], "tipo":"Usina", "title":"Perudá Montante: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-15.2732, -56.28454], "tipo":"Usina", "title":"Iratambé II: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-15.34112, -56.27704], "tipo":"Usina", "title":"Iratambé I: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-15.54608, -56.1709],"tipo":"Usina", "title":"Guapira II: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-14.95457, -56.44505],"tipo":"Usina", "title":"Angatu II Montante: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-15.15478, -56.44721], "tipo":"Usina", "title":"Angatu I: PCH", "rio":"cuiaba","img":"images/Mark/usin.png"},
    {"loc":[-15.34817, -56.995],"tipo":"Usina", "title":"Araras: PCH", "rio":"jauquara", "img":"images/Mark/usin.png"},
    {"loc":[-14.89599, -58.65021],"tipo":"Usina", "title":"Trairão 3: PCH", "rio":"jauru","img":"images/Mark/usin.png"},
    {"loc":[-14.65784, -58.49849],"tipo":"Usina", "title":"Areia Branca 3: AHE", "rio":"jauru","img":"images/Mark/usin.png"},
    {"loc":[-14.80398, -58.58796],"tipo":"Usina", "title":"Alagados 3: AHE", "rio":"jauru","img":"images/Mark/usin.png"},
    {"loc":[-14.83869, -58.62181],"tipo":"Usina", "title":"Estivadinho 3: PCH", "rio":"jauru","img":"images/Mark/usin.png"},
    {"loc":[-16.43944, -55.30278],"tipo":"Usina", "title":"Mutum I: PCH", "rio":"mutum", "img":"images/Mark/usin.png"},
    {"loc":[-16.45, -55.32],"tipo":"Usina", "title":"Mantovilis: PCH", "rio":"mutum", "img":"images/Mark/usin.png"},
    {"loc":[-14.67944, -57.75694], "tipo":"Usina", "title":"Paiguás: PCH", "rio":"sepotuba","img":"images/Mark/usin.png"},
    {"loc":[-14.68917, -57.80222], "tipo":"Usina", "title":"Salto Maciel: PCH", "rio":"sepotuba","img":"images/Mark/usin.png"},
    {"loc":[-15.00778, -58.07472], "tipo":"Usina", "title":"Salto do Céu: PCH", "rio":"rioVermelho","img":"images/Mark/usin.png"},
    {"loc":[-15.05528, -57.98917], "tipo":"Usina", "title":"Salto Caramujo : PCH", "rio":"rioVermelho","img":"images/Mark/usin.png"},
    {"loc":[-15.02417, -58.05444], "tipo":"Usina", "title":"Salto Vermelho I: PCH", "rio":"rioVermelho", "img":"images/Mark/usin.png"},
    {"loc":[-15.02417, -58.05444], "tipo":"Usina", "title":"Salto Vermelho I: PCH", "rio":"rioVermelho", "img":"images/Mark/usin.png"}
    
]
var conserva = [
    //Unidade de conservação
    {"loc":[-15.6346, -57.18384], "tipo":"UC", "title":"Serra das Araras", "img":"images/Mark/uc.png", "info":"https://uc.socioambiental.org/pt-br/arp/613"},
    {"loc":[-17.73306, -57.54295], "tipo":"UC", "title":"Pantanal Mato-Grossense", "img":"images/Mark/uc.png", "info":"https://uc.socioambiental.org/pt-br/arp/600"},
    {"loc":[-17.35636, -57.90619], "tipo":"UC", "title":"Guirá", "img":"images/Mark/uc.png", "info":"https://uc.socioambiental.org/pt-br/arp/3439"},
    {"loc":[-15.92797, -59.37836], "tipo":"UC", "title":"Serra de Santa Bárbara", "img":"images/Mark/uc.png", "info":"https://uc.socioambiental.org/pt-br/arp/1345"},
    {"loc":[-21.15205, -56.67023], "tipo":"UC", "title":"Serra da Bodoquena", "img":"images/Mark/uc.png", "info":"https://uc.socioambiental.org/pt-br/arp/2578"},

    //Nascente
    {"loc":[-14.60636, -56.5647612], "tipo":"UC", "title":"Nascentes do Rio", "img":"images/Mark/nasc.png", "info":"https://documentacao.socioambiental.org/ato_normativo/UC/1830_20141222_155528.pdf?_ga=2.176467877.1088768547.1674473516-1300841106.1674473516"},
    {"loc":[-17.24309, -56.62628], "tipo":"UC", "title":"Econtro das Águas", "img":"images/Mark/nasc.png", "info":"https://uc.socioambiental.org/pt-br/arp/4253"}
]
var povos = [
    {"loc":[-16.85932, -57.51016], "tipo":"TI", "title":"Estação Ecológica Taiamã", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org"},
    {"loc":[-14.88062, -57.0417], "tipo":"TI", "title":"T.I Umutina", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3889"},
    {"loc":[-14.50619, -58.0806], "tipo":"TI", "title":"T.I Rio Formoso", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3845"},
    {"loc":[-14.58893, -58.6536], "tipo":"TI", "title":"T.I Estivadinho", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3659"},
    {"loc":[-14.76562, -58.65326], "tipo":"TI", "title":"T.I Figueiras", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3666"},
    {"loc":[-20.66048, -57.21866], "tipo":"TI", "title":"T.I Kadiwéu", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3712"},
    {"loc":[-22.0157, -56.04332], "tipo":"TI", "title":"T.I Pirakuá", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3825"},
    {"loc":[-22.24306, -56.0392], "tipo":"TI", "title":"T.I Ñande Ru Marangatu", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3926"},
    {"loc":[-16.14946, -59.48273], "tipo":"TI", "title":"T.I Portal do Encantado", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4156"},
    {"loc":[-16.98675, -56.5686], "tipo":"TI", "title":"T.I Baía Guató", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4134"},
    {"loc":[-16.84485, -56.15662], "tipo":"TI", "title":"T.I Perigara", "img":"images/Mark/ti.png","info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3818"},
    {"loc":[-16.53529, -54.50592], "tipo":"TI", "title":"T.I Tadarimana", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3862"},
    {"loc":[-16.54845, -55.08545], "tipo":"TI", "title":"T.I Tereza Cristina", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3870"},
    {"loc":[-16.2002786,-54.3096690], "tipo":"TI", "title":"T.I Jarudore", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas"},
    {"loc":[-17.63181,-57.73315], "tipo":"TI", "title":"T.I Guató", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/3681"},
    {"loc":[-20.93974,-54.97627], "tipo":"TI", "title":"T.I Buritizinho", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4007"},
    {"loc":[-20.97726,-55.1651], "tipo":"TI", "title":"T.I Buritizinho", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4007"},
    {"loc":[-21.15795,-55.73639], "tipo":"TI", "title":"T.I Buritizinho", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4007"},
    {"loc":[-20.33862,-55.6897], "tipo":"TI", "title":"T.I Limão Verde", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4007"},
    {"loc":[-20.57022,-56.25275], "tipo":"TI", "title":"T.I Lalima", "img":"images/Mark/ti.png", "info":"https://ti.socioambiental.org/pt-br/terras-indigenas/4007"},
]

var map = new L.Map('map', {zoom: 8, center: new L.latLng(data[13].loc)});

L.tileLayer('https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=cV0m6jdl81SJYSNO8STs',{
atribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);	

var markersLayer = new L.LayerGroup()
var povoI = new L.LayerGroup().addTo(map)
var unidadeC = new L.LayerGroup().addTo(map)
var rioCabacal = new L.LayerGroup().addTo(map)
var saltoVermelho = new L.LayerGroup().addTo(map)
var rioVermelho = new L.LayerGroup().addTo(map)
var corregoCaramujo = new L.LayerGroup().addTo(map)
var rioCuiaba = new L.LayerGroup().addTo(map)
var rioJauquara = new L.LayerGroup().addTo(map)
var rioJauru = new L.LayerGroup().addTo(map)
var ribeiraoMutum = new L.LayerGroup().addTo(map)
var rioSeputuba = new L.LayerGroup().addTo(map)

/*var rios = L.geoJSON(rios, {style:{
    color: ' #0c46fa',
    weight: 2,
    dashArray: '12 8 12',
    }})*/

let pescaria = {
    iconUrl: 'images/Mark/pesca.png',
    iconSize: [50, 50],
    iconAnchor: [25, 49],
}
let pescaM = L.icon(pescaria)

let assentamentos = {
    iconUrl: 'images/Mark/assen.png',
    iconSize: [50, 50],
    iconAnchor: [25, 49],
}
let assentPNG = L.icon(assentamentos)

var bacia = L.geoJSON(bacia, {style:{
    Color: '#0c46fa',
    fillOpacity: 0,
    weight: 2,
    dashArray: '12 8 12',
    }})
var ti = L.geoJSON(TI,  {style:{
    color: 'red',
    weight: 2,
    }})
var uc = L.geoJSON(UC, {style:{
    color: 'green',
    weight: 2,
    }})
var ms = L.geoJSON(assenMS, {
    pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: assentPNG}).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + feature.properties.nome_proje + "</th></tr></thead><tbody><tr class='p-1'><td>Hectares</td><td>" + feature.properties.area_hecta + "</td></tr><tr class='p-1'><td>Nº Família</td><td>" + feature.properties.num_famili + "</td></tr><tr class='p-1'><td>Fase</td><td><a id='asd'>" + feature.properties.fase + "</a></td></tr><tr class='p-1'><td>Data de criação</td><td>" + feature.properties.data_de_cr + "</td></tr></tbody></table>")
}})
var mt = L.geoJSON(assenMT, {
    pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: assentPNG}).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + feature.properties.nome_proje + "</th></tr></thead><tbody><tr class='p-1'><td>Hectares</td><td>" + feature.properties.area_hecta + "</td></tr><tr class='p-1'><td>Nº Família</td><td>" + feature.properties.num_famili + "</td></tr><tr class='p-1'><td>Fase</td><td><a id='asd'>" + feature.properties.fase + "</a></td></tr><tr class='p-1'><td>Data de criação</td><td>" + feature.properties.data_de_cr + "</td></tr></tbody></table>")
}})
var pes = L.geoJSON(pesca, {
    pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: pescaM}).bindPopup("Name: " + feature.properties.CLP_MUN_NM + "<br>" + "Population: " + feature.properties.population)

}}
)
uc.addTo(map)
ti.addTo(map)
bacia.addTo(map)
ms.addTo(map)
mt.addTo(map)
pes.addTo(map)
//rios.addTo(map);

map.addLayer(markersLayer)
map.addControl( new L.Control.Search({layer: markersLayer}) )

L.control.measure({
    primaryLengthUnit: 'kilometers', 
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters', 
    secondaryAreaUnit: undefined
}).addTo(map);

var cabeca = document.querySelector('h1')
var page = document.querySelector('#page')
var tudo = document.querySelector('#tudo')
var voltar = document.querySelector('#voltar')
var paginac = document.querySelector('#paginac')
var asd = document.querySelector('th')

for(let i in conserva){
    
    let iconOption = {
        iconUrl: conserva[i].img,
        iconSize: [50, 50],
        iconAnchor: [25, 49],
    };
    let nm = L.icon(iconOption);

    var titulo = conserva[i].title;	//value searched
    var loc = conserva[i].loc;		//position 
    var info = conserva[i].info
    //marker = new L.Marker(L.latLng(loc), {icon: nm}, {title: title});

    var unidades = new L.Marker(L.latLng(loc), {icon: nm}, {title: titulo})
    unidades.bindTooltip(titulo).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + titulo + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(unidadeC)
} 

for(let i in povos){
    
    let iconOption = {
        iconUrl: povos[i].img,
        iconSize: [50, 50],
        iconAnchor: [25, 49],
    };
    let nm = L.icon(iconOption);

    var titulo = povos[i].title;	//value searched
    var loc = povos[i].loc;		//position 
    var info = povos[i].info
    //marker = new L.Marker(L.latLng(loc), {icon: nm}, {title: title});

    var povo = new L.Marker(L.latLng(loc), {icon: nm}, {title: titulo})
    povo.bindTooltip(titulo).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + titulo + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Processos</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(povoI)

}
      /* left */
      L.control.slideMenu(left + contents).addTo(map);

for(let i in data){

    let iconOption = {
        iconUrl: data[i].img,
        iconSize: [50, 50],
            iconAnchor: [25, 49],
        };
        let nm = L.icon(iconOption);
    
        var title = data[i].title;	//value searched
        var loc = data[i].loc;		//position 
        var info = data[i].info
        //marker = new L.Marker(L.latLng(loc), {icon: nm}, {title: title});

        var usina = new L.Marker(L.latLng(loc), {icon: nm}, {title: title})

        if(data[i].rio == "cuiaba"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioCuiaba)
        }else if(data[i].rio == "cabacal"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioCabacal)
        }else if(data[i].rio == "jauquara"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioJauquara)
        }else if(data[i].rio == "jauru"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioJauru)
        }else if(data[i].rio == "rioVermelho"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioVermelho)
        }else if(data[i].rio == "sepotuba"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(rioSeputuba)
        }else if(data[i].rio == "mutum"){
            usina.bindTooltip(title).bindPopup("<table class='table padded table-striped'><thead class='text-center'><tr id='page'class='p-1'><th colspan='2'>" + title + "</th></tr></thead><tbody><tr class='p-1'><td>Nome</td><td>Hidreletrica</td></tr><tr class='p-1'><td>Tipo</td><td>UHC</td></tr><tr class='p-1'><td>Jurídico</td><td><a id='asd'>Qualquer</a></td></tr><tr class='p-1'><td>Geolocalização</td><td>2</td></tr><td>Mais informções</td><td><a href='" + info + "' target='_blank'>Clique aqui</a></td></tr></tbody></table>").addTo(ribeiraoMutum)
        }

    } 