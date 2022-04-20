const allDocs = [];

function addDocs(content,callback){

	const docs = document.querySelector("[docs]").cloneNode(true);
	const g = docs.querySelector("[editor]");
	const h = docs.querySelector("[result]");
	docs.style.display = "flex";

	const code = CodeMirror(g, {
	    value: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	${content}
</body>
</html>`,
	    mode: "htmlmixed",
	    lineWrapping: true,
	    readOnly: true
	});

	callback(h);

	document.querySelector("[alldocs]").appendChild(docs);
	allDocs.push([g,h]);

}

addDocs(`<h1 class="color-[blue]">I Am Copase</h1>`,(result)=>{

	const h1 = document.createElement("h1");
	h1.style.color = "blue";
	h1.textContent = "I Am Copase";
	result.appendChild(h1)

});

addDocs(`<h1 class="color-[blue] font-family-[sans-serif]">I Am Copase</h1>`,(result)=>{

	const h1 = document.createElement("h1");
	h1.style.color = "blue";
	h1.style.fontFamily = "sans-serif";
	h1.textContent = "I Am Copase";
	result.appendChild(h1)

});

addDocs(`<h1 class="color-[white] padding-[20px] border-radius-[5px] font-family-[sans-serif] background-[#130b44]">I Am Copase</h1>`,(result)=>{

	const h1 = document.createElement("h1");
	h1.style.color = "white";
	h1.style.padding = "20px";
	h1.style.borderRadius = "5px";
	h1.style.background = "#130b44";
	h1.style.fontFamily = "sans-serif";
	h1.textContent = "I Am Copase";
	result.appendChild(h1);

});

fetch("https://api.github.com/repos/daberpro/copase/contributors")
    .then(e => e.json())
    .then(e => {

        for (let g of e) {

            const template = document.querySelector("#template").cloneNode(true);
            template.style.display = "block";
            template.querySelector("img").src = g["avatar_url"];
            template.querySelector("img").alt = g["login"];
            console.log(template);
            document.querySelector("#ctr").appendChild(template);

        }

    });