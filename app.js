const lessons = [
 {id:"binary",unit:0,title:"Binary basics",subtitle:"Bits, bytes and number systems",icon:"🔢",time:"5 min",concepts:[
  ["Binary and denary","Computers represent data using binary: a base-2 number system with only 0 and 1. Denary is base 10. Each binary position represents a power of 2, from right to left: 1, 2, 4, 8, 16, 32, 64, 128."],
  ["Registers","A register is a small, ultra-high-speed area of memory within the CPU. It temporarily stores data during the fetch–decode–execute cycle."],
  ["Hexadecimal","Hexadecimal is base 16 and uses 0–9 and A–F. It gives a shorter, more readable representation of binary, for example when displaying error messages. It does not make the data take less memory or execute faster."],
  ["Two's complement","In an 8-bit system, represent a negative value by writing the positive binary value, inverting every bit, then adding 1. Example: −11 → 00001011 → 11110100 → 11110101."]
 ],tip:"Use place values to convert binary to denary. For 8-bit two's complement, keep all eight bits."},
 {id:"binary-ops",unit:0,title:"Binary operations",subtitle:"Shifts, overflow and signed values",icon:"↔️",time:"5 min",concepts:[
  ["Logical right shift","Bits move to the right. Bits shifted off the right-hand end are lost, and zeros are added at the left-hand end. A right shift by one place is equivalent to integer division by 2 for an unsigned value."],
  ["Overflow error","An overflow error occurs when a value is too large to fit in the available register capacity. The result cannot be represented using the allocated number of bits."],
  ["Fixed bit length","When a question specifies 8 bits, write all eight positions, including leading zeros for positive values."]
 ],tip:"After a shift, count the bits and check which bits have been discarded."},
 {id:"text",unit:1,title:"Text and character sets",subtitle:"ASCII, Unicode and file types",icon:"🔤",time:"4 min",concepts:[
  ["ASCII","ASCII stands for American Standard Code for Information Interchange. In the supplied notes, the character A is 01000001 in binary, equal to 65 in denary; B is 66."],
  ["Unicode","ASCII represents English characters, while Unicode can represent characters from languages around the world, including emojis."],
  ["Text storage","Using the 8-bit character assumption in the notes, multiply the number of characters by 8. Spaces count as characters. “I love computer” has 15 characters, so it needs 120 bits."],
  ["File types","The notes identify .jpg, .png and .gif as image formats, and .mp3 as a sound file."]
 ],tip:"Count spaces as well as letters when calculating text storage."},
 {id:"images",unit:1,title:"Images and colour",subtitle:"Resolution, pixels and colour depth",icon:"🖼️",time:"5 min",concepts:[
  ["Resolution","Image resolution describes the number of pixels in an image, normally written as width × height. For example, 1080 × 720 describes resolution."],
  ["Colour depth","Colour depth is the number of bits used to store the colour of each pixel. More bits per pixel allow more possible colours."],
  ["Number of colours","The number of bits needed to represent a number of colours is log₂(number of colours). For 512 colours: log₂(512) = 9 bits. For 256 colours: 8 bits."],
  ["Image file size","For an uncompressed image: width × height × colour depth gives the total number of bits. Convert bits to bytes by dividing by 8, then convert to KiB or MiB as required."]
 ],tip:"Resolution is pixel dimensions; colour depth is bits per pixel. They are not the same thing."},
 {id:"sound",unit:1,title:"Digital sound",subtitle:"Sampling and sample resolution",icon:"🎵",time:"5 min",concepts:[
  ["Analogue sound","Data from the physical world is continuously variable and changes in a smooth curve."],
  ["Sampling","A computer measures an analogue wave at regular intervals. Digital sound is made up of discrete signals, rather than one continuously changing signal."],
  ["Sample resolution","The number of bits used to record each measurement during sampling is called sample resolution."],
  ["Accuracy and file size","Using more bits to measure the analogue wave makes the digital representation more accurate, but increases the file size. A higher sample rate also means more samples per second."]
 ],tip:"Sample rate = samples per second. Sample resolution = bits per sample."},
 {id:"compression",unit:2,title:"Compression essentials",subtitle:"Why files are compressed",icon:"📦",time:"4 min",concepts:[
  ["Why compress files?","Compression reduces the logical size of a file. It can save storage space, increase data transmission speed and use less bandwidth. It can also improve processing time."],
  ["Lossy compression","Lossy compression permanently removes some data from the original file. This decreases file size, but can also reduce quality."],
  ["Lossless compression","Lossless compression stores data in a different way without losing information. After decompression, the result is exactly the same as the original file."],
  ["Run Length Encoding","Run Length Encoding (RLE) is a lossless technique. It records a repeated value once, together with the number of times it repeats."]
 ],tip:"Lossy = some original data is removed. Lossless = the original data can be reconstructed exactly."},
 {id:"storage-units",unit:2,title:"Storage units",subtitle:"Bits, bytes, KiB, MiB and GiB",icon:"💾",time:"4 min",concepts:[
  ["Bits and bytes","A bit is a binary digit. One byte contains 8 bits."],
  ["Binary storage units","For binary units: 1 KiB = 1024 bytes, 1 MiB = 1024 KiB, and 1 GiB = 1024 MiB."],
  ["Capacity questions","To estimate how many files fit on a drive, convert the available capacity and the file size to the same unit, then divide capacity by file size."],
  ["Example","16 GiB = 16 × 1024 × 1024 KiB. If each photograph is 128 KiB, the drive can hold (16 × 1024 × 1024) ÷ 128 = 131,072 photographs."]
 ],tip:"Do not mix KB/MB with KiB/MiB. The notes use powers of 1024 for binary units."},
 {id:"sound-size",unit:2,title:"Sound file calculations",subtitle:"Sample rate × duration × resolution",icon:"🎧",time:"6 min",concepts:[
  ["Uncompressed sound formula","File size in bits = duration in seconds × sample rate in Hz × sample resolution in bits."],
  ["Convert to KiB","First divide the result by 8 to get bytes. Then divide by 1024 to get KiB."],
  ["Worked example","3 minutes at 44.1 kHz and 8-bit sample resolution: (180 × 44,100 × 8) ÷ 8 ÷ 1024 = 7,751.95 KiB (approximately)."],
  ["Another example","50 seconds at 44.1 kHz and 8-bit sample resolution gives approximately 2,153 KiB, as shown in the supplied notes."]
 ],tip:"Convert minutes to seconds and kHz to Hz before substituting into the formula."},
 {id:"image-size",unit:2,title:"Image file calculations",subtitle:"Pixels × colour depth",icon:"🌈",time:"5 min",concepts:[
  ["Uncompressed image formula","File size in bits = width × height × colour depth (bits per pixel)."],
  ["Convert the units","Divide bits by 8 to get bytes. Divide by 1024² to convert bytes to MiB."],
  ["Worked example","A 2048 × 720 image with 256 colour values uses 8 bits per pixel, because log₂(256) = 8. The supplied notes give a file size of approximately 1.41 MiB."]
 ],tip:"If a question gives the number of colour values, calculate the required colour depth first."},
 {id:"compare",unit:2,title:"Choose the right compression",subtitle:"Lossy vs lossless in context",icon:"⚖️",time:"4 min",concepts:[
  ["When lossy is useful","Lossy compression is often used when smaller files matter and some quality loss is acceptable. The notes use a movie file as an example of a file that may be compressed with a lossy technique."],
  ["When lossless is useful","Lossless compression is useful when the original data must be preserved exactly."],
  ["Compare file sizes","A one-hour movie file will most likely be larger than 10 pages of text, 10 pages of programming code, or one hour of music, according to the supplied multiple-choice example."]
 ],tip:"A good exam response explains the trade-off, not just the definition."}
];

