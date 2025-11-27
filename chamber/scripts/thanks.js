const myInfo = new URLSearchParams(window.location.search);

document.querySelector("#form-deets").innerHTML = `
<p>Thank you for joining us, <strong>${myInfo.get('first')} ${myInfo.get('last')}</strong>!
<p>You are now officially a <strong>${myInfo.get('mem-level')}</strong> member of the</p>
<p>Laketown Chamber of Commerce/Activity Committee.</p>
<p>Your Email: ${myInfo.get('email')}</p>
<p>Your Phone Number: ${myInfo.get('phone')}</p>
<p>Time of Joining: ${myInfo.get('timestamp')}.</p>
<p>Look forward to hearing from us soon!</p>`;