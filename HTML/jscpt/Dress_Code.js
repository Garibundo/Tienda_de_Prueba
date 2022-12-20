var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var b7 = document.getElementById('b7');

var vol = document.getElementById('Vol');
var pvt = document.getElementById('Pvt');
var vpvt = document.getElementById('VPvt');
var cpl = document.getElementById('Cpl');
var sgt = document.getElementById('Sgt');
var fsgt = document.getElementById('FSgt');
var slt = document.getElementById('SLt');
var flt = document.getElementById('FLt');
var cpt = document.getElementById('Cpt');

var uni= document.getElementById('Uniform');


b1.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd Wisconsin";
  document.getElementById('Uniform').className="2ndWI";
};
b2.onclick = function() {
  document.getElementById('Title').innerHTML= "14th Brooklyn";
  document.getElementById('Uniform').className="14thNY";
};
b3.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd U.S Sharpshooters";
  document.getElementById('Uniform').className="2USS";
};
b4.onclick = function() {
  document.getElementById('Title').innerHTML= "19th Indiana";
  document.getElementById('Uniform').className="19thIN";
};
b5.onclick = function() {
  document.getElementById('Title').innerHTML= "24th Michigan";
  document.getElementById('Uniform').className="24thMI";
};
b6.onclick = function() {
  document.getElementById('Title').innerHTML= "1st Maryland Cavalry";
  document.getElementById('Uniform').className="1stMDCav";
//   if(rank-disp.ClassName == "rank-menu") {
//     //change menu to troopers
//
// }
};
b7.onclick = function() {
  document.getElementById('Title').innerHTML= "4th U.S Battery";
  document.getElementById('Uniform').className="4thUS";
};


vol.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]Vol.Your_Name";

  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]Vol.Your_Name";

  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]Vol.Your_Name";

  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]Vol.Your_Name";

  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]Vol.Your_Name";

  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]Vol.Your_Name";

  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]Vol.Your_Name";

  }
};

pvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]Pvt.Your_Name";

  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]Pvt.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]Pvt.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]Pvt.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]Pvt.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]Pvt.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Vol.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]Pvt.Your_Name";
  }
};

vpvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]VPvt.Your_Name";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]VPvt.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]VPvt.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]VPvt.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]VPvt.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]VPvt.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]VPvt.Your_Name";
  }
};

cpl.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]Cpl.Your_Name";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]Cpl.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]Cpl.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]Cpl.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]Cpl.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]Cpl.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Cpl.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]Cpl.Your_Name";
  }
};

sgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]Sgt.Your_Name";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]Sgt.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]Sgt.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]Sgt.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]Sgt.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]Sgt.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Sgt.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]Sgt.Your_Name";
  }
};

fsgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]FSgt.Your_Name";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]FSgt.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]FSgt.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]FSgt.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]FSgt.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]FSgt.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/FSgt.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]FSgt.Your_Name";
  }
};

slt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[14thNYSM]SLt.Your_Name";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndWI]SLt.Your_Name";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[2ndU.S.S]SLt.Your_Name";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[19thIN]SLt.Your_Name";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[24thMI]SLt.Your_Name";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[1stMDCav]SLt.Your_Name";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/SLt.jpg";
    document.getElementById('name-rank').innerHTML= "[4thUSArtyB]SLt.Your_Name";
  }
};
