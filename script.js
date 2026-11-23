const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const reservationForm = document.getElementById('reservationForm');
const visitDate = document.getElementById('visitDate');
if (visitDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  visitDate.min = localToday;
}
if (reservationForm) {
  reservationForm.addEventListener('submit', event => {
    event.preventDefault();
    const guest = document.getElementById('guestName').value.trim();
    const count = document.getElementById('guestCount').value;
    const date = document.getElementById('visitDate').value;
    document.getElementById('reservationMessage').textContent =
      `Thanks, ${guest}! Your demo request for ${count} guest(s) on ${date} is noted on this page.`;
    reservationForm.reset();
  });
}
