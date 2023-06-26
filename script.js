function insert_Row() {
    //Write your code here
  let table  = document.getElementBy("sampleTable");
	let tr = document.createElement("tr");
	tr.innerHtml=`<td>New Cell1</td><td>New Cell1</td>`;
	table.append(tr);
  
}
