'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),web=path.join(root,'web'),out=path.join(root,'artifacts');fs.mkdirSync(out,{recursive:true});
let html=fs.readFileSync(path.join(web,'index.html'),'utf8');
html=html.replace('<link rel="stylesheet" href="styles.css">','<style>'+fs.readFileSync(path.join(web,'styles.css'),'utf8')+'</style>');
html=html.replace(/<script src="[^"]+" defer><\/script>/g,'');
const js=['data.js','activities.js','training-data.js','grammar-training.js','grammar-recognition.js','mixed-training.js','training-language.js','training-ui.js','core.js','app.js'].map(f=>fs.readFileSync(path.join(web,f),'utf8')).join('\n').replace(/<\/script/gi,'<\\/script');
html=html.replace('</body>','<script>'+js+'</script></body>');
const file=path.join(out,'Preparacion-JC-Work06.html');fs.writeFileSync(file,html);console.log(file);
