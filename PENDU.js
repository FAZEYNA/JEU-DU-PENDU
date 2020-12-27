img = document.getElementById('img');
b = document.getElementById('button');
T = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
mot= 'AVOCAT';
for (var i = 0; i < mot.length; i++) {
	but = document.createElement('button');
	b.appendChild(but);
}
for (var i = 0; i < 3; i++) {
	r = document.createElement('br');
	b.appendChild(r);
}
for (var i = 0; i < 26; i++)
{
	button = document.createElement('button');
	button.innerText = T[i];
	button.setAttribute('id',i);
	button.style.color = 'deeppink';
	button.style.border = '2px dotted black';
	button.style.borderRadius = '8px';
	button.style.cursor = 'pointer';
	button.setAttribute('onclick','clic('+i+')');
	b.appendChild(button);
}

n=1;
image = document.getElementsByTagName('img')[0];
k=1;
function clic(i){
	cpt=0;
	for (var j = 0; j < mot.length; j++) {
		if(document.getElementById(i).innerText == mot[j])
		{
			document.getElementsByTagName('button')[j].innerText= mot[j];
			cpt=1;
			n++;
		}
	}
	if(cpt==0)
	{
		image.src = "I"+k+".png";
		k++;
	}
	if(k==6){
		alert('vous avez perdu');
    	window.location.reload();
   	}
   	if(n==7)
   	{
   		alert('gagné');
    	window.location.reload();
   	}
}



