function volume_sphere() {
    //Write your code here
	  const radius = parseInt(document.getElementById("radius").innerText);
	  const volumeDiv=document.getElementById("volume");
	  const volume=(4/3)*Math.PI*radius*radius*radius; 
	  volumeDiv.innerHTML=volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
