function setVH(){document.documentElement.style.setProperty('--vh',window.innerHeight*.01+'px');}
setVH();
window.addEventListener('resize',setVH);
window.addEventListener('orientationchange',()=>setTimeout(setVH,100));

function toggleTheme(){
  const isLight=document.documentElement.classList.toggle('light');
  localStorage.setItem('mmcoe_theme', isLight ? 'light' : 'dark');
  showToast(isLight ? '☀️ Light mode on' : '🌙 Dark mode on');
}

(function(){
  const saved = localStorage.getItem('mmcoe_theme');
  if(saved === 'light') document.documentElement.classList.add('light');
})();

const KB = {
about:`<div class="rs"><span class="rt">🏛️About MMCOE</span><ul class="rl">
<li><span class="hl">Full Name:</span> Marathwada Mitra Mandal's College of Engineering (MMCOE)</li>
<li><span class="hl">Location:</span> Sr.No. 18, Plot No. 5/3, CTS No.205, Vadar Vasti Rd, behind Vandevi Temple, Karvenagar, Pune, Maharashtra - 411 052</li>
<li><span class="hl">Established:</span> 2006</li>
<li><span class="hl">Type:</span> Private, Autonomous Engineering College</li>
<li><span class="hl">Affiliation:</span> Savitribai Phule Pune University (SPPU)</li>
<li><span class="hl">Approved by:</span> AICTE (All India Council for Technical Education)</li>
<li><span class="hl">NAAC Grade:</span> A++ (Highest Grade in India)</li>
<li><span class="hl">Institute Code:</span> 06156</li>
<li><span class="hl">Website:</span> www.mmcoe.edu.in</li>
</ul></div>
<div class="note">📌MMCOE is one of the top-ranked autonomous engineering colleges in Pune with NAAC A++ accreditation.</div>`,

courses:`<div class="rs"><span class="rt">📚Undergraduate Programs (B.Tech - 4 Years)</span><ul class="rl">
<li>💻Computer Engineering (CE)</li>
<li>🖥️Information Technology (IT)</li>
<li>🤖Artificial Intelligence &amp; Data Science (AI&amp;DS)</li>
<li>📡Electronics &amp; Telecommunication Engineering (E&amp;TC)</li>
<li>⚡Electrical Engineering (EE)</li>
<li>⚙️Mechanical Engineering (ME)</li>
</ul></div>
<div class="note">📌Total 6 UG branches. Admissions via MHT-CET / JEE Main through CAP rounds.</div>`,

fees:`<div class="rs"><span class="rt">💰B.Tech Fee Structure for AY 2026-27</span>
<table class="rtb"><tr><th>Fee Component</th><th>Amount</th></tr>
<tr><td>Tuition Fee (First Years Tution Fees for OBC)</td><td>Rs. 58,913</td></tr>
<tr><td>Development Fee</td><td>Rs. 17,674</td></tr>
<tr><td>Caution Deposit</td><td>Rs. 10,000</td></tr>
<tr><td><strong>Total (First Years) (Excluding Exam Fees)</strong></td><td><strong>Rs. 86,587</strong></td></tr>
</table></div>
<div class="rs"><span class="rt">Category-wise Fee Concessions (Excluding Exam Fees)</span>
<table class="rtb"><tr><th>Category</th><th>Benefit</th></tr>
<tr><td>Open Category</td><td>Full fees (~Rs. 1,17,826)</td></tr>
<tr><td>OBC / EWS</td><td>~50% tuition concession (Govt)</td></tr>
<tr><td>SC / ST</td><td>Near-free; scholarship covers most fees</td></tr>
<tr><td>TFWS Scheme</td><td>Tuition = Rs. 0 (only other fees to be paid)</td></tr>
<tr><td>J&K Quota</td><td>Total Rs. 34,000</td></tr>
</table></div>
<li>Hostel fees 1.07 L including mess (2025-26): ~Rs. 1.07 L/year</li>
<div class="note">⚠️Fees change yearly per AFRC Maharashtra. Verify current fees at MMCOE: <strong>020-25479811</strong></div>`,

admission:`<div class="rs"><span class="rt">📋Admission Process for B.Tech</span><ul class="rl">
<li><span class="hl">Entrance:</span> MHT-CET or JEE Main score</li>
<li><span class="hl">Process:</span> CAP (Centralized Admission Process) by State CET Cell</li>
<li><span class="hl">Register at:</span> cetcell.mahacet.org</li>
<li><span class="hl">Lateral Entry:</span> Direct 2nd Year for Diploma holders (DSY)</li>
<li><span class="hl">Other Quota:</span> NRI / Management quota seats available</li>
</ul></div>
<div class="rs"><span class="rt">✅Eligibility</span><ul class="rl">
<li>10+2 with Physics, Chemistry, Mathematics</li>
<li>Minimum <span class="hl">45%</span> aggregate - General category</li>
<li>Minimum <span class="hl">40%</span> aggregate - Reserved category</li>
<li>Valid MHT-CET / JEE Main score required</li>
</ul></div>
<div class="rs"><span class="rt">📅Admission Timeline (Approximate)</span><ul class="rl">
<li>MHT-CET Exam: April - May</li>
<li>CAP Round 1: July</li>
<li>CAP Round 2: August</li>
<li>CAP Round 3: August</li>
<li>CAP Round 4: September</li>
<li>Academic Year Begins: September</li>
</ul></div>
<div class="note">📞Helpline: <strong>020-25479811</strong> | Register: <strong>cetcell.mahacet.org</strong></div>`,

cutoff:`<div class="rs"><span class="rt">📊MHT-CET Opening Percentiles (2025-26) Till Cap-IV</span>
<table class="rtb"><tr><th>Branch</th><th>Opening Percentile</th></tr>
<tr><td>Computer Engineering</td><td>98.8391145 %ile</td></tr>
<tr><td>Information Technology</td><td>95.5031609 %ile</td></tr>
<tr><td>AI &amp; Data Science</td><td>96.2272727 %ile</td></tr>
<tr><td>E&amp;TC Engineering</td><td>95.6211259 %ile</td></tr>
<tr><td>Electrical Engineering</td><td>93.2766093 %ile</td></tr>
<tr><td>Mechanical Engineering</td><td>95.0790084 %ile</td></tr>
</table></div>
<div class="rs"><span class="rt">OBC - Branch-wise Cutoff Percentile (2025-26) Till Cap-IV</span>
<table class="rtb"><tr><th>Branch</th><th>Cutoff Percentile (2025-26) Till Cap-IV</th></tr>
<tr><td>Computer Science (GOBCS)</td><td>95.2309569 %ile</td></tr>
<tr><td>Computer Science (LOBCS)</td><td>95.6414531 %ile</td></tr>
<tr><td>Information Technology (GOBCS)</td><td>94.3452901 %ile</td></tr>
<tr><td>Information Technology (LOBCS)</td><td>94.6848871 %ile</td></tr>
<tr><td>AI &amp; Data Science (GOBCS)</td><td>94.0956622 %ile</td></tr>
<tr><td>AI &amp; Data Science (LOBCS)</td><td>94.1814562 %ile</td></tr>
<tr><td>E&amp;TC Engineering (GOBCS)</td><td>93.1055879 %ile</td></tr>
<tr><td>E&amp;TC Engineering (LOBCS)</td><td>93.3751306 %ile</td></tr>
<tr><td>Mechanical Engineering (GOBCS)</td><td>86.3462208 %ile</td></tr>
<tr><td>Mechanical Engineering (LOBCS)</td><td>83.5597353 %ile</td></tr>
<tr><td>Electrical Engineering (GOBCS)</td><td>87.9289094 %ile</td></tr>
<tr><td>Electrical Engineering (LOBCS)</td><td>87.6831328 %ile</td></tr>
</table></div>
<div class="rs"><span class="rt">JEE Main - Branch-wise Cutoff (2025-26) Till Cap-IV</span>
<table class="rtb"><tr><th>Branch</th><th>Percentile</th></tr>
<tr><td>Computer Engineering</td><td>89.7539744 %ile</td></tr>
<tr><td>Information Technology</td><td>88.5388211 %ile</td></tr>
<tr><td>Electrical Engineering</td><td>80.4599245 %ile</td></tr>
<tr><td>Electronics and Telecommunication Engineering</td><td>85.9657706 %ile</td></tr>
<tr><td>Mechanical Engineering</td><td>75.7151406 %ile</td></tr>
<tr><td>Artificial Intelligence and Data Science</td><td>88.0620921 %ile</td></tr>
</table></div>
<div class="note">⚠️Cutoffs change every year. Always check official CAP round data at cetcell.mahacet.org for exact figures.</div>`,

placements:`<div class="rs"><span class="rt">Placement Statistics</span><ul class="rl">
<li>Highest Package (India): <span class="hl">Rs.10 LPA</span></li>
<li>Highest Package (International): <span class="hl">Rs.25 LPA</span></li>
<li>Average Package: <span class="hl">Rs.3.5 - Rs.4.5 LPA</span></li>
<li>200+ companies visit campus every year</li>
<li>Pre-placement training, mock interviews &amp; soft skills development</li>
</ul></div>
<div class="rs"><span class="rt">Top Recruiters</span>
<div><span class="bdg">TCS</span><span class="bdg">Infosys</span><span class="bdg">Wipro</span><span class="bdg">Cognizant</span><span class="bdg">Capgemini</span><span class="bdg">Tech Mahindra</span><span class="bdg">Persistent Systems</span><span class="bdg">Accenture</span><span class="bdg">L&amp;T Technology</span><span class="bdg">Cummins</span><span class="bdg">Bharat Forge</span><span class="bdg">Mercedes-Benz R&amp;D</span></div>
</div>
<div class="note">MMCOE's active Placement Cell ensures industry exposure, training and strong hiring outcomes.</div>`,

scholarships:`<div class="rs"><span class="rt">Scholarships Available at MMCOE</span><ul class="rl">
<li><span class="hl">Govt. of Maharashtra:</span> For SC / ST / OBC students</li>
<li><span class="hl">EBC Scholarship:</span> Economically Backward Class students</li>
<li><span class="hl">TFWS:</span> Tuition Fee Waiver - full tuition waived</li>
<li><span class="hl">Rajarshi Chhatrapati Shahu Maharaj Scholarship</span></li>
<li><span class="hl">Merit Scholarships:</span> For top academic performers</li>
<li><span class="hl">Minority Scholarships:</span> For eligible minority students</li>
</ul></div>
<div class="note">Apply for government scholarships at: <strong>mahadbt.maharashtra.gov.in</strong><br>For MMCOE-specific scholarships: <strong>020-25479811</strong></div>`,

tfws:`<div class="rs"><span class="rt">TFWS - Tuition Fee Waiver Scheme</span><ul class="rl">
<li><span class="hl">What is it?</span> Government scheme that completely waives tuition fees</li>
<li><span class="hl">Tuition Fee:</span> Rs.0 (fully waived under this scheme)</li>
<li><span class="hl">Other Fees:</span> Development fee, exam fee etc. still payable</li>
<li><span class="hl">Eligibility:</span> Based on family income &amp; merit - verified during CAP</li>
<li><span class="hl">Seats:</span> Limited TFWS quota seats per branch</li>
</ul></div>
<div class="note">TFWS seats allocated during CAP process. Apply at <strong>cetcell.mahacet.org</strong> and select TFWS preference during option form filling.</div>`,

facilities:`<div class="rs"><span class="rt">Infrastructure &amp; Facilities</span><ul class="rl">
<li>🖥️Smart classrooms with digital boards</li>
<li>🔬Advanced Labs: AI, Robotics, Electronics, Mechanical, Computer Labs</li>
<li>📚Central Library: 30,000+ books, e-journals (24/7 access)</li>
<li>🌐Wi-Fi enabled campus</li>
<li>🎭Auditorium: 800+ seating capacity</li>
<li>🍽️Canteen and food court</li>
<li>🏋️Sports complex: cricket, basketball, volleyball</li>
<li>💡Innovation &amp; Entrepreneurship Cell</li>
<li>🪖NSS and NCC units</li>
<li>💼Dedicated Training &amp; Placement Cell</li>
</ul></div>
<div class="rs"><span class="rt">Hostel</span><ul class="rl">
<li>Girls Hostel: On campus</li>
<li>Boys Hostel: One on Campus &amp; Second Nearby Campus</li>
<li>Fee: ~Rs.1.07 Lakh/year</li>
</ul></div>`,

hostel:`<div class="rs"><span class="rt">Hostel Facilities at MMCOE</span><ul class="rl">
<li><span class="hl">Girls Hostel:</span> Available on campus</li>
<li><span class="hl">Boys Hostel:</span> One Available on campus &amp; Second Nearby Campus</li>
<li><span class="hl">Annual Fee:</span> ~Rs.1.07 Lakh/year (approx.)</li>
<li><span class="hl">Total 4-year:</span> ~Rs.3.6 Lakh (approx.)</li>
<li>Mess / canteen facility included</li>
<li>24-hour security and Wi-Fi connectivity</li>
</ul></div>
<div class="note">For hostel allotment &amp; availability: <strong>020-25479811</strong> | Email: <strong>principal@mmcoe.edu.in</strong></div>`,

contact:`<div class="rs"><span class="rt">MMCOE Contact Information</span><ul class="rl">
<li><span class="hl">Address:</span> Sr.No. 18, Plot No. 5/3, CTS No.205, Vadar Vasti Rd, behind Vandevi Temple, Karvenagar, Pune, Maharashtra - 411 052</li>
<li><span class="hl">Phone:</span> 020-25479811 | 7720097780</li>
<li><span class="hl">Email:</span> principal@mmcoe.edu.in</li>
<li><span class="hl">Website:</span> www.mmcoe.edu.in</li>
<li><span class="hl">Institute Code:</span> 06156</li>
</ul></div>
<div class="rs"><span class="rt">Office Hours</span><ul class="rl">
<li>Monday - Saturday: 9:00 AM - 5:00 PM</li>
<li>Admission helpline active during CAP season (July - September)</li>
</ul></div>
<div class="note">For admissions: <strong>cetcell.mahacet.org</strong> | For scholarships: <strong>mahadbt.maharashtra.gov.in</strong></div>`,

naac:`<div class="rs"><span class="rt">Accreditation &amp; Recognition</span><ul class="rl">
<li><span class="hl">NAAC Grade: A++</span> - Highest possible grade in India</li>
<li>NBA Accredited programs</li>
<li>AICTE Approved</li>
<li>Autonomous Institute status</li>
<li>Affiliated to Savitribai Phule Pune University (SPPU)</li>
<li>Ranked among top engineering colleges in Pune</li>
</ul></div>
<div class="note">NAAC A++ reflects outstanding academic standards, research output, infrastructure quality, and student outcomes.</div>`,

documents:`<div class="rs"><span class="rt">Documents Required for MMCOE Admission</span><ul class="rl">
<li>SSC (10th) Marksheet &amp; Certificate</li>
<li>HSC (12th) Marksheet &amp; Certificate</li>
<li>School / College Leaving Certificate</li>
<li>Domicile Certificate (Maharashtra)</li>
<li>Caste Certificate (if applicable - SC/ST/OBC/NT)</li>
<li>MHT-CET or JEE Main Scorecard</li>
<li>Photo ID Proof (Aadhar, PAN, etc.)</li>
<li>Passport-size Photographs (6-8 copies)</li>
<li>Income Certificate (for fee concession / scholarship)</li>
<li>Non-Creamy Layer Certificate (OBC candidates)</li>
<li>Diploma Certificate (for Lateral Entry / DSY students)</li>
</ul></div>
<div class="note">Carry originals + 2 sets of photocopies. Verified at CAP rounds and during MMCOE admission.</div>`,

events:`<div class="rs"><span class="rt">Events &amp; Student Activities</span><ul class="rl">
<li><span class="hl">Project Exhibition :</span> UDAAN</li>
<li><span class="hl">Fest:</span> Ensemble</li>
<li><span class="hl">Clubs:</span></li>
<li>IT Tech Club</li><li>ACM</li><li>Google Developer Student Club (GDSC)</li>
<li>Robocon</li><li>MSOC</li>
<li>Antrix</li><li>EESA</li>
<li>IEEE Student Branch</li><li>Drona</li>
<li>NCC Unit</li><li>ITSA</li>
<li>Inter-college sports tournaments</li>
</ul></div>`,

help:`<div class="rs"><span class="rt">How can I help you?</span>
<p style="color:var(--text-sub);font-size:.88rem;margin-bottom:12px;line-height:1.6;">I have complete information about MMCOE. Click any topic or type your question:</p>
<div>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('about')">About MMCOE</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('courses')">Courses</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('fees')">Fees</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('admission')">Admission</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('cutoff')">Cutoff</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('placements')">Placements</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('scholarships')">Scholarships</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('tfws')">TFWS</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('facilities')">Facilities</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('hostel')">Hostel</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('contact')">Contact</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('documents')">Documents</span>
<span class="bdg" style="cursor:pointer;padding:5px 12px;" onclick="sendQuick('naac')">NAAC</span>
</div></div>
<div class="note">Try typing: "fees for SC category", "cutoff for CS", "hostel charges", "how to apply" etc.</div>`
};

