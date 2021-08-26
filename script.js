const div = document.querySelector('.moji');
const mojis = ['😄','🙂','😐','😑','☹️','😩','😠','😡','🤢','😤','🤧'];

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});