const questions = {
 binary:[
  q("What is a register?",["A permanent storage device","A small, high-speed memory area within the CPU","A type of number system","A file compression algorithm"],1,"A register temporarily stores data in the CPU during the fetch–decode–execute cycle."),
  q("Which base does hexadecimal use?",["2","8","10","16"],3,"Hexadecimal is base 16 and uses 0–9 and A–F."),
  q("What is the 8-bit two's complement representation of −11?",["00001011","11110100","11110101","11110110"],2,"Invert 00001011 to get 11110100, then add 1: 11110101."),
  q("What is a benefit of hexadecimal over binary?",["It uses less memory","It executes programs faster","It is a shorter representation on screen","It transmits data faster"],2,"Hexadecimal is more compact and readable for humans; it does not reduce the underlying memory requirement.")
 ],
 "binary-ops":[
  q("In a logical right shift, what enters from the left?",["A one","A zero","The bit that left the right side","A random bit"],1,"A logical right shift inserts zeros at the left-hand end."),
  q("What happens to bits shifted off the right-hand end?",["They wrap around","They are stored in a register","They are lost","They become negative"],2,"The shifted-out bits are discarded."),
  q("What does an overflow error indicate?",["The value exceeds the available bit capacity","The computer has no storage","The CPU is idle","A file is compressed"],0,"Overflow occurs when a value cannot fit in the available register capacity.")
 ],
 text:[
  q("What does ASCII stand for?",["American Standard Code for Information Interchange","Advanced System Character Information Index","Automatic Standard Computer Input Interface","American System Code for Internet Information"],0,"ASCII stands for American Standard Code for Information Interchange."),
  q("Which character set can represent characters from languages around the world, including emojis?",["ASCII only","Unicode","Binary shift","Hexadecimal"],1,"Unicode can represent characters from many writing systems and emojis."),
  q("If each character uses 8 bits, how many bits are needed for 15 characters?",["15","64","120","128"],2,"15 × 8 = 120 bits. Spaces count as characters."),
  q("Which is a sound file type in the notes?",[".jpg",".png",".gif",".mp3"],3,"The notes identify .mp3 as an example of a sound file.")
 ],
 images:[
  q("What does 1080 × 720 describe?",["Colour depth","Resolution","Sample rate","File compression"],1,"Resolution is normally expressed as image width × height in pixels."),
  q("What is the number of bits per pixel called?",["Sample resolution","Bit rate","Colour depth","Sampling frequency"],2,"Colour depth is the number of bits used to store each pixel's colour."),
  q("How many bits are needed to represent 512 colours?",["8","9","10","512"],1,"log₂(512) = 9 bits."),
  q("What happens when image resolution and colour depth increase?",["Less data is stored","More data has to be stored","The image becomes a sound file","Compression becomes impossible"],1,"More pixels and more bits per pixel increase the amount of image data.")
 ],
 sound:[
  q("How is data from the physical world described in the notes?",["Discrete","Continuously variable","Always binary","Lossless"],1,"Analogue data is continuously variable and changes in a smooth curve."),
  q("What is sample resolution?",["Samples per second","Bits used for each measurement","Number of channels","Duration of a sound"],1,"Sample resolution is the number of bits used to record each measurement."),
  q("Digital sounds are made up of...",["Continuous signals","Discrete signals","Hexadecimal characters","Pixels"],1,"Digital sound is represented by a sequence of discrete signals."),
  q("What is the effect of using more bits per sample?",["Less accuracy and smaller file size","More accuracy and bigger file size","No change","Lower sample rate"],1,"More bits per measurement allow greater accuracy but increase file size.")
 ],
 compression:[
  q("Which statement describes lossy compression?",["No data is ever removed","Some data is permanently removed","The original is always perfectly reconstructed","It only works on text"],1,"Lossy compression permanently removes some original data."),
  q("Which technique stores repeated runs as a value and a repetition count?",["ASCII","RLE","Unicode","Two's complement"],1,"Run Length Encoding (RLE) records a value and how many times it repeats."),
  q("What is true of lossless compression?",["It always reduces quality","It discards unnecessary sounds","The original can be reconstructed exactly","It permanently removes data"],2,"Lossless compression changes how data is stored without losing it."),
  q("Which is NOT an aim of compression?",["Save storage space","Use less bandwidth","Increase transmission speed","Reduce file quality"],3,"Reducing quality can be a side effect of lossy compression, not an aim of compression.")
 ],
 "storage-units":[
  q("How many bits are in one byte?",["2","4","8","16"],2,"One byte contains 8 bits."),
  q("How many bytes are in one KiB?",["1000","1024","2048","8"],1,"A kibibyte (KiB) is 1024 bytes."),
  q("A 16 GiB drive stores files of 128 KiB. Approximately how many fit?",["131,072","16,384","1,024","2,048"],0,"(16 × 1024 × 1024) ÷ 128 = 131,072 files.")
 ],
 "sound-size":[
  q("Which formula calculates uncompressed sound size in bits?",["duration × sample rate × sample resolution","width × height × colour depth","duration ÷ sample rate","sample rate × colour depth"],0,"Sound size in bits = duration (s) × sample rate (Hz) × sample resolution (bits)."),
  q("What should you do to convert minutes to seconds?",["Divide by 60","Multiply by 60","Multiply by 1000","Divide by 8"],1,"Multiply the duration in minutes by 60."),
  q("A 50-second sound file at 44.1 kHz and 8-bit resolution is approximately...",["215 KiB","2,153 KiB","7,752 KiB","44,100 KiB"],1,"50 × 44,100 × 8 ÷ 8 ÷ 1024 ≈ 2,153 KiB.")
 ],
 "image-size":[
  q("Which formula calculates an uncompressed image's size in bits?",["duration × sample rate × resolution","width × height × colour depth","width + height + colour depth","pixels ÷ 8"],1,"Multiply width by height by bits per pixel."),
  q("How many bits per pixel are needed for 256 colours?",["4","6","8","16"],2,"log₂(256) = 8."),
  q("After calculating image size in bits, what is the first conversion to bytes?",["Multiply by 8","Divide by 8","Divide by 1024","Multiply by 1024"],1,"There are 8 bits in one byte, so divide the number of bits by 8.")
 ],
 compare:[
  q("Which statement best describes lossy compression?",["The decompressed file is exactly the original","It removes some data to reduce size, with possible quality loss","It only changes the file name","It increases resolution"],1,"Lossy compression trades some original information and potentially quality for a smaller file."),
  q("Which is a lossless technique from the notes?",["RLE","JPEG quality reduction","Removing audio details","Reducing colour depth"],0,"Run Length Encoding (RLE) is a lossless compression technique."),
  q("Which file is most likely to have the largest size?",["10 pages of text","10 pages of code","1 hour of music","1 hour of a movie"],3,"The supplied example identifies a one-hour movie file as the largest option.")
 ]
};
function q(question,options,answer,explanation){return {question,options,answer,explanation};}
const units=[
 {name:"Number systems",desc:"Understand how computers store and manipulate numbers.",icon:"🔢",color:"#e6f4e9",ids:["binary","binary-ops"]},
 {name:"Text, sound and images",desc:"Explore how different kinds of information become binary.",icon:"🎨",color:"#fff1dc",ids:["text","images","sound"]},
 {name:"Data storage and compression",desc:"Calculate file sizes and compare compression methods.",icon:"📦",color:"#eee9ff",ids:["compression","storage-units","sound-size","image-size","compare"]}
];
const glossary=[
 ["Analogue data","Data that varies continuously, like a smooth physical signal."],["ASCII","American Standard Code for Information Interchange; a character encoding standard."],["Binary","A base-2 number system using only 0 and 1."],["Bit","A single binary digit: 0 or 1."],["Byte","A group of 8 bits."],["Colour depth","The number of bits used to store the colour of each pixel."],["Denary","The base-10 number system, using digits 0–9."],["Discrete signal","A signal represented by separate, distinct values."],["Hexadecimal","A base-16 number system using 0–9 and A–F."],["Lossless compression","Compression that allows the original data to be reconstructed exactly."],["Lossy compression","Compression that permanently removes some original data."],["Logical right shift","A bit operation that moves bits right, discards bits on the right and inserts zeros on the left."],["Overflow error","An error that occurs when a value is too large for the available bit capacity."],["Resolution","The number of pixels in an image, commonly shown as width × height."],["RLE","Run Length Encoding: a lossless method that stores repeated values with a repetition count."],["Sample rate","The number of samples taken per second from an analogue signal."],["Sample resolution","The number of bits used to record each sample."],["Unicode","A character encoding standard that supports characters from many languages and symbol sets."],["Register","A small, high-speed memory area within the CPU used temporarily during processing."]
];