const LABELS = {
  about:"Tell me about MMCOE college",courses:"What courses and branches are offered at MMCOE?",
  fees:"What is the fee structure at MMCOE?",admission:"How to apply for admission at MMCOE?",
  cutoff:"What are the cutoff marks for MMCOE?",placements:"Tell me about MMCOE placements",
  scholarships:"What scholarships are available at MMCOE?",tfws:"What is the TFWS Scheme at MMCOE?",
  facilities:"What facilities does MMCOE have?",hostel:"Tell me about MMCOE hostel",
  contact:"MMCOE contact information and address",naac:"What is MMCOE's NAAC grade?",
  documents:"Documents required for MMCOE admission",btech:"B.Tech programs at MMCOE",
  events:"Events and clubs at MMCOE",help:"Help - MMCOE topics"
};

function getResponse(input) {
  const q = input.toLowerCase().trim();
  if (KB[q]) return {label:LABELS[q]||q, html:KB[q]};
  const rules = [
    {t:'about', p:['about mmcoe','what is mmcoe','tell me about','overview','mmcoe college','established','founded','history']},
    {t:'courses', p:['course','branch','program','department','btech','b.tech','mtech','m.tech','computer eng','information tech','e&tc','electrical','mechanical','ai&ds','ai and data','artificial intel','what branch','which branch','cse','ece']},
    {t:'fees', p:['fee','fees','cost','tuition','charges','how much','price','payment','rupee','lakh','total amount','annual fee','semester fee']},
    {t:'admission', p:['admission','apply','how to get','eligibility','entrance','mht-cet','mhtcet','jee','cap round','lateral','process','how to join','enrol','when admission']},
    {t:'cutoff', p:['cutoff','cut off','percentile','rank','score required','merit','opening','closing','mht cet score']},
    {t:'placements', p:['placement','recruit','package','lpa','salary','job','company','campus','hiring','career','highest package','average package','recruiter']},
    {t:'scholarships', p:['scholarship','free','waiver','financial aid','mahadbt','ebc','obc','sc st','sc/st','reserved','concession','financial help']},
    {t:'tfws', p:['tfws','tuition fee waiver','fee waiver scheme','zero tuition']},
    {t:'facilities', p:['facilit','infrastructure','lab','library','sport','gym','canteen','auditorium','wifi','wi-fi','campus facility']},
    {t:'hostel', p:['hostel','accommo','stay','room','girls hostel','boys hostel','living','reside']},
    {t:'contact', p:['contact','address','phone','email','location','where is','karve','nagar','reach','helpline','number','map']},
    {t:'naac', p:['naac','accredit','rank','nba','grade','rating','autonomous','a++','a grade']},
    {t:'documents', p:['document','required','certificate','marksheet','leaving','domicile','caste','what to bring','papers']},
    {t:'btech', p:['btech','b.tech','computer engineering','information technology','electrical engineering','mechanical engineering']},
    {t:'events', p:['event','fest','technotsav','srishti','club','ieee','ncc','nss','robotics','coding club','extra']},
  ];
  for (const r of rules) {
    if (r.p.some(p => q.includes(p))) return {label:LABELS[r.t], html:KB[r.t]};
  }
  const greetings = ['hi','hello','hey','namaste','good morning','good evening','good afternoon','hii','helo','hai'];
  if (greetings.some(g => q === g || q.startsWith(g+' '))) {
    return {label:input, html:`<div class="rs"><span class="rt">Hello! Welcome to MMCOE ChatBot</span>
<p style="color:var(--text-sub);font-size:.9rem;line-height:1.7;">I'm your dedicated guide for <span class="hl">Marathwada Mitra Mandal's College of Engineering, Pune</span>. I can help with admissions, fees, branches, placements, scholarships, hostel and more!</p></div>${KB.help}`};
  }
  return {label:input, html:KB.help};
}

