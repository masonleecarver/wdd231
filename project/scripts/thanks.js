const myInfo = new URLSearchParams(window.location.search);

document.querySelector("#form-deets").innerHTML = `
<p>Thank you so much for your order, <strong>${myInfo.get('first')} ${myInfo.get('last')}</strong>!
<p>If I'm not mistaken, you've ordered a <strong>${myInfo.get('size')}</strong> <strong>${myInfo.get('state')}</strong>...</p>
<p>I should be able to do that! If I can't I'll contact you at:</p>
<p>Your Email: ${myInfo.get('email')}</p>
<p>Your Phone Number: ${myInfo.get('phone')}</p>
<p>Time of Order: ${myInfo.get('timestamp')}.</p>
<p>Look forward to hearing from me soon!</p>`;