var muscleArr = [];
var caeLabels = [];
var caeDatas = [];
var piedataArr = [];
function removeA(arr){
  var what, a= arguments, L= a.length, ax;
  while(L> 1 && arr.length){
    what= a[--L];
    while((ax= arr.indexOf(what))!= -1){
      arr.splice(ax, 1);
    }
  }
  return arr;
}

$(document).ready(function() {
  var isGreenDelt = false;
  var isGreenTrap = false;
  var isGreenBicep = false;
  var isGreenFlex = false;
  var isGreenObliques = false;
  var isGreenQuad = false;
  var isGreenAdd = false;
  var isGreenTib = false;
  var isGreenPec = false;
  var isGreenAbs = false;
  var isGreenTri = false;
  var isGreenLat = false;
  var isGreenGlu = false;
  var isGreenHam = false;
  var isGreenCaf = false;
  $("#rDeltoid").on({
          mouseover: function() {
            
            if (isGreenDelt) {
              $("#rDeltoid").css("background-color", "#1eb81e");
              $("#rDel").css("background-color", "#1eb81e");
              $("#lDel").css("background-color", "#1eb81e");
              $("#rDelBack").css("background-color", "#1eb81e");
              $("#lDelBack").css("background-color", "#1eb81e");
            }
            else {
              $("#rDeltoid").css("background-color", "#e62020");
              $("#rDel").css("background-color", "#e62020");
              $("#lDel").css("background-color", "#e62020");
              $("#rDelBack").css("background-color", "#e62020");
              $("#lDelBack").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenDelt) {
              $("#rDeltoid").css("background-color", "#27FE27");
              $("#rDel").css("background-color", "#27FE27");
              $("#lDel").css("background-color", "#27FE27");
              $("#rDelBack").css("background-color", "#27FE27");
              $("#lDelBack").css("background-color", "#27FE27");
            }
            else {
              $("#rDeltoid").css("background-color", "#db4646");
              $("#rDel").css("background-color", "#db4646");
              $("#lDel").css("background-color", "#db4646");
              $("#rDelBack").css("background-color", "#db4646");
              $("#lDelBack").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rDel").css("background-color", "#27FE27");
            $("#lDel").css("background-color", "#27FE27");
            $("#rDel").css("border", "2px solid #1eb81e");
            $("#lDel").css("border", "2px solid #1eb81e");
            $("#rDelBack").css("background-color", "#27FE27");
            $("#lDelBack").css("background-color", "#27FE27");
            $("#rDelBack").css("border", "2px solid #1eb81e");
            $("#lDelBack").css("border", "2px solid #1eb81e");
            isGreenDelt = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rDel").css("background-color", "#db4646");
            $("#lDel").css("background-color", "#db4646");
            $("#rDel").css("border", "2px solid #ff2b2b");
            $("#lDel").css("border", "2px solid #ff2b2b");
            $("#rDelBack").css("background-color", "#db4646");
            $("#lDelBack").css("background-color", "#db4646");
            $("#rDelBack").css("border", "2px solid #ff2b2b");
            $("#lDelBack").css("border", "2px solid #ff2b2b");
            isGreenDelt = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#traps").on({
          mouseover: function() {
            
            if (isGreenTrap) {
              $("#traps").css("background-color", "#1eb81e");
              $("#rTrap").css("background-color", "#1eb81e");
              $("#lTrap").css("background-color", "#1eb81e");
              $("#rTrapBack").css("background-color", "#1eb81e");
              $("#lTrapBack").css("background-color", "#1eb81e");
            }
            else {
              $("#traps").css("background-color", "#e62020");
              $("#rTrap").css("background-color", "#e62020");
              $("#lTrap").css("background-color", "#e62020");
              $("#rTrapBack").css("background-color", "#e62020");
              $("#lTrapBack").css("background-color", "#e62020");
            }
          },

          mouseout: function() {
            if (isGreenTrap) {
              $("#traps").css("background-color", "#27FE27");
              $("#rTrap").css("background-color", "#27FE27");
              $("#lTrap").css("background-color", "#27FE27");
              $("#rTrapBack").css("background-color", "#27FE27");
              $("#lTrapBack").css("background-color", "#27FE27");
            }
            else {
              $("#traps").css("background-color", "#db4646");
              $("#rTrap").css("background-color", "#db4646");
              $("#lTrap").css("background-color", "#db4646");
              $("#rTrapBack").css("background-color", "#db4646");
              $("#lTrapBack").css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rTrapBack").css("background-color", "#27FE27");
            $("#lTrapBack").css("background-color", "#27FE27");
            $("#rTrapBack").css("border", "2px solid #1eb81e");
            $("#lTrapBack").css("border", "2px solid #1eb81e");
            $("#rTrap").css("background-color", "#27FE27");
            $("#lTrap").css("background-color", "#27FE27");
            $("#rTrap").css("border", "2px solid #1eb81e");
            $("#lTrap").css("border", "2px solid #1eb81e");
            isGreenTrap = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rTrapBack").css("background-color", "#db4646");
            $("#lTrapBack").css("background-color", "#db4646");
            $("#rTrapBack").css("border", "2px solid #ff2b2b");
            $("#lTrapBack").css("border", "2px solid #ff2b2b");
            $("#rTrap").css("background-color", "#db4646");
            $("#lTrap").css("background-color", "#db4646");
            $("#rTrap").css("border", "2px solid #ff2b2b");
            $("#lTrap").css("border", "2px solid #ff2b2b");
            isGreenTrap = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

         $("#bicep").on({
          mouseover: function() {
            
            if (isGreenBicep) {
              $("#bicep").css("background-color", "#1eb81e");
              $("#lBicep").css("background-color", "#1eb81e");
              $("#rBicep").css("background-color", "#1eb81e");
            }
            else {
              $("#bicep").css("background-color", "#e62020");
              $("#lBicep").css("background-color", "#e62020");
              $("#rBicep").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenBicep) {
              $("#bicep").css("background-color", "#27FE27");
              $("#lBicep").css("background-color", "#27FE27");
              $("#rBicep").css("background-color", "#27FE27");
            }
            else {
              $("#bicep").css("background-color", "#db4646");
              $("#lBicep").css("background-color", "#db4646");
              $("#rBicep").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rBicep").css("background-color", "#27FE27");
            $("#lBicep").css("background-color", "#27FE27");
            $("#rBicep").css("border", "2px solid #1eb81e");
            $("#lBicep").css("border", "2px solid #1eb81e");
            isGreenBicep = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rBicep").css("background-color", "#db4646");
            $("#lBicep").css("background-color", "#db4646");
            $("#rBicep").css("border", "2px solid #ff2b2b");
            $("#lBicep").css("border", "2px solid #ff2b2b");
            isGreenBicep = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#flexor").on({
          mouseover: function() {
            
            if (isGreenFlex) {
              $("#flexor").css("background-color", "#1eb81e");
              $("#rFlex").css("background-color", "#1eb81e");
              $("#lFlex").css("background-color", "#1eb81e");
            }
            else {
              $("#flexor").css("background-color", "#e62020");
              $("#rFlex").css("background-color", "#e62020");
              $("#lFlex").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenFlex) {
              $("#flexor").css("background-color", "#27FE27");
              $("#rFlex").css("background-color", "#27FE27");
              $("#lFlex").css("background-color", "#27FE27");
            }
            else {
              $("#flexor").css("background-color", "#db4646");
              $("#rFlex").css("background-color", "#db4646");
              $("#lFlex").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rFlex").css("background-color", "#27FE27");
            $("#lFlex").css("background-color", "#27FE27");
            $("#rFlex").css("border", "2px solid #1eb81e");
            $("#lFlex").css("border", "2px solid #1eb81e");
            isGreenFlex = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rFlex").css("background-color", "#db4646");
            $("#lFlex").css("background-color", "#db4646");
            $("#rFlex").css("border", "2px solid #ff2b2b");
            $("#lFlex").css("border", "2px solid #ff2b2b");
            isGreenFlex = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

         $("#obliques").on({
          mouseover: function() {
            
            if (isGreenObliques) {
              $("#obliques").css("background-color", "#1eb81e");
              $("#rOblique").css("background-color", "#1eb81e");
              $("#lOblique").css("background-color", "#1eb81e");
            }
            else {
              $("#obliques").css("background-color", "#e62020");
              $("#rOblique").css("background-color", "#e62020");
              $("#lOblique").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenObliques) {
              $("#obliques").css("background-color", "#27FE27");
              $("#rOblique").css("background-color", "#27FE27");
              $("#lOblique").css("background-color", "#27FE27");
            }
            else {
              $("#obliques").css("background-color", "#db4646");
              $("#rOblique").css("background-color", "#db4646");
              $("#lOblique").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rOblique").css("background-color", "#27FE27");
            $("#lOblique").css("background-color", "#27FE27");
            $("#rOblique").css("border", "2px solid #1eb81e");
            $("#lOblique").css("border", "2px solid #1eb81e");
            isGreenObliques = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rOblique").css("background-color", "#db4646");
            $("#lOblique").css("background-color", "#db4646");
            $("#rOblique").css("border", "2px solid #ff2b2b");
            $("#lOblique").css("border", "2px solid #ff2b2b");
            isGreenObliques = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});
  
        $("#quad").on({
          mouseover: function() {
            
            if (isGreenQuad) {
              $("#quad").css("background-color", "#1eb81e");
              $("#lQuad").css("background-color", "#1eb81e");
              $("#rQuad").css("background-color", "#1eb81e");
            }
            else {
              $("#quad").css("background-color", "#e62020");
              $("#lQuad").css("background-color", "#e62020");
              $("#rQuad").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenQuad) {
              $("#quad").css("background-color", "#27FE27");
              $("#lQuad").css("background-color", "#27FE27");
              $("#rQuad").css("background-color", "#27FE27");
            }
            else {
              $("#quad").css("background-color", "#db4646");
              $("#lQuad").css("background-color", "#db4646");
              $("#rQuad").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rQuad").css("background-color", "#27FE27");
            $("#lQuad").css("background-color", "#27FE27");
            $("#rQuad").css("border", "2px solid #1eb81e");
            $("#lQuad").css("border", "2px solid #1eb81e");
            isGreenQuad = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rQuad").css("background-color", "#db4646");
            $("#lQuad").css("background-color", "#db4646");
            $("#rQuad").css("border", "2px solid #ff2b2b");
            $("#lQuad").css("border", "2px solid #ff2b2b");
            isGreenQuad = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});
  
        $("#adductors").on({
          mouseover: function() {
            
            if (isGreenAdd) {
              $("#adductors").css("background-color", "#1eb81e");
              $("#lAdd").css("background-color", "#1eb81e");
              $("#rAdd").css("background-color", "#1eb81e");
            }
            else {
              $("#adductors").css("background-color", "#e62020");
              $("#lAdd").css("background-color", "#e62020");
              $("#rAdd").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenAdd) {
              $("#adductors").css("background-color", "#27FE27");
              $("#lAdd").css("background-color", "#27FE27");
              $("#rAdd").css("background-color", "#27FE27");
            }
            else {
              $("#adductors").css("background-color", "#db4646");
              $("#lAdd").css("background-color", "#db4646");
              $("#rAdd").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rAdd").css("background-color", "#27FE27");
            $("#lAdd").css("background-color", "#27FE27");
            $("#rAdd").css("border", "2px solid #1eb81e");
            $("#lAdd").css("border", "2px solid #1eb81e");
            isGreenAdd = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rAdd").css("background-color", "#db4646");
            $("#lAdd").css("background-color", "#db4646");
            $("#rAdd").css("border", "2px solid #ff2b2b");
            $("#lAdd").css("border", "2px solid #ff2b2b");
            isGreenAdd= false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#tib").on({
          mouseover: function() {
            
            if (isGreenTib) {
              $("#tib").css("background-color", "#1eb81e");
              $("#lTib").css("background-color", "#1eb81e");
              $("#rTib").css("background-color", "#1eb81e");
            }
            else {
              $("#tib").css("background-color", "#e62020");
              $("#lTib").css("background-color", "#e62020");
              $("#rTib").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenTib) {
              $("#tib").css("background-color", "#27FE27");
              $("#lTib").css("background-color", "#27FE27");
              $("#rTib").css("background-color", "#27FE27");
            }
            else {
              $("#tib").css("background-color", "#db4646");
              $("#lTib").css("background-color", "#db4646");
              $("#rTib").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rTib").css("background-color", "#27FE27");
            $("#lTib").css("background-color", "#27FE27");
            $("#rTib").css("border", "2px solid #1eb81e");
            $("#lTib").css("border", "2px solid #1eb81e");
            isGreenTib = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rTib").css("background-color", "#db4646");
            $("#lTib").css("background-color", "#db4646");
            $("#rTib").css("border", "2px solid #ff2b2b");
            $("#lTib").css("border", "2px solid #ff2b2b");
            isGreenTib = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#tricep").on({
          mouseover: function() {
            
            if (isGreenTri) {
              $("#tricep").css("background-color", "#1eb81e");
              $("#lTri").css("background-color", "#1eb81e");
              $("#rTri").css("background-color", "#1eb81e");
            }
            else {
              $("#tricep").css("background-color", "#e62020");
              $("#lTri").css("background-color", "#e62020");
              $("#rTri").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenTri) {
              $("#tricep").css("background-color", "#27FE27");
              $("#lTri").css("background-color", "#27FE27");
              $("#rTri").css("background-color", "#27FE27");
            }
            else {
              $("#tricep").css("background-color", "#db4646");
              $("#lTri").css("background-color", "#db4646");
              $("#rTri").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rTri").css("background-color", "#27FE27");
            $("#lTri").css("background-color", "#27FE27");
            $("#rTri").css("border", "2px solid #1eb81e");
            $("#lTri").css("border", "2px solid #1eb81e");
            isGreenTri = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rTri").css("background-color", "#db4646");
            $("#lTri").css("background-color", "#db4646");
            $("#rTri").css("border", "2px solid #ff2b2b");
            $("#lTri").css("border", "2px solid #ff2b2b");
            isGreenTri = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#lats").on({
          mouseover: function() {
            
            if (isGreenLat) {
              $("#lats").css("background-color", "#1eb81e");
              $("#lLat").css("background-color", "#1eb81e");
              $("#rLat").css("background-color", "#1eb81e");
            }
            else {
              $("#lats").css("background-color", "#e62020");
              $("#lLat").css("background-color", "#e62020");
              $("#rLat").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenLat) {
              $("#lats").css("background-color", "#27FE27");
              $("#lLat").css("background-color", "#27FE27");
              $("#rLat").css("background-color", "#27FE27");
            }
            else {
              $("#lats").css("background-color", "#db4646");
              $("#lLat").css("background-color", "#db4646");
              $("#rLat").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rLat").css("background-color", "#27FE27");
            $("#lLat").css("background-color", "#27FE27");
            $("#rLat").css("border", "2px solid #1eb81e");
            $("#lLat").css("border", "2px solid #1eb81e");
            isGreenLat = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rLat").css("background-color", "#db4646");
            $("#lLat").css("background-color", "#db4646");
            $("#rLat").css("border", "2px solid #ff2b2b");
            $("#lLat").css("border", "2px solid #ff2b2b");
            isGreenLat = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

         $("#glutes").on({
          mouseover: function() {
            
            if (isGreenGlu) {
              $("#glutes").css("background-color", "#1eb81e");
              $("#lGlu").css("background-color", "#1eb81e");
              $("#rGlu").css("background-color", "#1eb81e");
            }
            else {
              $("#glutes").css("background-color", "#e62020");
              $("#lGlu").css("background-color", "#e62020");
              $("#rGlu").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenGlu) {
              $("#glutes").css("background-color", "#27FE27");
              $("#lGlu").css("background-color", "#27FE27");
              $("#rGlu").css("background-color", "#27FE27");
            }
            else {
              $("#glutes").css("background-color", "#db4646");
              $("#lGlu").css("background-color", "#db4646");
              $("#rGlu").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rGlu").css("background-color", "#27FE27");
            $("#lGlu").css("background-color", "#27FE27");
            $("#rGlu").css("border", "2px solid #1eb81e");
            $("#lGlu").css("border", "2px solid #1eb81e");
            isGreenGlu = true;
            if (muscleArr.indexOf(this.name)==-1) {
             muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rGlu").css("background-color", "#db4646");
            $("#lGlu").css("background-color", "#db4646");
            $("#rGlu").css("border", "2px solid #ff2b2b");
            $("#lGlu").css("border", "2px solid #ff2b2b");
            isGreenGlu = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#hams").on({
          mouseover: function() {
            
            if (isGreenHam) {
              $("#hams").css("background-color", "#1eb81e");
              $("#lHam").css("background-color", "#1eb81e");
              $("#rHam").css("background-color", "#1eb81e");
            }
            else {
              $("#hams").css("background-color", "#e62020");
              $("#lHam").css("background-color", "#e62020");
              $("#rHam").css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenHam) {
              $("#hams").css("background-color", "#27FE27");
              $("#lHam").css("background-color", "#27FE27");
              $("#rHam").css("background-color", "#27FE27");
            }
            else {
              $("#hams").css("background-color", "#db4646");
              $("#lHam").css("background-color", "#db4646");
              $("#rHam").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rHam").css("background-color", "#27FE27");
            $("#lHam").css("background-color", "#27FE27");
            $("#rHam").css("border", "2px solid #1eb81e");
            $("#lHam").css("border", "2px solid #1eb81e");
            isGreenHam = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rHam").css("background-color", "#db4646");
            $("#lHam").css("background-color", "#db4646");
            $("#rHam").css("border", "2px solid #ff2b2b");
            $("#lHam").css("border", "2px solid #ff2b2b");
            isGreenHam = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

         $("#calves").on({
          mouseover: function() {
            
            if (isGreenCaf) {
              $("#calves").css("background-color", "#1eb81e");
              $("#lCaf").css("background-color", "#1eb81e");
              $("#rCaf").css("background-color", "#1eb81e");
            }
            else {
              $("#calves").css("background-color", "#e62020");
              $("#lCaf").css("background-color", "#e62020");
              $("#rCaf").css("background-color", "#e62020");
            }

          },

          mouseout: function() {
            if (isGreenCaf) {
              $("#calves").css("background-color", "#27FE27");
              $("#lCaf").css("background-color", "#27FE27");
              $("#rCaf").css("background-color", "#27FE27");
            }
            else {
              $("#calves").css("background-color", "#db4646");
              $("#lCaf").css("background-color", "#db4646");
              $("#rCaf").css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            $("#rCaf").css("background-color", "#27FE27");
            $("#lCaf").css("background-color", "#27FE27");
            $("#rCaf").css("border", "2px solid #1eb81e");
            $("#lCaf").css("border", "2px solid #1eb81e");
            isGreenCaf = true;
            if (muscleArr.indexOf(this.name)==-1) {
              muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            $("#rCaf").css("background-color", "#db4646");
            $("#lCaf").css("background-color", "#db4646");
            $("#rCaf").css("border", "2px solid #ff2b2b");
            $("#lCaf").css("border", "2px solid #ff2b2b");
            isGreenCaf = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#pectoralis").on({
          mouseover: function() {
            
            if (isGreenPec) {
              $(this).css("background-color", "#1eb81e");
            }
            else {
              $(this).css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenPec) {
              $(this).css("background-color", "#27FE27");
            }
            else {
              $(this).css("background-color", "#db4646");
            }
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            isGreenPec = true;
            if (muscleArr.indexOf(this.name)==-1) {
             muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            isGreenPec = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

        $("#abs").on({
          mouseover: function() {
            
            if (isGreenAbs) {
              $(this).css("background-color", "#1eb81e");
            }
            else {
              $(this).css("background-color", "#e62020");
            }
            
          },

          mouseout: function() {
            if (isGreenAbs) {
              $(this).css("background-color", "#27FE27");
            }
            else {
              $(this).css("background-color", "#db4646");
            }
            
          },

          click: function() {
            $(this).css("background-color", "#27FE27");
            $(this).css("border", "2px solid #1eb81e");
            isGreenAbs = true;
            if (muscleArr.indexOf(this.name)==-1) {
               muscleArr.push(this.name);
            }
            $("#muscleNames").html(muscleArr);
          },

          dblclick: function() {
            $(this).css("background-color", "#db4646");
            $(this).css("border", "2px solid #ff2b2b");
            isGreenAbs = false;
            removeA(muscleArr, this.name);
            $("#muscleNames").html(muscleArr);
          },});

  $("#next").click(function() {
    var workout = buildWorkout();
    localStorage.setItem('workoutOutline', workout)
    caeLabels = generateCurrentApplicableExercises(muscleArr,allLifts)
    localStorage.setItem('caeValsChart', caeLabels);
    caeDatas = generateCAEVals(muscleArr,allLifts);
    localStorage.setItem('caeChart', muscleArr);
    piedataArr = generateBreakdown(muscleArr);
    localStorage.setItem('genchart', piedataArr);
    window.location.assign('CriteriaWindow.html');
  });
  $("#calcDrop").click(function() {
      $(".calcList").slideToggle(300);
  });
});

function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.marginLeft = "250px";
        document.body.style.opacity = "50%";
}

function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
        document.body.style.marginLeft = "0px";
        document.body.style.opacity = "100%";
}

var benchPress = {
  name:"Bench Press",
  intensity: "Medium",
  primaryMusclesWorked: ["Pectoralis"], 
  secondaryMusclesWorked: ["Deltoids", "Trapezius", "Triceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var inclineBenchPress = {
  name:"Incline Bench Press",
  intensity: "Medium",
  primaryMusclesWorked: ["Pectoralis"],
  secondaryMusclesWorked: ["Deltoids", "Triceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var dumbbellFly = {
  name:"Dumbbell Fly",
  intensity: "Light",
  primaryMusclesWorked: ["Pectoralis"],
  secondaryMusclesWorked: ["Deltoids", "Flexors"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var dips = {
  name:"Dips",
  intensity: "High",
  primaryMusclesWorked: ["Pectoralis", "Triceps"],
  secondaryMusclesWorked: ["Deltoids"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var latPulldown = {
  name:"Lat Pulldowns",
  intensity: "Medium",
  primaryMusclesWorked:["Latissimus"],
  secondaryMusclesWorked:["Deltoids", "Trapezius", "Flexors"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var pullup = {
  name:"Pull-Ups",
  intensity: "High",
  primaryMusclesWorked:["Latissimus"],
  secondaryMusclesWorked:["Deltoids", "Trapezius", "Flexors", "Biceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var bentOverRow = {
  name:"Bent Over Row",
  intensity: "Medium",
  primaryMusclesWorked:["Latissimus"],
  secondaryMusclesWorked:["Deltoids", "Trapezius", "Flexors", "Biceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var uprightRow = {
  name:"Upright Row",
  intensity: "Light",
  primaryMusclesWorked:["Deltoids"],
  secondaryMusclesWorked:["Triceps", "Trapezius", "Flexors", "Biceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var shoulderPress = {
  name:"Shoulder Press",
  intensity: "Medium",
  primaryMusclesWorked:["Deltoids"],
  secondaryMusclesWorked:["Triceps", "Trapezius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var militaryPress = {
  name:"Military Press",
  intensity: "Medium",
  primaryMusclesWorked:["Deltoids"],
  secondaryMusclesWorked:["Triceps", "Trapezius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var shoulderFly = {
  name:"Shoulder Fly",
  intensity: "Light",
  primaryMusclesWorked:["Deltoids"],
  secondaryMusclesWorked:["Trapezius", "Flexors"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var tricepPushdown = {
  name:"Tricep Pushdown",
  intensity: "Light",
  primaryMusclesWorked:["Triceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var frenchPress = {
  name:"French Press",
  intensity: "Light",
  primaryMusclesWorked:["Triceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var bicepCurl = {
  name:"Bicep Curl",
  intensity: "Light",
  primaryMusclesWorked:["Biceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var hammerCurl = {
  name:"Hammer Curl",
  intensity: "Light",
  primaryMusclesWorked:["Biceps"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var crunch = {
  name:"Crunch",
  intensity: "Light",
  primaryMusclesWorked:["Abdominals"],
  secondaryMusclesWorked:["Obliques"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var russianTwist = {
  name:"Russian Twist",
  intensity: "Light",
  primaryMusclesWorked:["Obliques"], 
  secondaryMusclesWorked:["Abdominals"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var deadlift = {
  name:"Deadlift", 
  intensity: "Medium",
  primaryMusclesWorked:["Gluteus"], 
  secondaryMusclesWorked:["Abdominals","Latissimus", "Trapezius", "Hamstrings", "Gastrocnemius", "Tibialis"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var squat = {
  name:"Squat", 
  intensity: "Medium",
  primaryMusclesWorked:["Gluteus"], 
  secondaryMusclesWorked:["Hamstrings", "Gastrocnemius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var legPress = {
  name:"Leg Press", 
  intensity: "Medium",
  primaryMusclesWorked:["Gluteus"], 
  secondaryMusclesWorked:["Hamstrings", "Gastrocnemius","Tibialis"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var legExtension = {
  name:"Leg Extension", 
  intensity: "Light",
  primaryMusclesWorked:["Quadriceps"], 
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var wallSit = {
  name:"Wall Sit", 
  intensity: "Medium",
  primaryMusclesWorked:["Quadriceps"], 
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var legCurl = {
  name:"Leg Curl", 
  intensity: "Light",
  primaryMusclesWorked:["Hamstrings"], 
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var straightLegDeadlift = {
  name:"Straight Leg Deadlift", 
  intensity: "Medium",
  primaryMusclesWorked:["Hamstrings", "Gluteus", "Tibialis"], 
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var powerClean = {
  name:"Power Clean", 
  intensity: "High",
  primaryMusclesWorked:["Hamstrings", "Gluteus", "Abdominals", "Quadriceps", "Gastrocnemius"], 
  secondaryMusclesWorked:["Deltoids", "Trapezius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var hangClean = {
  name:"Hang Clean", 
  intensity: "High",
  primaryMusclesWorked:["Deltoids", "Trapezius", "Abdominals"], 
  secondaryMusclesWorked:["Gluteus", "Hamstrings", "Quadriceps", "Gastrocnemius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var cleanAndJerk = {
  name:"Clean and Jerk",
  intensity: "High", 
  primaryMusclesWorked:["Hamstrings", "Quadriceps", "Trapezius", "Abdominals", "Gastrocnemius", "Deltoids"], 
  secondaryMusclesWorked:["Obliques", "Biceps", "Triceps", "Flexors"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};
var calfRaise = {
  name:"Calf Raise",
  intensity: "Light", 
  primaryMusclesWorked:["Gastrocnemius"], 
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    return primaryScore;
  }
};
var farmerWalks = {
  name:"Farmer Walks", 
  intensity: "Medium",
  primaryMusclesWorked:["Flexors"], 
  secondaryMusclesWorked:["Deltoids", "Trapezius"],
  generateAptitude: function() {
    var primaryScore = 0;
    var secondaryScore = 0;

    for (var i=0;i<this.primaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.primaryMusclesWorked[i])) primaryScore++;
    }
    primaryScore/=this.primaryMusclesWorked.length;

    for (var i=0;i<this.secondaryMusclesWorked.length;i++) {
      if(muscleArr.includes(this.secondaryMusclesWorked[i])) secondaryScore++;
    } 
    secondaryScore/=this.secondaryMusclesWorked.length;

    return ((2*primaryScore) + secondaryScore)/3;
  }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var allLifts = [benchPress, inclineBenchPress, dumbbellFly, dips, latPulldown, pullup, bentOverRow, uprightRow, shoulderFly, shoulderPress, militaryPress, tricepPushdown, frenchPress, bicepCurl, hammerCurl, crunch, russianTwist, deadlift, squat, legPress, legExtension, wallSit, legCurl, straightLegDeadlift, powerClean, hangClean, cleanAndJerk, calfRaise, farmerWalks];
shuffle(allLifts);
function buildWorkout() {
  var lifts = [0,0,0,0,0,0,0,0,0,0];
  var liftNames = [0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i<allLifts.length;i++) {
    for (var j = 0; j<10; j++) {
      if (allLifts[i].generateAptitude()>Math.min.apply(Math, lifts)) {
        lifts[lifts.indexOf(Math.min.apply(Math, lifts))] = allLifts[i].generateAptitude();
        liftNames[lifts.indexOf(Math.min.apply(Math, lifts))] = allLifts[i].name; 
        break;
      }
    }
  }
  lifts.sort();
  liftNames.sort();
  for (var i = 9;i>0;i--) {
    if(liftNames[i]=="undefined") {
      liftNames.pop();
    }
  }
  liftNames.reverse();
  return liftNames;
}

function generateCurrentApplicableExercises(m, a) {
  var retArr = [];
  retArr.length = m.length;
  for (var i = 0; i<m.length;i++) {
    retArr[i] = 0;
    for (var j = 0; j<a.length;j++) {
      if (a[j].primaryMusclesWorked.indexOf(m[i])!=-1) {
        retArr[i]++; 
      }
      else if (a[j].secondaryMusclesWorked!=null && a[j].secondaryMusclesWorked.indexOf(m[i])!=-1) {
        retArr[i]++; 
      }
    }
  }
  return retArr;
}

function generateCAEVals(m, a) {
  var retArr = [];
  retArr.length = m.length;
  for (var i = 0; i<m.length;i++) {
    retArr[i] = 0;
    for (var j = 0; j<a.length;j++) {
      if (m[i]==a[i].name) {
        retArr[i]++; 
      }
    }
  }
}

function generateBreakdown(m) {
  var retArr = [0,0,0];
  for (var i = 0; i<m.length;i++) {
    if ($(document.getElementsByName(m[i])).attr('class') == "upper") retArr[0]++;
    else if ($(document.getElementsByName(m[i])).attr('class') == "lower") retArr[1]++;
    else retArr[2]++;
  }
  return retArr;
}