const DB = {
  getUsers(){try{return JSON.parse(localStorage.getItem('mmcoe_users')||'{}');}catch{return{};}},
  saveUsers(u){localStorage.setItem('mmcoe_users',JSON.stringify(u));},
  getHistory(){try{return JSON.parse(localStorage.getItem('mmcoe_history')||'[]');}catch{return[];}},
  saveHistory(h){localStorage.setItem('mmcoe_history',JSON.stringify(h));},
  getSession(){try{return JSON.parse(localStorage.getItem('mmcoe_session')||'null');}catch{return null;}},
  saveSession(s){localStorage.setItem('mmcoe_session',JSON.stringify(s));},
  clearSession(){localStorage.removeItem('mmcoe_session');}
};

const ADMIN_EMAIL = 'admin@mmcoe.edu.in';
const ADMIN_PASS  = 'mmcoe@admin2024';
let state = {user:null,isGuest:false,messages:[],guestMsgCount:0,sessionId:null};

function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach((b,i)=>b.classList.toggle('active',(i===0&&tab==='login')||(i===1&&tab==='register')));
  document.getElementById('login-form').style.display=tab==='login'?'block':'none';
  document.getElementById('register-form').style.display=tab==='register'?'block':'none';
  document.getElementById('auth-msg').innerHTML='';
}
function showAuthMsg(msg,type='error'){
  document.getElementById('auth-msg').innerHTML=`<div class="msg-box msg-${type}">${msg}</div>`;
}
function handleLogin(){
  const email=document.getElementById('login-email').value.trim();
  const pass=document.getElementById('login-pass').value;
  if(!email||!pass)return showAuthMsg('Please fill in all fields.');
  if(email===ADMIN_EMAIL&&pass===ADMIN_PASS){
    const users=DB.getUsers();
    if(!users[email]){users[email]={name:'Admin',password:btoa(pass),createdAt:Date.now()};DB.saveUsers(users);}
    return loginUser({email,name:'Admin'});
  }
  const users=DB.getUsers();
  if(!users[email])return showAuthMsg('No account found with this email.');
  if(users[email].password!==btoa(pass))return showAuthMsg('Incorrect password.');
  loginUser({email,name:users[email].name});
}
function handleRegister(){
  const name=document.getElementById('reg-name').value.trim();
  const email=document.getElementById('reg-email').value.trim();
  const pass=document.getElementById('reg-pass').value;
  if(!name||!email||!pass)return showAuthMsg('Please fill in all fields.');
  if(pass.length<6)return showAuthMsg('Password must be at least 6 characters.');
  if(!/\S+@\S+\.\S+/.test(email))return showAuthMsg('Enter a valid email address.');
  if(email===ADMIN_EMAIL)return showAuthMsg('This email is reserved.');
  const users=DB.getUsers();
  if(users[email])return showAuthMsg('Account already exists with this email.');
  users[email]={name,password:btoa(pass),createdAt:Date.now()};
  DB.saveUsers(users);
  showAuthMsg('Account created! Signing you in...','success');
  setTimeout(()=>loginUser({email,name}),900);
}
function loginUser(user){state.user=user;state.isGuest=false;DB.saveSession(user);initChatScreen();}
function guestLogin(){
  const existing=parseInt(sessionStorage.getItem('mmcoe_guest_used')||'0');
  if(existing>=5){showAuthMsg('You have used all 5 guest messages. Please sign in to continue.','error');return;}
  state.user={name:'Guest',email:'guest'};state.isGuest=true;state.guestMsgCount=existing;
  initChatScreen();
}
function logout(){showLogoutModal();}
function showLogoutModal(){document.getElementById('logout-modal').classList.add('show');}
function closeLogoutModal(){document.getElementById('logout-modal').classList.remove('show');}
function confirmLogout(){
  closeLogoutModal();DB.clearSession();
  state={user:null,isGuest:false,messages:[],guestMsgCount:0,sessionId:null};
  document.getElementById('messages-area').innerHTML=mkWelcome('Welcome to MMCOE',"Your intelligent guide for Marathwada Mitra Mandal's College of Engineering.");
  document.getElementById('auth-screen').classList.add('active');
  document.getElementById('chat-screen').classList.remove('active');
  document.getElementById('login-gate').style.display='none';
  document.getElementById('msg-count-bar').style.display='none';
  showToast('Signed out successfully');
}
function showAuth(){document.getElementById('auth-screen').classList.add('active');document.getElementById('chat-screen').classList.remove('active');}
function isAdmin(){
  if(!state.user||state.isGuest)return false;
  const u=DB.getUsers()[state.user.email];
  return !!(u&&state.user.email===ADMIN_EMAIL&&u.password===btoa(ADMIN_PASS));
}
function mkWelcome(title,desc){
  return `<div id="welcome-banner" class="welcome-banner">
  <div class="welcome-icon">&#127891;</div>
  <div class="welcome-title">${title}</div>
  <div class="welcome-desc">${desc}</div>
  <div class="quick-chips">
    <span class="chip" onclick="sendQuick('about')">About MMCOE</span>
    <span class="chip" onclick="sendQuick('admission')">How to Apply</span>
    <span class="chip" onclick="sendQuick('courses')">Branches</span>
    <span class="chip" onclick="sendQuick('placements')">Placements</span>
    <span class="chip" onclick="sendQuick('fees')">Fees</span>
    <span class="chip" onclick="sendQuick('contact')">Contact</span>
  </div></div>`;
}

