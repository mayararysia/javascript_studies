var tamanho = Number(prompt("Insira o tamanho: ", ""));
var aux;
var parede1="";
var parede2="";

for(var linha=1; linha<=tamanho; linha++){
	 
	if(linha%2==1){//impar
			//console.log("#"+" "+"#"+" "+"#"+" "+"#"+" ");
			aux=1;
			do{
				if(aux%2==1){//ímpar
					if(tamanho%2==1 && aux==tamanho) parede1+="#";
					else parede1+="#"+" ";
					aux++;
				}				
				aux++;
			}while(aux<=tamanho);
			console.log(parede1);
			parede1="";
	}		
	if(linha%2==0){//par
			//console.log(" "+"#"+" "+"#"+" "+"#"+" "+"#");
			aux=1;
			do{
				if(aux%2==1){//ímpar
					if(tamanho%2==1 && aux==tamanho) parede2+=" ";
					else parede2+=" "+"#";
					aux++;					
				}				
				aux++;
			}while(aux<=tamanho);
			console.log(parede2);
			parede2="";
	}
}