const state=loadState();
let currentLesson=null, quizState=null, practiceMode=false;
function loadState(){try{return JSON.parse(localStorage.getItem("bytepath-state"))||{completed:[],xp:0,streak:0,lastDay:"",answered:0,correct:0,hearts:5};}catch{return {completed:[],xp:0,streak:0,lastDay:"",answered:0,correct:0,hearts:5};}}
function save(){localStorage.setItem("bytepath-state",JSON.stringify(state));renderStats();}
function today(){return new Date().toISOString().slice(0,10);}
function recordActivity(){const t=today();if(state.lastDay!==t){const y=new Date(Date.now()-86400000).toISOString().slice(0,10);state.streak=state.lastDay===y?state.streak+1:1;state.lastDay=t;}}
function renderStats(){
 const done=state.completed.length, percent=Math.round(done/lessons.length*100);
 document.getElementById("xpCount").textContent=state.xp;document.getElementById("streakCount").textContent=state.streak;document.getElementById("heartCount").textContent=state.hearts;
 document.getElementById("coursePercent").textContent=percent+"%";document.getElementById("courseBar").style.width=percent+"%";document.getElementById("lessonCount").textContent=`${done} of ${lessons.length} lessons completed`;
 document.getElementById("dailyProgress").textContent=`${Math.min(done,3)} / 3 lessons`;document.getElementById("dailyBar").style.width=Math.min(done/3*100,100)+"%";
 document.getElementById("progressXP").textContent=state.xp;document.getElementById("progressStreak").textContent=state.streak;document.getElementById("progressLessons").textContent=`${done}/${lessons.length}`;
 document.getElementById("progressAccuracy").textContent=state.answered?Math.round(state.correct/state.answered*100)+"%":"—";
 renderMastery();
}
function renderMastery(){const el=document.getElementById("masteryRows");if(!el)return;el.innerHTML=units.map(u=>{const d=u.ids.filter(id=>state.completed.includes(id)).length;const p=Math.round(d/u.ids.length*100);return `<div class="mastery-row"><span>${u.name}</span><div class="mastery-track"><span style="width:${p}%"></span></div><small>${p}%</small></div>`}).join("");}
function renderPath(){
 const path=document.getElementById("learningPath");let html="";
 units.forEach((u,ui)=>{html+=`<div class="unit-heading"><div class="unit-icon" style="background:${u.color}">${u.icon}</div><div><h3>${u.name}</h3><p>${u.desc}</p></div><div class="unit-line"></div></div>`;
 u.ids.forEach((id,i)=>{const l=lessons.find(x=>x.id===id),done=state.completed.includes(id);const globalIndex=lessons.findIndex(x=>x.id===id);const unlocked=globalIndex===0||state.completed.includes(lessons[globalIndex-1].id);const status=done?"done":unlocked?"current":"locked";
 html+=`<div class="lesson-row ${unlocked?"":"is-locked"}"><button class="lesson-node ${status}" data-lesson="${id}" ${unlocked?"":"disabled"} aria-label="${l.title}">${done?"✓":unlocked?l.icon:"🔒"}${done?'<span class="check">✓</span>':""}</button><div class="lesson-meta"><strong>${l.title}</strong><small>${l.subtitle} · ${l.time}</small></div><span class="lesson-action">${done?"COMPLETED":unlocked?"START LESSON":"LOCKED"}</span></div>`;
 });});
 path.innerHTML=html;
 path.querySelectorAll("[data-lesson]").forEach(btn=>btn.addEventListener("click",()=>openLesson(btn.dataset.lesson)));
}
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active-view"));const target=document.getElementById(name+"View");if(target)target.classList.add("active-view");document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));if(name==="progress")renderStats();if(name==="glossary")renderGlossary();}
function openLesson(id){
 currentLesson=lessons.find(l=>l.id===id);practiceMode=false;showView("lesson");
 const unit=units[currentLesson.unit];
 const content=document.getElementById("lessonContent");
 const qs=questions[id]||[];
 content.innerHTML=`<div class="lesson-header"><div><div class="eyebrow">${unit.name.toUpperCase()} · ${currentLesson.time.toUpperCase()}</div><h1>${currentLesson.title}</h1><p>${currentLesson.subtitle}</p></div><div class="lesson-bubble">${currentLesson.icon}</div></div>
 <div class="lesson-layout"><div><article class="lesson-main"><h2>Today's lesson</h2>${currentLesson.concepts.map(([t,p])=>`<div class="concept"><h3>${t}</h3><p>${p}</p></div>`).join("")}<div class="formula-box">${formulaFor(id)}</div></article><div id="lessonQuizMount"></div></div>
 <aside class="lesson-aside"><h3>💡 Remember this</h3><p>${currentLesson.tip}</p><div class="tip"><b>IB exam tip</b><br>Show your working in calculation questions. Include units and make conversions clear.</div><button class="start-quiz-btn" id="beginLessonQuiz">Check your knowledge →</button></aside></div>`;
 document.getElementById("beginLessonQuiz").addEventListener("click",()=>startQuiz(qs,"lessonQuizMount",id));
}
function formulaFor(id){
 const formulas={"binary":"Binary place values: 128 · 64 · 32 · 16 · 8 · 4 · 2 · 1<br>Two's complement: invert bits → add 1","binary-ops":"Logical right shift: move right → discard rightmost bit(s) → insert 0(s) on the left","text":"Text storage (8-bit assumption): number of characters × 8 = bits","images":"Image size (bits) = width × height × colour depth<br>Colour depth = log₂(number of colours)","sound":"Sample rate = samples per second<br>Sample resolution = bits per sample","compression":"RLE: repeated value + number of repetitions<br>Lossy: data removed · Lossless: exact reconstruction","storage-units":"1 byte = 8 bits<br>1 KiB = 1024 bytes · 1 MiB = 1024 KiB · 1 GiB = 1024 MiB","sound-size":"Sound size (bits) = duration (s) × sample rate (Hz) × sample resolution (bits)<br>KiB = bits ÷ 8 ÷ 1024","image-size":"Image size (bits) = width × height × colour depth<br>MiB = bits ÷ 8 ÷ 1024²","compare":"Lossy → smaller file, possible quality loss<br>Lossless → original data restored exactly"};return formulas[id]||"Review the key terms and test your understanding.";
}
function startQuiz(qs,mountId,lessonId){
 if(!qs.length){toast("No questions available for this lesson yet.");return;}
 quizState={qs:[...qs].sort(()=>Math.random()-.5),index:0,score:0,selected:null,locked:false,lessonId,mountId};renderQuestion();
}
function renderQuestion(){
 const s=quizState,q=s.qs[s.index],mount=document.getElementById(s.mountId);if(!mount)return;
 mount.innerHTML=`<div class="quiz-card"><div class="quiz-top"><span>QUESTION ${s.index+1} OF ${s.qs.length}</span><span>⭐ ${s.score} correct</span></div><div class="quiz-question">${q.question}</div><div class="answer-list">${q.options.map((o,i)=>`<button class="answer-option" data-answer="${i}">${String.fromCharCode(65+i)}. &nbsp;${o}</button>`).join("")}</div><div id="quizFeedback" class="quiz-feedback"></div><div class="quiz-controls"><small>Select one answer</small><button class="next-btn" id="nextQuestion" disabled>${s.index===s.qs.length-1?"Finish":"Continue"} →</button></div></div>`;
 mount.querySelectorAll("[data-answer]").forEach(b=>b.addEventListener("click",()=>selectAnswer(Number(b.dataset.answer))));
 document.getElementById("nextQuestion").addEventListener("click",nextQuestion);
}
function selectAnswer(i){
 const s=quizState;if(s.locked)return;s.locked=true;s.selected=i;const q=s.qs[s.index],correct=i===q.answer;
 state.answered++;if(correct){s.score++;state.correct++;}else{state.hearts=Math.max(0,state.hearts-1);}
 recordActivity();save();
 document.querySelectorAll(".answer-option").forEach((b,j)=>{b.disabled=true;if(j===q.answer)b.classList.add("correct");if(j===i&&!correct)b.classList.add("wrong");});
 const fb=document.getElementById("quizFeedback");fb.className="quiz-feedback show "+(correct?"good":"bad");fb.innerHTML=`<b>${correct?"Correct! Nice work.":"Not quite. Keep learning!"}</b><br>${q.explanation}`;
 document.getElementById("nextQuestion").disabled=false;
}
function nextQuestion(){
 const s=quizState;if(s.index<s.qs.length-1){s.index++;s.locked=false;renderQuestion();return;}
 const earned=s.score*5+10;state.xp+=earned;
 if(s.lessonId&&!state.completed.includes(s.lessonId)){state.completed.push(s.lessonId);state.xp+=10;}
 save();
 const mount=document.getElementById(s.mountId);
 mount.innerHTML=`<div class="quiz-card" style="text-align:center;padding:30px"><div style="font-size:42px">🎉</div><h2 style="font:900 23px Nunito;margin:10px 0">Quest complete!</h2><p style="font-size:12px;color:#748178">You got ${s.score} out of ${s.qs.length} correct.</p><div class="formula-box">+${earned+(s.lessonId?10:0)} XP earned</div><button class="start-quiz-btn" id="finishQuiz">Back to learning path</button></div>`;
 document.getElementById("finishQuiz").addEventListener("click",()=>{renderPath();showView("learn");});
 toast(`Quest complete! +${earned+(s.lessonId?10:0)} XP`);
}
function renderGlossary(filter=""){const list=document.getElementById("glossaryList");const items=glossary.filter(([t,d])=>(t+" "+d).toLowerCase().includes(filter.toLowerCase()));list.innerHTML=items.map(([t,d])=>`<article class="glossary-item"><strong>${t}</strong><p>${d}</p></article>`).join("")||"<p>No matching terms found.</p>";}
function startPractice(){
 practiceMode=true;const all=Object.values(questions).flat();const shuffled=[...all].sort(()=>Math.random()-.5).slice(0,10);quizState={qs:shuffled,index:0,score:0,selected:null,locked:false,lessonId:null,mountId:"practiceQuiz"};renderQuestion();
}
function toast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.getElementById("backToPath").addEventListener("click",()=>{renderPath();showView("learn");});
document.getElementById("startPractice").addEventListener("click",startPractice);
document.getElementById("glossarySearch").addEventListener("input",e=>renderGlossary(e.target.value));
document.getElementById("resetProgress").addEventListener("click",()=>{if(confirm("Reset all XP, streaks and completed lessons? This cannot be undone.")){localStorage.removeItem("bytepath-state");location.reload();}});
renderPath();renderStats();renderGlossary();