function initChatScreen(){
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('chat-screen').classList.add('active');
  document.getElementById('nav-name').textContent=isAdmin()?'Admin':state.user.name;
  document.getElementById('nav-email').textContent=state.isGuest?'Guest Mode':state.user.email;
  document.getElementById('nav-avatar').textContent=state.user.name.charAt(0).toUpperCase();
  document.getElementById('admin-btn').style.display=isAdmin()?'flex':'none';
  state.sessionId='session_'+Date.now();
  state.messages=[];
  updateGuestBar();
  loadSidebarHistory();
}
function updateGuestBar(){
  const bar=document.getElementById('msg-count-bar');
  if(state.isGuest){const r=5-state.guestMsgCount;bar.style.display='block';bar.textContent=r>0?`${r} free message${r!==1?'s':''} remaining`:'';}
  else bar.style.display='none';
}

function sendMessage(textArg){
  const input=document.getElementById('chat-input');
  const userText=textArg||input.value.trim();
  if(!userText)return;
  if(state.isGuest&&state.guestMsgCount>=5){document.getElementById('login-gate').style.display='block';return;}
  input.value='';autoResize(input);
  closeMobileSidebar();
  const wb=document.getElementById('welcome-banner');if(wb)wb.remove();
  const {html}=getResponse(userText);
  appendMessage('user',userText);
  state.messages.push({role:'user',content:userText});
  if(state.isGuest){
    state.guestMsgCount++;
    sessionStorage.setItem('mmcoe_guest_used',state.guestMsgCount);
    updateGuestBar();
    if(state.guestMsgCount>=5)setTimeout(()=>{document.getElementById('login-gate').style.display='block';},300);
  }
  showTyping();
  document.getElementById('send-btn').disabled=true;
  setTimeout(()=>{
    hideTyping();
    appendMessage('bot',html);
    state.messages.push({role:'bot',content:html});
    saveSession(userText);
    loadSidebarHistory();
    document.getElementById('send-btn').disabled=false;
    document.getElementById('chat-input').focus();
  },300);
}

function sendQuick(key){
  closeMobileSidebar();
  if(state.isGuest&&state.guestMsgCount>=5){document.getElementById('login-gate').style.display='block';return;}
  const wb=document.getElementById('welcome-banner');if(wb)wb.remove();
  const isKey=!!KB[key];
  const label=isKey?(LABELS[key]||key):key;
  const html=isKey?KB[key]:getResponse(key).html;
  appendMessage('user',label);
  state.messages.push({role:'user',content:label});
  if(state.isGuest){
    state.guestMsgCount++;
    sessionStorage.setItem('mmcoe_guest_used',state.guestMsgCount);
    updateGuestBar();
    if(state.guestMsgCount>=5)setTimeout(()=>{document.getElementById('login-gate').style.display='block';},300);
  }
  showTyping();
  document.getElementById('send-btn').disabled=true;
  setTimeout(()=>{
    hideTyping();
    appendMessage('bot',html);
    state.messages.push({role:'bot',content:html});
    saveSession(label);
    loadSidebarHistory();
    document.getElementById('send-btn').disabled=false;
  },300);
}

function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,140)+'px';}

function appendMessage(role,content){
  const area=document.getElementById('messages-area');
  const time=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  const isBot=role==='bot';
  const row=document.createElement('div');row.className='msg-row'+(isBot?'':' user');
  const av=document.createElement('div');av.className='msg-avatar '+(isBot?'bot':'user-av');
  av.textContent=isBot?'G':(state.user?.name?.charAt(0).toUpperCase()||'U');
  const bub=document.createElement('div');bub.className='msg-bubble '+(isBot?'bot':'user-b');
  bub.innerHTML=isBot?content:esc(content);
  const t=document.createElement('div');t.className='msg-time';t.textContent=time;
  const w=document.createElement('div');w.appendChild(bub);w.appendChild(t);
  row.appendChild(av);row.appendChild(w);
  area.appendChild(row);area.scrollTop=area.scrollHeight;
}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function showTyping(){
  const area=document.getElementById('messages-area');
  const el=document.createElement('div');el.className='typing-row';el.id='typing-indicator';
  el.innerHTML='<div class="msg-avatar bot">G</div><div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  area.appendChild(el);area.scrollTop=area.scrollHeight;
}
function hideTyping(){const el=document.getElementById('typing-indicator');if(el)el.remove();}

function saveSession(lastMsg){
  if(!state.user||state.isGuest||state.messages.length<2)return;
  const history=DB.getHistory();
  const idx=history.findIndex(h=>h.sessionId===state.sessionId);
  const entry={
    sessionId:state.sessionId,userEmail:state.user.email,
    title:lastMsg.length>45?lastMsg.substring(0,45)+'...':lastMsg,
    preview:state.messages[state.messages.length-1]?.content?.replace(/<[^>]+>/g,'').substring(0,80)+'...',
    messages:state.messages,timestamp:Date.now(),
    count:state.messages.filter(m=>m.role==='user').length
  };
  if(idx>=0)history[idx]=entry;else history.unshift(entry);
  DB.saveHistory(history.slice(0,100));
}
function loadSidebarHistory(){
  if(!state.user||state.isGuest){
    document.getElementById('sidebar-history').innerHTML='<div style="padding:6px 10px;font-size:.78rem;color:var(--text-sub);">Sign in to save history</div>';return;
  }
  const history=DB.getHistory().filter(h=>h.userEmail===state.user.email).slice(0,6);
  const el=document.getElementById('sidebar-history');
  el.innerHTML=history.length
    ?history.map(h=>`<button class="history-item" onclick="loadSession('${h.sessionId}')"><span class="history-item-dot"></span><span class="history-item-text">${h.title}</span></button>`).join('')
    :'<div style="padding:6px 10px;font-size:.78rem;color:var(--text-sub);">No history yet</div>';
}
function loadSession(sid){
  const s=DB.getHistory().find(h=>h.sessionId===sid);if(!s)return;
  const area=document.getElementById('messages-area');area.innerHTML='';state.messages=[];
  s.messages.forEach(m=>{appendMessage(m.role==='user'?'user':'bot',m.content);state.messages.push(m);});
  state.sessionId=s.sessionId;showToast('Session loaded');closeHistory();
}
function openHistory(){
  if(!state.user||state.isGuest){showToast('Sign in to view history');return;}
  renderHistoryPanel();
  document.getElementById('history-panel').classList.add('open');
  document.getElementById('backdrop').classList.add('show');
}
function closeHistory(){document.getElementById('history-panel').classList.remove('open');document.getElementById('backdrop').classList.remove('show');}
function renderHistoryPanel(filter=''){
  const history=DB.getHistory().filter(h=>h.userEmail===state.user?.email);
  const filtered=filter?history.filter(h=>h.title.toLowerCase().includes(filter.toLowerCase())):history;
  const el=document.getElementById('panel-list');
  if(!filtered.length){el.innerHTML=`<div class="panel-empty"><div class="panel-empty-icon">&#128172;</div>${filter?'No results found':'No chat history yet.'}</div>`;return;}
  el.innerHTML=filtered.map(h=>{
    const d=new Date(h.timestamp).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
    return `<div class="history-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;" onclick="loadSession('${h.sessionId}')">
          <div class="history-card-title">${h.title}</div>
          <div class="history-card-preview">${h.preview||''}</div>
          <div class="history-card-meta"><span class="history-card-date">${d}</span><span class="history-card-count">${h.count} msgs</span></div>
        </div>
        <button onclick="deleteSession('${h.sessionId}')" style="background:none;border:none;color:var(--text-sub);cursor:pointer;font-size:1rem;padding:4px;flex-shrink:0;opacity:.6;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='.6'">&#128465;</button>
      </div>
    </div>`;
  }).join('');
}
function deleteSession(sid){
  DB.saveHistory(DB.getHistory().filter(h=>h.sessionId!==sid));
  renderHistoryPanel(document.getElementById('history-search').value);
  loadSidebarHistory();showToast('Chat deleted');
}
function filterHistory(v){renderHistoryPanel(v);}
function newChat(){
  document.getElementById('messages-area').innerHTML=mkWelcome('New Conversation','Ask me anything about MMCOE!');
  state.messages=[];state.sessionId='session_'+Date.now();showToast('New chat started');
}
function clearChat(){if(state.messages.length===0)return;if(confirm('Clear this conversation?'))newChat();}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('collapsed');}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}

function toggleMobileSidebar(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sidebar-overlay');
  if(sb.classList.contains('mobile-open')){sb.classList.remove('mobile-open');ov.classList.remove('show');}
  else{sb.classList.add('mobile-open');ov.classList.add('show');}
}
function closeMobileSidebar(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

function openAdminPanel(){
  if(!isAdmin()){showToast('Access denied');return;}
  renderAdminPanel();
  document.getElementById('admin-panel').classList.add('open');
  document.getElementById('backdrop').classList.add('show');
}
function closeAdminPanel(){document.getElementById('admin-panel').classList.remove('open');document.getElementById('backdrop').classList.remove('show');}
function renderAdminPanel(filter=''){
  if(!isAdmin())return;
  const users=DB.getUsers(),history=DB.getHistory(),today=new Date().toDateString();
  const allUsers=Object.entries(users).filter(([e])=>e!==ADMIN_EMAIL).map(([email,data])=>({email,...data}));
  const filtered=filter?allUsers.filter(u=>u.name.toLowerCase().includes(filter.toLowerCase())||u.email.toLowerCase().includes(filter.toLowerCase())):allUsers;
  document.getElementById('stat-total').textContent=allUsers.length;
  document.getElementById('stat-today').textContent=allUsers.filter(u=>new Date(u.createdAt).toDateString()===today).length;
  const withChats=new Set(history.map(h=>h.userEmail));
  document.getElementById('stat-active').textContent=allUsers.filter(u=>withChats.has(u.email)).length;
  const el=document.getElementById('admin-list');
  if(!filtered.length){el.innerHTML=`<div style="text-align:center;padding:40px 20px;color:var(--text-sub);">${filter?'No users match.':'No registered users yet.'}</div>`;return;}
  el.innerHTML=filtered.map(u=>{
    const joined=u.createdAt?new Date(u.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'Unknown';
    const chats=history.filter(h=>h.userEmail===u.email).length;
    const msgs=history.filter(h=>h.userEmail===u.email).reduce((s,h)=>s+h.count,0);
    const initials=u.name.split(' ').map(n=>n[0]).join('').toUpperCase().substring(0,2);
    return `<div style="background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:14px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,var(--gold),#e8a800);display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:#fff;flex-shrink:0;">${initials}</div>
        <div><div style="font-size:.95rem;font-weight:600;color:var(--text-main);">${u.name}</div><div style="font-size:.72rem;color:var(--text-sub);">Joined: ${joined}</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="grid-column:1/-1;background:rgba(255,255,255,0.04);border-radius:9px;padding:9px 12px;"><div style="font-size:.68rem;text-transform:uppercase;color:var(--text-sub);margin-bottom:3px;">EMAIL</div><div style="font-size:.83rem;color:var(--gold-bright);">${u.email}</div></div>
        <div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:9px 12px;"><div style="font-size:.68rem;text-transform:uppercase;color:var(--text-sub);margin-bottom:3px;">SESSIONS</div><div style="font-size:.83rem;color:var(--text-main);">${chats} chats</div></div>
        <div style="background:rgba(255,255,255,0.04);border-radius:9px;padding:9px 12px;"><div style="font-size:.68rem;text-transform:uppercase;color:var(--text-sub);margin-bottom:3px;">MESSAGES</div><div style="font-size:.83rem;color:var(--text-main);">${msgs} msgs</div></div>
      </div>
    </div>`;
  }).join('');
}
function filterUsers(val){renderAdminPanel(val);}

(function(){
  const s=DB.getSession();
  if(s&&s.email&&s.email!=='guest'){state.user=s;state.isGuest=false;initChatScreen();}
})();

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(e) {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === 'I') e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === 'J') e.preventDefault();
  if (e.ctrlKey && e.key === 'u') e.preventDefault();
});
